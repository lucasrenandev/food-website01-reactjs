import styled from "styled-components";

export const Menu = styled.section`

`
export const Heading = styled.header`
    text-align: center;
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
`
export const MenuContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
`
export const MenuBox = styled.div`
    position: relative;
    background-color: var(--text-color);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: all 0.4s ease;

    &:hover {
        transform: translateY(8px);
        cursor: pointer;
    }
`
export const Image = styled.img`
    width: 150px;
    height: auto;
`
export const H3 = styled.h3`
    color: var(--bg-color);
    font-size: 20px;
    font-weight: 700;
    margin: 5px 0 10px;
    text-transform: capitalize;
`
export const H4 = styled.h4`
    color: var(--bg-color);
    font-size: var(--p-font);
    font-weight: 400;
    margin-bottom: 5px;
    text-transform: capitalize;
`
export const Small = styled.small`
    color: var(--main-color);
    font-size: 14px;
    font-weight: 600;
`
export const Cart = styled.a`
    background-color: var(--main-color);
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
    color: var(--text-color);
    border-radius: 0 8px 0 8px;
`