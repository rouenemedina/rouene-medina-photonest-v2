import "./DashboardPage.scss";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

interface User {
  user_first_name: string;
  user_last_name: string;
  user_email: string;
}

interface DashboardProps {
  user?: User | null;
}

const DashboardPage: React.FC<DashboardProps> = ({ user: initialUser }) => {
  const [failedAuth, setFailedAuth] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(initialUser || null);
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (failedAuth) {
      setRedirect(true);
    }
  }, [failedAuth]);

  useEffect(() => {
    if (redirect) {
      navigate("/login");
    }
  }, [redirect, navigate]);

  const login = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }
    try {
      const response = await axios.get(`${API_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setFailedAuth(true);
      navigate("/login");
    }
  };

  useEffect(() => {
    login();
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    setCurrentUser(null);
    setFailedAuth(true);
  };

  return (
    <>
      <Header />
      <main className="dashboard">
        <h2>DASHBOARD</h2>
        <section>
          <article>
            <h1> Hi, {currentUser ? currentUser.user_first_name : "Guest"}</h1>
            <h3>What are we doing today?</h3>
            <img src="" alt="User Image"></img>
          </article>
          <article>
            <Link to="/portfolio">
              <Buttons type="button">Portfolio</Buttons>
            </Link>
          </article>
        </section>
        <section>
          <article>
            <p>First Name: {currentUser?.user_first_name}</p>
            <p>Last Name: {currentUser?.user_last_name}</p>
            <p>Email: {currentUser?.user_email}</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DashboardPage;
