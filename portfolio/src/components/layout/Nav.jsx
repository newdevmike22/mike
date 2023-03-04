import { useState } from "react"
import { LineOne, LineThree, LineTwo, Logo, MenuIcon, Nav, NavItem, NavLink, NavList } from "../styles/layout/NavStyles"
import logo from "../../images/mike_logo4.png"
import { NavItems } from "../../data/NavItems";

export const Navbar = () => {

    const [menuOpen, setMenuOpen ] = useState(false);

    return (
        <>
            <Nav>
                <div>
                    <a href="#hero-section">
                        <Logo src={logo} alt="Mike Dodson logo" />
                    </a>
                </div>
                <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
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
                            <NavLink href="">About</NavLink>
                        </NavItem>       
                    ))}
                </NavList>
            </Nav>
        </>
    )
}