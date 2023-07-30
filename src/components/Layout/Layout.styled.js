import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
height: max-content;

margin: 0px auto;

main {
    display: flex;
}

h1 {
    margin: 0px;
  
    font-size: 64px;
    font-weight: 500;
    letter-spacing: -8px;
    text-transform: uppercase;

    writing-mode: vertical-lr;
    transform: rotate(180deg);
}

section {
    margin: 50px 0px 0px 50px;
    padding: 90px;

    width: 100%;

    border: 1px solid #ffdfd5;
}
`

export const Div = styled.div`
width: 180px;
padding-top: 50px;
border-right: 1px solid #ffdfd5;
`