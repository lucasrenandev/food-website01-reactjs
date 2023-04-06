import styled from "styled-components";

export const Home = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 1114px) {
        grid-template-columns: 1fr;
        text-align: center;
        height: 100%;
    }
`
export const HomeText = styled.main`
    @media screen and (max-width: 1114px) {
        padding-top: 2rem;
    }
`
export const H1 = styled.h1`
    font-size: var(--big-font);
    font-weight: 700;
    color: var(--main-color);
    text-transform: capitalize;
`
export const H3 = styled.h3`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5px;

    @media screen and (max-width: 400px) {
        font-size: 22px;
    }    
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 2rem;
`
export const BtnLink = styled.a`
    
`
export const HomeImage = styled.figure`
    text-align: center;
`
export const Image = styled.img`
    width: 450px;
    max-width: 100%;
    height: auto;
`