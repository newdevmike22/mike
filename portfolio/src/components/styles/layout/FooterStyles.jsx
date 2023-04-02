import styled from "styled-components";

export const FooterStyles = styled.footer`
    width: 100%;
    padding: 2.5rem;
    color: #fff;
    line-height: 1.5;
    text-align: center;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${({ theme }) => theme.colors.blueTwo};

    .date {
        font-family: "Poppins", sans-serif;
        font-size: 1.10rem;
    }
`;

export const FooterNav = styled.div`
    a {
        color: ${({ theme }) => theme.colors.yellow};
        margin-right: 0.75rem;
        text-transform: uppercase;

        &:hover {
            color: #cfe0fa;
        }

        &:last-child {
        margin: 0;
        }
    }
`;

export const CodedWith = styled.div`
    a {
        margin: 0.7rem 0;
    }
`;