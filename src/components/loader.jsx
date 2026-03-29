import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';

function Loader(){
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation(); 
    useEffect(() => {
        setIsLoading(true);
        const handleLoadComplete = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };
        if (document.readyState === 'complete') {
            handleLoadComplete();
        } else {
            window.addEventListener('load', handleLoadComplete);
            return () => {
                window.removeEventListener('load', handleLoadComplete);
            };
        }
    }, [location.pathname]);
    if (!isLoading) {
        return null;
    }
    return (
        <div className="loader-overlay">
            <video src="/videos/loading.mp4" autoPlay loop muted className="loader-video" ></video>
        </div>
    );
}
export default Loader;