import "./LayoutFeatureWork.scss";
import React, { useCallback } from 'react';
import LayoutImageandInput from "../LayoutImageandInput/LayoutImageandInput";

interface FeatureWorkProps {
    onSubmit: (submitHandler: () => void) => void;
}
const LayoutFeatureWork: React.FC<FeatureWorkProps>= ({ onSubmit }) => {
    const handleLayoutSubmit = useCallback(() => {
        const submitHandler = () => {
            console.log("Layout");
        }
        onSubmit(submitHandler);
    }, [onSubmit]);

    return (
        <main className="feature">
            <LayoutImageandInput onSubmit={handleLayoutSubmit}/>
            <LayoutImageandInput onSubmit={handleLayoutSubmit}/>
            <LayoutImageandInput onSubmit={handleLayoutSubmit}/>
        </main>
    );
};

export default LayoutFeatureWork;