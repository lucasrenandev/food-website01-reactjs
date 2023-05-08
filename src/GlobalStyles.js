import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    :root {
        --main-color: #ff702a;
        --text-color: #fff;
        --bg-color: #1e1c2a;
        --big-font: 5rem;
        --h2-font: 3em;
        --p-font: 1rem;
    }

    #root {
        min-height: 100vh;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    section {
        width: 100%;
        padding: 100px 5%;
    }

    img {
        display: inline-block;
    }

    .btn {
        display: inline-block;
        background-color: var(--main-color);
        padding: 10px 18px;
        color: var(--text-color);
        margin-top: 2rem;
        border-radius: 8px;
        font-size: var(--p-font);
        font-weight: 400;
        text-transform: capitalize;
        transition: all 0.4s ease;
    }

    .btn:hover {
        transform: scale(1.1) translateY(8px);
    }

    @media screen and (max-width: 1114px) {
        section {
            padding: 80px 2%;
        }
    }

    @media screen and (max-width: 400px) {
        :root {
            --big-font: 3.5rem;
            --h2-font: 2.5em;
        }
    }
`