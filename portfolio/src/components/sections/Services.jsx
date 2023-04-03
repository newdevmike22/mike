import { FaCode, FaLaptop } from "react-icons/fa"
import { SectionHeading } from "../styles/layout/common/SectionHeadStyles"
import { IconWrapper, ServicesItems, ServiceStyles, SingleService } from "../styles/layout/sections/ServiceStyles"

export const Services = () => {
    return (
        <>
            <hr/>
            <ServiceStyles id="services">
                <SectionHeading>
                    <h1>Services</h1>
                </SectionHeading>
                <ServicesItems>
                    <SingleService>
                        <IconWrapper>
                            <FaCode/>
                        </IconWrapper>
                            <h1>Web Development</h1>
                            <p>I develop professional-looking front-end web apps for businesses, organizations, and individuals using HTML, CSS, JavaScript, ReactJS, SASS, Styled Components, Bootstrap, and Firestore.</p>
                    </SingleService>
                    <SingleService>
                        <IconWrapper>
                            <FaLaptop/>
                        </IconWrapper>
                            <h1>Concept To Creation</h1>
                            <p>From the client who knows what they want to the one who is just brainstorming, I turn concepts/ideas into pixel-perfect, well-designed websites.</p>   
                    </SingleService>
                </ServicesItems>
            </ServiceStyles>
        </>
    )
}