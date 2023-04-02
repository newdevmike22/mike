import { CodedWith, FooterNav, FooterStyles } from "../styles/layout/FooterStyles";

const today = new Date();

export const Footer = () => {
    return (
        <>
        <FooterStyles>
            <FooterNav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </FooterNav>
            <CodedWith>Coded With React And Styled Components</CodedWith>
            <div className="date">
                &copy; themikedodson
                <span> {today.getFullYear()} </span>
                - All Rights Reserved
            </div>
        </FooterStyles>            
        </>
    )
}