import { SectionHeading } from "../styles/layout/common/SectionHeadStyles";
import { ProjectDescrip, ProjectImageContainer, ProjectStyles, ProjectTags, SingleProject, SlantedCard } from "../styles/layout/sections/ProjectStyles";
import { Project } from "../../data/Project";
import { FaGithub, FaLink } from "react-icons/fa";


export const Projects = () => {
    return (
        <>
            <ProjectStyles>
                <SectionHeading>
                    <h1>Recent Work</h1>
                </SectionHeading>
                <div>
                    {Project && Project.map((project, index) => (
                        <SingleProject key={index}>
                            <ProjectImageContainer href={project.projectlink} target="_blank">
                                <img src={project.thunbnail} alt={project.title}/>
                                <SlantedCard/>
                            </ProjectImageContainer>
                            <ProjectDescrip>
                                <h1>
                                    {project.title}
                                </h1>
                                <ProjectTags>
                                    {project.tags && project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex}>{tag}</span>
                                    ))}
                                </ProjectTags>
                                <p>{project.paragraph}</p>
                                <div>
                                    <a href={project.codelink} target="_blank" rel="noreferrer">
                                        <FaGithub/>
                                        <span>View Code</span>
                                    </a>
                                    <a href={project.projectlink} target="_blank" rel="noreferrer">
                                        <FaLink/>
                                        <span>{project.projectlinkText}</span>
                                    </a>
                                </div>
                            </ProjectDescrip>
                        </SingleProject>
                    ))}
                </div>
            </ProjectStyles>
            <hr/>
        </>
    )
}