import styled from "styled-components";

export const SectionHeading = styled.div`
    text-align: center;
    margin-bottom: 7rem;

    h1 {
        text-transform: uppercase;
        display: inline-block;
        font-size: 4rem;
        margin: 0.5rem 0;
        position: relative;

        &::after {
            content: "";
            display: block;
            height: 5px;
            width: 50%;
            background: linear-gradient(
                135deg,
                #663399 0%,
                #f9680e 50%,
                #f2df07 100%
            );
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        @media(max-width: ${({theme}) => theme.mobile}) {
            font-size: 3rem;
            margin-top: -3rem;
        }
    }
`;