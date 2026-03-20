import { Skills } from './skills.jsx';
import { skillsData } from '../data/skillsData.jsx'; 
export function SkillsSection() {
    return (
        <section>
            {skillsData.map((skill, index) => (
                <Skills 
                    key={index}
                    skillName={skill.skillName}
                    skillImage={skill.skillImage}
                    skillImageAlt={skill.skillImageAlt}
                    skillIcons={skill.skillIcons}
                    skillDescriptions={skill.skillDescriptions}
                />
            ))}
        </section>
    );
}