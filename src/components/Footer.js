import React from "react";

const Footer = ({ FooterStyling, Disclaimer, LinkedIn, LinkedInColor, GitHub, GitHubColor }) => {
    return (
        <footer className={FooterStyling = `${FooterStyling}`}>
            <p>&copy; {Disclaimer = `${Disclaimer}`}</p>
            <p>
                Follow Michael on{" "}
                <a href={LinkedIn = `${LinkedIn}`} className={LinkedInColor = `${LinkedInColor}`}>
                    LinkedIn
                </a>{" "}
                
                and{" "}
                
                <a href={GitHub = `${GitHub}`} className={GitHubColor = `${GitHubColor}`}>
                    GitHub
                </a>
            </p>
        </footer>
    );
}

export default Footer;