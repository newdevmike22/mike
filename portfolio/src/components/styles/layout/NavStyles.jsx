import styled from "styled-components";

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    padding: 0 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    z-index: 98;
    transition: all 1s ease-in-out;
    background: #fff;
`;

export const Logo = styled.img`
    width: 130px;
`;

export const MenuIcon = styled.div`
    cursor: pointer;
    background:${({theme, menuOpen}) => menuOpen ? "none" : theme.colors.blueTwo};
    transition: ${({theme}) => theme.transition};
    padding: 0.7rem;
    border-radius: 5px;
    display: none;
    position: absolute;
    right: 20px;
    z-index: 999;

    @media(max-width: ${({theme}) => theme.mobile}) {
        display: inline-block;
    }
`;

export const LineOne = styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    background: linear-gradient(
        135deg,
        #f9680e 0%,
        #fff 100%
    );
    transition: ${({theme}) => theme.transition};
    transform: ${({menuOpen}) => menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(2)" : "none"}
`;

export const LineTwo = styled.div`
    width: 30px;
    height: 3px;
    margin: 5px 0;
    background: linear-gradient(
        135deg,
        #f9680e 0%,
        #fff 100%
    );
    opacity: ${({menuOpen}) => menuOpen ? 0 : 1};
    transition: ${({theme}) => theme.transition};
`;

export const LineThree = styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    margin-left: ${({menuOpen}) => menuOpen ? 0 : "15px"}; 
    background: linear-gradient(
        135deg,
        #f9680e 0%,
        #fff 100%
    );
    transition: ${({theme}) => theme.transition};
    transform: ${({menuOpen}) => menuOpen ? "rotate(45deg) translate(-5px, -6px) scaleX(2)" : "none"}
`;

export const NavList = styled.ul`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;
    flex-wrap: wrap;

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 24rem;
        height: 100vh;
        background:${({theme}) => theme.colors.blueTwo};
        top: 0;
        right: ${({menuOpen}) => menuOpen ? "0" : "-24rem" };
        position: fixed;
        padding-top: 3rem;
        justify-content: flex-start;
        flex-direction: column; 
        z-index: 998;
        transition: ${({theme}) => theme.transition};
    }
`;