import styled from "styled-components";

export const Contact = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 2rem;
`
export const ContactBox = styled.div`
    
`
export const H5 = styled.h5`
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 2rem;
    position: relative;

    &::before {
        position: absolute;
        content: '';
        bottom: -8px;
        left: 0;
        width: 50px;
        height: 2px;
        background-color: var(--main-color);
        border-radius: 10px;
    }
`
export const Nav = styled.nav`

`
export const NavList = styled.ul`

`
export const List = styled.li`
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`
export const NavLink = styled.a`
    display: inline-block;
    color: #9897a9;
    font-size: var(--p-font);
    font-weight: 400;
    text-transform: capitalize;
    transition: all 0.4s ease;

    &:hover {
        transform: translateX(-8px);
        color: var(--text-color);
    }
`
export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const Icon = styled.a`
    background-color: var(--main-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    color: var(--text-color);
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.1);
        background-color: var(--text-color);
        color: var(--bg-color);
        cursor: pointer;
    }
`