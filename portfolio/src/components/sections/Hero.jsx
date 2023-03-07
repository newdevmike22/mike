import { ArrowDown, HeroContent, HeroSocialIcons, HeroStyles, SocialIcon } from "../styles/layout/sections/HeroStyles";
import { CTAButton } from "../styles/layout/common/CTAButtonStyles";
import { FaArrowDown, FaLinkedin, FaGithubAlt, FaTwitter } from "react-icons/fa";

export const Hero = () => {
    return (
        <HeroStyles>
            <HeroContent>
                <h1>Michael Dodson</h1>
                <h3>{"{Front-End Web Developer}"}</h3>
                <p>HTML • CSS • JavaScript • React</p>
                <div>
                    <CTAButton href="#projects">Projects</CTAButton>
                    <CTAButton href="#contact" primary margin="0 0 0 20px">Hire Me</CTAButton>
                </div>
            </HeroContent>
            <ArrowDown href="#about">
                <FaArrowDown/>
            </ArrowDown>
            <HeroSocialIcons>
                <SocialIcon href="https://www.linkedin.com/in/michael-dodson-197231b9/" target="_blank">
                    <FaLinkedin/>
                </SocialIcon>
                <SocialIcon href="https://github.com/newdevmike22" target="_blank">
                    <FaGithubAlt/>
                </SocialIcon>
                <SocialIcon href="https://twitter.com/DreamosophyMike" target="_blank">
                    <FaTwitter/>
                </SocialIcon>
            </HeroSocialIcons>
        </HeroStyles>
    )
}