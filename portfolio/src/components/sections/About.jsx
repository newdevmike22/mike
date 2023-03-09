import { AboutContent, AboutHeading, AboutStyles, Emoji, GradCircle, Image, ImageContainer } from "../styles/layout/sections/AboutStyles";
import profilePic from "../../images/Mike_Photo.png";

export const About = () => {
    return (
        <>
            <AboutStyles id="about">
                <ImageContainer>
                    <Image src={profilePic} alt="Michael Dodson"/>
                    <GradCircle/>
                </ImageContainer>
                <AboutContent>
                    <AboutHeading>
                        Hello <Emoji>👋</Emoji>
                    </AboutHeading> 
                    <p>
                       I'm Mike, a front-end developer, graphic designer, and blogger
                       based in St. Louis, Missouri. I work with small businesses to assist 
                       them in developing and or growing their brands.
                    </p>  
                    <p>
                       I am a creative thinking, well-organized, detail-oriented problem 
                       solver who enjoys helping others achieve their goals.
                    </p>  
                    <p>
                      I am a family person who loves watching NFL, NBA, and NCAA football 
                      and basketball games. I also greatly enjoy Japanese anime, superhero 
                      and martial arts films/tv series, and reading Stephen King and Star 
                      Wars novels and self-help books.
                    </p>  
                    <p><a href="#contact"><strong>Let's build something special together!</strong></a></p>   
                </AboutContent>
            </AboutStyles>
            <hr/>
        </>
    )
}