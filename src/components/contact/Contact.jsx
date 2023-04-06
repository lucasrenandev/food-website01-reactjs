import { Contact,
ContactBox, H5, Nav, NavList,
List, NavLink, SocialIcons, Icon } from "./styled";
import { RiFacebookFill }  from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export default function contact() {
    return(
        <Contact id="contact">
            <ContactBox>
                <H5>Menu links</H5>
                <Nav>
                    <NavList>
                        <List><Link smooth to={'#home'}><NavLink>home</NavLink></Link></List>
                        <List><Link smooth to={'#about'}><NavLink>about</NavLink></Link></List>
                        <List><Link smooth to={'#menu'}><NavLink>menu</NavLink></Link></List>
                        <List><Link smooth to={'#services'}><NavLink>Services</NavLink></Link></List>
                        <List><Link smooth to={'#contact'}><NavLink>Contact</NavLink></Link></List>
                    </NavList>
                </Nav>
            </ContactBox>

            <ContactBox>
                <H5>Our services</H5>
                <Nav>
                    <NavList>
                        <List><Link smooth to={'#'}><NavLink>Web design</NavLink></Link></List>
                        <List><Link smooth to={'#'}><NavLink>Web development</NavLink></Link></List>
                        <List><Link smooth to={'#'}><NavLink>Marketing</NavLink></Link></List>
                        <List><Link smooth to={'#'}><NavLink>Product management</NavLink></Link></List>
                        <List><Link smooth to={'#'}><NavLink>Graphic design</NavLink></Link></List>
                    </NavList>
                </Nav>
            </ContactBox>

            <ContactBox>
                <H5>Information</H5>
                <Nav>
                    <NavList>
                        <List><Link smooth to={'#'}><NavLink>About us</NavLink></Link></List>
                        <List><Link smooth to={'#'}><NavLink>Delivery information</NavLink></Link></List>
                        <List><Link smooth to={'#'}><NavLink>Privacy policy</NavLink></Link></List>
                        <List><Link smooth to={'#'}><NavLink>Terms & condition</NavLink></Link></List>
                    </NavList>
                </Nav>
            </ContactBox>

            <ContactBox>
                <H5>Contact us</H5>
                <SocialIcons>
                    <Icon><RiFacebookFill/></Icon>
                    <Icon><FaInstagram/></Icon>
                    <Icon><FaTwitter/></Icon>
                    <Icon><FaYoutube/></Icon>
                </SocialIcons>
            </ContactBox>
        </Contact>
    )
}