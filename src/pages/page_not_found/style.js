import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 4rem 0;
`

export const Heading = styled.h1`
    padding: 1rem 0;
`

export const RedirectLink = styled(Link)`
    &:hover{
        color: var(--base-red);
    }
`