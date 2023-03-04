import { useState } from "react"
import { LineOne, LineThree, LineTwo, Logo, MenuIcon, Nav, NavList } from "../styles/layout/NavStyles"
import logo from "../../images/mike_logo4.png"

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
                    <li>About</li>
                    <li>Services</li>
                </NavList>
            </Nav>
        </>
    )
}