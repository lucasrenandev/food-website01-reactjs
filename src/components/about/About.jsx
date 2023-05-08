import { About, AboutImage,
Image, AboutText,
Span, H2, 
Paragraph, BtnLink } from "./styled"
import aboutImg from "../../assets/about.png"

export default function about() {
    return(
        <About id="about">
            <AboutImage>
                <Image src={aboutImg} alt="About image"/>
            </AboutImage>

            <AboutText>
                <Span>About us</Span>
                <H2>We speak the good food language</H2>
                <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, nesciunt aut eveniet voluptatum aperiam porro expedita animi necessitatibus quasi illo quibusdam sint laborum ea accusantium eius voluptatem, ipsum, dolore id!</Paragraph>
                <BtnLink href="#" className="btn">Today's menu</BtnLink>
            </AboutText>
        </About>
    )
}