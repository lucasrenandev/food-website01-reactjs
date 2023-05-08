import { Services, Heading, Span, H2,
ServicesContainer, ServicesBox, Image,
H4, Paragraph } from "./styled";
import serviceImage1 from "../../assets/s1.png"
import serviceImage2 from "../../assets/s2.png"
import serviceImage3 from "../../assets/s3.png"

export default function services() {
    return(
        <Services id="services">
            <Heading>
                <Span>Services</Span>
                <H2>We provide best quality food</H2>
            </Heading>

            <ServicesContainer>
                <ServicesBox>
                    <Image src={serviceImage1} alt="Service image 1"/>
                    <H4>Order</H4>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laudantium ratione repudiandae facilis beatae, laborum, illo fugit harum rem rerum assumenda modi ab voluptatem nisi laboriosam, iusto iure enim ullam.</Paragraph>
                </ServicesBox>

                <ServicesBox>
                    <Image src={serviceImage2} alt="Service image 2"/>
                    <H4>Shipping</H4>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laudantium ratione repudiandae facilis beatae, laborum, illo fugit harum rem rerum assumenda modi ab voluptatem nisi laboriosam, iusto iure enim ullam.</Paragraph>
                </ServicesBox>

                <ServicesBox>
                    <Image src={serviceImage3} alt="Service image 3"/>
                    <H4>Delivered</H4>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laudantium ratione repudiandae facilis beatae, laborum, illo fugit harum rem rerum assumenda modi ab voluptatem nisi laboriosam, iusto iure enim ullam.</Paragraph>
                </ServicesBox>
            </ServicesContainer>
        </Services>
    )
}