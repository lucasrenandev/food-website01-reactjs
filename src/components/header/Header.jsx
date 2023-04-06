import { Header, 
Logo, 
NavBar, 
NavList, 
List, 
LinkNav, 
MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link"
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(BiMenu)
    const navRef = useRef(null)

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(IoClose)
        }
    }

    const hidleMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        })
    }

    useEffect(hidleMenu)

    return(
        <Header>
            <Logo href="/">Foods</Logo>
            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>

            <NavBar ref={navRef} onScroll={hidleMenu}>
                <NavList>
                    <List>
                        <Link smooth to={'#home'}><LinkNav>Home</LinkNav></Link>
                    </List>

                    <List>
                        <Link smooth to={'#about'}><LinkNav>About</LinkNav></Link>
                    </List>

                    <List>
                        <Link smooth to={'#menu'}><LinkNav>Menu</LinkNav></Link>
                    </List>

                    <List>
                        <Link smooth to={'#services'}><LinkNav>Services</LinkNav></Link>
                    </List>

                    <List>
                        <Link smooth to={'#contact'}><LinkNav>Contact</LinkNav></Link>
                    </List>
                </NavList>
            </NavBar>
        </Header>
    )
}