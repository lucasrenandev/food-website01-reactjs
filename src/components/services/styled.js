import styled from "styled-components";

export const Services = styled.section`

`
export const Heading = styled.header`
    text-align: center;
`
export const Span = styled.span`
    font-size: var(--p-font);
    font-weight: 600;
    color: var(--main-color);
`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
`
export const ServicesContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
`
export const ServicesBox = styled.div`
    text-align: center;
`
export const Image = styled.img`
    width: 90px;
    height: auto;
`
export const H4 = styled.h4`
    font-size: 20px;
    font-weight: 700;
    color: var(--main-color);
    text-transform: capitalize;
    margin-bottom: 10px;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 2rem;
`