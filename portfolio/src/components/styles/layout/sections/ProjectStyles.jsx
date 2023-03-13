import styled from "styled-components";

export const ProjectStyles = styled.section`
    min-height: 90vh;
    padding: 10rem 0 5rem 0;
    width: 100%;
`;

export const SingleProject = styled.div`
    display: flex;
    align-items: center;

    &:nth-child(even) {
        flex-direction: row-reverse;
        margin: 10rem 0;

        a {
            img {
                transform: rotateY(-30deg);
            }

            div {
                transform: skew(3deg, -3deg) rotateY(-30deg);        
            }

            &:hover {
                img {
                    transform: rotateY(0deg);    
                }

                div {
                    transform: skew(-3deg, 3deg) rotateY(0deg);        
                }
            }   
        }
    }

    @media(max-width: ${({ theme }) => theme.mobile }) {
        flex-direction: column;

        &:nth-child(even) {
        flex-direction: column;

        a {
            margin-bottom: 2.5rem;

            img {
                transform: rotateY(0deg);
            }

            div {
                transform: skew(-3deg, 3deg) rotateY(0deg);        
            }

            &:hover {
                div {
                    transform: skew(3deg, -3deg) rotateY(0deg);        
                }
            }   
        }
    }

    }  
`;

export const ProjectImageContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    perspective: 1000px;

    img {
        width: 90%;
        border-radius: 20px;
        transform: rotateY(30deg);
        transition: ${({theme}) => theme.transition};
        z-index: 3;
    }

    &:hover {
        img {
            transform: rotateY(0deg);    
        }

        div {
            transform: skew(-3deg, 3deg) rotateY(0deg);        
        }
    }

    @media(max-width: ${({ theme }) => theme.mobile }) {
        margin-bottom: 2.5rem;
        justify-content: flex-start;

        img {
            transform: rotateY(0deg); 
            width: 100%;
            border-radius: 9px;        
        }
    }  
`;

export const SlantedCard = styled.div`
    position: absolute;
    width: 90%;
    height: 100%;
    background: linear-gradient(
        to right, 
        #f9680e 0%,
        #663399 100%
    );
    border-radius: 20px;
    transition: ${({theme}) => theme.transition};
    transform: skew(3deg, -3deg) rotateY(30deg);
    z-index: 2;

    @media(max-width: ${({ theme }) => theme.mobile }) {
        transform: skew(3deg, -3deg) rotateY(0deg);
        width: 100%;
        border-radius: 9px;
    }  
`;

export const ProjectDescrip = styled.div`
    flex: 1; 
    
    h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: ${({theme}) => theme.colors.blueTwo};
    }

    p {
        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        text-align: justify;
    }

    div {
        display: flex;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            margin: 2rem 2rem 2rem 0;
            font-size: 1.2rem;

            svg {
                margin-right: 0.5rem;
            }
        }
    }

    @media(max-width: ${({ theme }) => theme.mobile }) {
        margin-bottom: -4rem;

        p {
            font-size: 1.2rem;
            text-align: left;
        }
    }  
`;

export const ProjectTags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    
    span {
        margin-bottom: 0.5rem;
        margin-right: 1rem;
        background: #0e213c;
        display: inline-block;
        padding: 7px;
        border-radius: 5px;
        font-size: 1rem;
        color: #fff;       
    }
`;