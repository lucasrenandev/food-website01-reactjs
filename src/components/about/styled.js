import styled from "styled-components";

export const About = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 1114px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`
export const AboutImage = styled.figure`
    text-align: center;

    @media screen and (max-width: 1114px) {
        order: 2;
    }
`
export const Image = styled.img`
    width: 400px;
    max-width: 100%;
    height: auto;
`
export const AboutText = styled.article`

`
export const Span = styled.span`
    font-size: var(--p-font);
    font-weight: 600;
    color: var(--main-color);
    text-transform: capitalize;
`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    margin: 5px 0 10px;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 2rem;
`
export const BtnLink = styled.a`

`