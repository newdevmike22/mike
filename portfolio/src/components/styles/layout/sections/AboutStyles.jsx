import styled, { keyframes } from "styled-components";


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const wave = keyframes`
    0% {
        transform: rotate(0deg);
    }
    10% {
        transform: rotate(14deg);
    }
    20% {
        transform: rotate(-8deg);
    }
    30% {
        transform: rotate(14deg);
    }
    40% {
        transform: rotate(-4deg);
    }
    50% {
        transform: rotate(10deg);
    }
    60% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

export const AboutStyles = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10rem 0 6rem 0;

    @media(max-width: ${({ theme }) => theme.mobile }) {
        flex-direction: column;
        align-items: flex-start;
    }  
`;

export const ImageContainer = styled.div`
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.5rem;
    position: relative;

    @media(max-width: ${({ theme }) => theme.mobile }) {
        margin: 0 auto 4rem auto;
    }  
`;

export const Image = styled.img`
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    position: absolute;
    z-index: 4;
`;

export const GradCircle = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    animation: ${rotate} 5s linear infinite;
    background: linear-gradient(
        to right,
        ${({theme}) => theme.colors.orange} 0%,
        ${({theme}) => theme.colors.green} 50%,
        ${({theme}) => theme.colors.purple} 100%
    );
`;

export const AboutContent = styled.div`
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;

        p {
            font-family: "Poppins", sans-serif;
            font-size: 1.4rem;
            text-align: justify;
            margin-bottom: 1.5rem;
        }

        @media(max-width: ${({ theme }) => theme.mobile }) {
            p {
                font-size: 1.2rem; 
                text-align: left;   
            }
    }  
`;

export const AboutHeading = styled.div`
    font-size: 3rem;
    margin-bottom: 20px;
`;

export const Emoji = styled.span`
    display: inline-block;
    animation: ${wave} 3s infinite;
    transform-origin: 70% 70%;
`;