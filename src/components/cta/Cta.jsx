import { Cta, CtaContainer, H2, BtnLink } from "./styled";

export default function cta() {
    return(
        <Cta>
            <CtaContainer>
                <H2>We Make Quality Food Everyday</H2>
                <BtnLink href="#" className="btn">Let's talk</BtnLink>
            </CtaContainer>
        </Cta>
    )
}