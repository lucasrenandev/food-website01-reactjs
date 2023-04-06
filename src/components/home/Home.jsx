import { Home,
HomeText,
H1, H3,
Paragraph,
BtnLink,
HomeImage, Image } from "./styled";
import homeImg from "../../assets/home.png"

export default function home() {
    return(
        <Home id="home">
            <HomeText>
                <H1>Full website</H1>
                <H3>Food the most precious things</H3>
                <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum blanditiis enim, delectus ducimus omnis esse recusandae natus amet debitis molestiae culpa rerum nobis iure deleniti. Consectetur magni accusantium commodi harum!</Paragraph>
                <BtnLink href="#" className="btn">Today's menu</BtnLink>
            </HomeText>

            <HomeImage>
                <Image src={homeImg}></Image>
            </HomeImage>
        </Home>
    )
}