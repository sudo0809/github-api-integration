import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleDiv = styled.div`
    margin: 0;
    padding: 3rem 0;
    text-align: center;
    border-bottom: 1px solid var(--white-1);
`

export const Title = styled.h1`
    color: white;
`

export const ContentDiv = styled.div`
    margin: 2rem 0;
    display: flex;
    padding: 0 2rem;
`

export const ContentLeftSide = styled.div`
    max-width: 400px;
    padding-left: 6rem;
    border-right: 1px solid var(--base-red);
`

export const ProfilePic = styled.img`
    width: 14rem;
    border-radius: 50%;
`

export const ContentRightSide = styled.div`
    padding: 0 2rem;
    width: -webkit-fill-available;
`

export const RepoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media  (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
export const GridItem = styled.div`
    padding: 2rem;
    border: 1px solid var(--base-red);
    border-radius: 10px;
`

export const ItemContent = styled.div`
    display: flex;
    align-items: center;
    color: var(--base-red);
    padding: 0.5rem 0;
`

export const ItemContentP = styled.p`
    padding-left: 1rem;
    color: var(--base-red);
`

export const ItemTitleLink = styled(Link)`
    text-decoration: none;
`