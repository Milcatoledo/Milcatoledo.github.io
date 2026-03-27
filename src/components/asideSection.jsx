import { useState, useEffect } from 'react';
import { profileData } from '../data/asideSectionData.jsx';

export function AgeCalculator({ birthDate, className = "" }) {
    const [age, setAge] = useState(0);

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        
        return age;
    };

    useEffect(() => {
        setAge(calculateAge(birthDate));
    }, [birthDate]);

    return (
        <span className={`age-display ${className}`}>
            {age} años
        </span>
    );
}

export function AsideSection() {
    return (
        <div className="aside-section">
            <div className="age-container">
                <p className="age-text">
                    Tengo <AgeCalculator birthDate={profileData.birthDate} />
                </p>
            </div>
            
            <p className="description">
                {profileData.description}
            </p>
        </div>
    );
}