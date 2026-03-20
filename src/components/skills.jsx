import '../styles/skills.css'
export function Skills({ skillName, skillImage, skillImageAlt, skillIcons = [], skillDescriptions = []}) {
    return (
        <article className="skill-card">
            <div className="skill-image">
                <img src={skillImage} alt={skillImageAlt} />
            </div>
            <div className="skill-details">
                <h2>{skillName}</h2>
                {skillIcons.length > 0 && (
                    <div className="skill-icons">
                        {skillIcons.map((icon, index) => (
                        <img 
                            key={index}
                            src={icon.src}
                            alt={icon.alt} 
                        />
                        ))}
                    </div>
                )}
                <ul className="skill-descriptions">
                {skillDescriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
                </ul>
            </div>
        </article>   
    );
}