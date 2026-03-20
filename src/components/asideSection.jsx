import { useState, useEffect } from 'react';
import { profileData, skills } from '../data/asideSectionData.jsx';
import '../styles/asideSection.css'; 

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

export function SkillBar({ skill, percentage }) {
    return (
        <div className="skill-item">
            <div className="skill-header">
                <span className="skill-name">{skill}</span>
                <span className="skill-percentage">{percentage}%</span>
            </div>
            <div className="progress-bar-container">
                <div 
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}

export function SkillsSection({ skills, title = "Domino de tecnologías" }) {
    return (
        <div className="skills-section">
            {title && <h3 className="skills-title">{title}</h3>}
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <SkillBar
                        key={index}
                        skill={skill.name}
                        percentage={skill.percentage}
                    />
                ))}
            </div>
        </div>
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

            <SkillsSection skills={skills} />
        </div>
    );
}