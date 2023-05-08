import styled from "styled-components"

export const Header = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-color);
    padding: 20px 5%;
    transition: all 0.4s ease;

    @media screen and (max-width: 1114px) {
        padding: 17px 2%;
    }
`

export const Logo = styled.a`
    font-size: 25px;
    font-weight: 600;
    color: var(--main-color);
`

export const NavBar = styled.nav`
    @media screen and (max-width: 1114px) {
        position: absolute;
        top: -500px;
        right: 0;
        left: 0;
        width: 100%;
        background-color: #2b2640;
        transition: all 0.4s ease;

        &.active {
            top: 100%;
        }
    }
    
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1114px) {
        flex-direction: column;
        align-items: center;
    }
`
export const List = styled.li`
    padding: 0 22px;

    .nav-link {
        color: var(--text-color);
        font-size: var(--p-font);
        font-weight: 500;
        transition: all 0.4s ease;
        
        &:hover {
            color: var(--main-color);
        }

        @media screen and (max-width: 1114px) {
            display: block;
            padding: 20px 0;
        }
    }

    @media screen and (max-width: 1114px) {
        padding: 0;
    }
`
export const MenuIcon = styled.div`
    font-size: 28px;
    z-index: 1001;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1114px) {
        display: inline-flex;
    }
`