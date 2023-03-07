import styled from "styled-components";

export const TopBannerStyles = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background: ${({theme}) => theme.colors.blueFour};
    color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 20px;
    z-index: 99;

    @media(max-width: ${({ theme }) => theme.mobile }) {
        justify-content: center;
    }          
`;

export const BannerSection = styled.div`
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.mobile }) {
        justify-content: center;
        display: ${({ showOnMobile}) => showOnMobile ? "inline-block" : "none"}
    }  
`;

export const BannerLink = styled.a`
    color: #fff;

    &:hover {
        color: ${({theme}) => theme.colors.yellow};
    }
`;