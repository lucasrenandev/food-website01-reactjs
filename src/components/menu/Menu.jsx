import { Menu, Heading, 
Span, H2, MenuContainer,
MenuBox, Image,
H3, H4, Small, Cart } from "./styled";
import foodImg1 from "../../assets/food1.png"
import foodImg2 from "../../assets/food2.png"
import foodImg3 from "../../assets/food3.png"
import { FaShoppingCart } from 'react-icons/fa'


export default function menu() {
    return(
        <Menu id="menu">
            <Heading>
                <Span>Food menu</Span>
                <H2>Fresh taste and great price</H2>
            </Heading>

            <MenuContainer>
                <MenuBox>
                    <Image src={foodImg1} alt="food image 1"/>
                    <H3>Chicken burger</H3>
                    <H4>Tasty food</H4>
                    <Small>$11.00</Small>
                    <Cart href="#"><FaShoppingCart></FaShoppingCart></Cart>
                </MenuBox>

                <MenuBox>
                    <Image src={foodImg2} alt="food image 2"/>
                    <H3>Special beef burger</H3>
                    <H4>Tasty food</H4>
                    <Small>$11.00</Small>
                    <Cart href="#"><FaShoppingCart></FaShoppingCart></Cart>
                </MenuBox>

                <MenuBox>
                    <Image src={foodImg3} alt="food image 3"/>
                    <H3>Chicken fry pack</H3>
                    <H4>Tasty food</H4>
                    <Small>$11.00</Small>
                    <Cart href="#"><FaShoppingCart></FaShoppingCart></Cart>
                </MenuBox>
            </MenuContainer>
        </Menu>
    )
}