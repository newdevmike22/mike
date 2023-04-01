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
                    <p>Excited To Work With You!</p>
                </SectionHeading>
                <ServicesItems>
                    <SingleService>
                        <IconWrapper>
                            <FaCode/>
                        </IconWrapper>
                            <h1>Web Development</h1>
                            <p>I develop frontend web apps using HTML, CSS and JavaScript.</p>
                    </SingleService>
                    <SingleService>
                        <IconWrapper>
                            <FaLaptop/>
                        </IconWrapper>
                            <h1>Design To HTML</h1>
                            <p>I create and convert designs into pexil-perfect HTML/CSS websites.</p>   
                    </SingleService>
                </ServicesItems>
            </ServiceStyles>
        </>
    )
}