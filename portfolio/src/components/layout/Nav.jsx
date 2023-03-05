import { useState } from "react"
import { LineOne, LineThree, LineTwo, Logo, MenuIcon, Nav, NavItem, NavLink, NavList, Profile, SocialIcon, SocialLink } from "../styles/layout/NavStyles"
import logo from "../../images/MikeLogo.png";
import profilePic from "../../images/Mike_Photo.png";
import { NavItems } from "../../data/NavItems";
import {FaLinkedin, FaGithubAlt, FaTwitter} from "react-icons/fa";
import useScrollDirection from "../../hooks/ScrollDirection";

export const Navbar = () => {

    const [menuOpen, setMenuOpen ] = useState(false);
    const scrollDirection = useScrollDirection("down");

    return (
        <>
            <Nav scrollDirection = {scrollDirection}>
                <div>
                    <a href="#hero-section">
                        <Logo src={logo} alt="Mike Dodson logo" />
                    </a>
                </div>
                <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                    <LineOne menuOpen={menuOpen}/>
                    <LineTwo menuOpen={menuOpen}/>
                    <LineThree menuOpen={menuOpen}/>
                </MenuIcon>
                <NavList menuOpen={menuOpen}>
                    {NavItems && NavItems.map((navItem, index) => (
                        <NavItem 
                            key={index} 
                            index = {index} 
                            menuOpen = {menuOpen} 
                            onClick = {() => setMenuOpen(false)}>
                            {navItem.isProfile ? (
                                <NavLink href="#hero-section">
                                    <Profile>
                                        <img src={profilePic} alt="Michael Dodson"/>
                                        <span>Michael Dodson</span>
                                    </Profile>
                                </NavLink>
                            ) : null}
                            {navItem.text ? (
                                <NavLink href={navItem.href}>{navItem.text}</NavLink>
                            ) : null}
                            {
                                navItem.hasSocialIcons ? (
                                    <SocialIcon>
                                        <SocialLink href="https://www.linkedin.com/in/michael-dodson-197231b9/" target="_blank">
                                            <FaLinkedin/>
                                        </SocialLink>
                                        <SocialLink href="https://github.com/newdevmike22" target="_blank">
                                            <FaGithubAlt/>
                                        </SocialLink>
                                        <SocialLink href="https://twitter.com/DreamosophyMike" target="_blank">
                                            <FaTwitter/>
                                        </SocialLink>
                                    </SocialIcon>
                                ) : null}
                        </NavItem>       
                    ))}
                </NavList>
            </Nav>
        </>
    )
}