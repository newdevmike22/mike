import styled, { keyframes, css } from "styled-components";

const navItemFade = keyframes`
    from {
        opacity: 0;
        transform: translate(50px);
    }
    to {
        opacity: 1;
        transform: translate(0px);
    }
`;

const navItemAnimation = ({index}) => css`
    animation: ${navItemFade} 0.5s ease forwards ${index / 6 + 0.5}s
`;

export const Nav = styled.nav`
    height: 160px;
    width: 100%;
    padding: 0 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    z-index: 98;
    transition: all 1s ease-in-out;
    background: #fff;
    top: ${({scrollDirection}) => scrollDirection === "down" ? "-160px" : "80px"};
`;

export const Logo = styled.img`
    width: 125px;
    margin-left: 0.8rem;

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin-left: 0.1rem;
    }
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
        #f2df07 50%,
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
        #f2df07 50%,
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
        #f2df07 50%,
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
    font-size: 1.10rem;
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

export const NavItem = styled.li`
    margin: 0.2rem 0.4rem 0.2rem 0.4rem;

    &:last-child {
        margin-right: 0;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        opacity: 0;
        margin: 1.2rem 0;
        ${({menuOpen}) => menuOpen ? navItemAnimation : null }
    }
`;

export const NavLink = styled.a`
    text-transform: uppercase; 
    color: ${({theme}) => theme.colors.blueFour};
    letter-spacing: 1.5px;

    &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0%;
        background: linear-gradient(
            135deg,
            #f9680e 0%,
            #f2df07 50%,
            #fff 100%);
        transition: all ease-in-out 300ms;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        color: white;
    }
`;

export const Profile = styled.div`
    display: none;

    @media(max-width: ${({theme}) => theme.mobile}) {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            height: 9rem;
            width: auto;
            border-radius: 50%;
            display: block;
            margin: 1.5rem 0;
        }
    }
`;

export const SocialIcon = styled.div`
    display: none;

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            margin: 0 0.5rem;
            font-size: 2rem;
        }
    }
`;

export const SocialLink = styled.a`
    color: ${({theme}) => theme.colors.white};

    &:hover {
        color: #f2df07;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        color: white;
    }
`;