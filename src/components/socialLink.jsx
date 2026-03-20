export function SocialLink({ url, icon, altText, className = "" }) {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={className}
        >
            <img src={icon} alt={altText} />
        </a>
    );
}