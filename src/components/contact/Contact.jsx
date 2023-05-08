import { Contact,
ContactBox, H5, Nav, NavList,
List, NavLink, SocialIcons, Icon } from "./styled";
import { RiFacebookFill }  from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function contact() {
    return(
        <Contact id="contact">
            <ContactBox>
                <H5>Menu links</H5>
                <Nav>
                    <NavList>
                        <List><NavLink href="#">home</NavLink></List>
                        <List><NavLink href="#">about</NavLink></List>
                        <List><NavLink href="#">menu</NavLink></List>
                        <List><NavLink href="#">Services</NavLink></List>
                        <List><NavLink href="#">Contact</NavLink></List>
                    </NavList>
                </Nav>
            </ContactBox>

            <ContactBox>
                <H5>Our services</H5>
                <Nav>
                    <NavList>
                        <List><NavLink href="#">Web design</NavLink></List>
                        <List><NavLink href="#">Web development</NavLink></List>
                        <List><NavLink href="#">Marketing</NavLink></List>
                        <List><NavLink href="#">Product management</NavLink></List>
                        <List><NavLink href="#">Graphic design</NavLink></List>
                    </NavList>
                </Nav>
            </ContactBox>

            <ContactBox>
                <H5>Information</H5>
                <Nav>
                    <NavList>
                        <List><NavLink href="#">About us</NavLink></List>
                        <List><NavLink href="#">Delivery information</NavLink></List>
                        <List><NavLink href="#">Privacy policy</NavLink></List>
                        <List><NavLink href="#">Terms & condition</NavLink></List>
                    </NavList>
                </Nav>
            </ContactBox>

            <ContactBox>
                <H5>Contact us</H5>
                <SocialIcons>
                    <Icon>
                        <RiFacebookFill/>
                    </Icon>
                    <Icon>
                        <FaInstagram/>
                    </Icon>
                    <Icon>
                        <FaTwitter/>
                    </Icon>
                    <Icon>
                        <FaYoutube/>
                    </Icon>
                </SocialIcons>
            </ContactBox>
        </Contact>
    )
}