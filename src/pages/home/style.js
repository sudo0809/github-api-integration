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

export const SearchForm = styled.form`
    margin: 4rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SearchBar = styled.input`
    width: 30rem;
    padding: 0.6rem;
    border-radius: 10px
`

export const FiltersDiv = styled.div`
    display: flex;
    width: 30rem;
`
export const FilterDiv = styled.div`
    margin: 1rem 1rem;
`

export const FilterLabel = styled.label`
    font-size: 16px;
    padding: 0 0.5rem;
`
export const FilterSelect = styled.select`
    padding: 0.5rem;
    border-radius: 4px;
`

export const FilterOption = styled.option`

`

// export const FormSubmit = styled.input`
//     background-color: var(--base-red);
//     font-size: 16px;
//     margin: 0.2rem;
//     padding: 0.4rem 1rem;
//     border-style: none;
//     border-radius: 4px;
//     color: var(--white-1);
//     cursor: pointer;

//     &:hover {
//         background-color: var(--base-black);
//         border: 1px solid var(--base-red);
//     }
// `

export const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ListItem = styled.div`
    max-width: 750px;
    width: -webkit-fill-available;;
    display: flex; 
    padding: 1rem 1rem;
    margin: 0.5rem;
    border: 1px solid var(--base-red);
    border-radius: 10px;
`

export const ItemPhoto = styled.img`
    max-width: 50px;
`
export const ItemInfo = styled.div`
    padding-left: 15px;
`

export const ItemLink = styled(Link)`
    text-decoration: none;
`