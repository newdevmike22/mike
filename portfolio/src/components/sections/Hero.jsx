import { ArrowDown, DevIcon, HeroContent, HeroSocialIcons, HeroStyles, SocialIcon } from "../styles/layout/sections/HeroStyles";
import { CTAButton } from "../styles/layout/common/CTAButtonStyles";
import { FaArrowDown, FaLinkedin, FaGithubAlt, FaTwitter, FaEnvelope, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

export const Hero = () => {
    return (
        <HeroStyles>
            <HeroContent>
                <h1>Michael Dodson</h1>
                <h3>Front-End Web Developer</h3>
                <p>HTML • CSS • JavaScript • React</p>
                    <DevIcon><FaHtml5/></DevIcon>
                    <DevIcon><FaCss3Alt/></DevIcon>
                    <DevIcon><DiJavascript1/></DevIcon>
                    <DevIcon><FaReact/></DevIcon>
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
                <SocialIcon href="mailto:themikedodson@gmail.com" target="_blank">
                    <FaEnvelope/>
                </SocialIcon>
            </HeroSocialIcons>
        </HeroStyles>
    )
}