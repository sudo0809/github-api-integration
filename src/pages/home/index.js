import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { filterControls, orderControls } from "./control";
import { FiltersDiv, FilterDiv, SearchBar, SearchForm, Title, TitleDiv, FilterLabel, FilterSelect, FilterOption, ListDiv, ListItem, ItemPhoto, ItemLink, ItemInfo } from "./style";
import useDebounce from "../../hooks/useDebounce";

const Home = () => {
    const [result, setResult] = useState([]);
    const [searchParams, setSearchParams] = useState({ searchUser: '', sortBy: 'followers', orderBy: 'desc' })
    const debounceSearch = useDebounce(searchParams)

    const fetchUser = (debounceSearch) => {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        octokit.request("GET /search/users?q={search}", {
            search: debounceSearch.searchUser,
            sort: debounceSearch.sortBy,
            direction: debounceSearch.orderBy
        }).then((res) => {
            setResult(res.data)
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchUser(debounceSearch)
    }, [debounceSearch])

    const handleSearch = (e) => {
        const value = e.target.value
        const field = e.target.id
        const dup = searchParams

        if (field === 'searchUser') {
            setSearchParams({ ...dup, searchUser: value })
        } else if (field === 'sortBy') {
            setSearchParams({ ...dup, sortBy: value })
        } else if (field === 'orderBy') {
            setSearchParams({ ...dup, orderBy: value })
        }
    }

    return (
        <>
            <TitleDiv>
                <Title>Find Github User's</Title>
            </TitleDiv>
            <SearchForm>
                <SearchBar
                    type="text"
                    placeholder='Search User'
                    id='searchUser'
                    onChange={handleSearch}
                />
                <FiltersDiv>
                    <FilterDiv>
                        <FilterLabel>Sort by</FilterLabel>
                        <FilterSelect
                            name="sort"
                            id="sortBy"
                            onChange={handleSearch}
                        >
                            {
                                filterControls.map((control) => (
                                    <FilterOption key={control.id} value={control.value}>{control.content}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </FilterDiv>
                    <FilterDiv>
                        <FilterLabel>Order by</FilterLabel>
                        <FilterSelect
                            name="order"
                            defaultValue='follower'
                            id="orderBy"
                            onChange={handleSearch}
                        >
                            {
                                orderControls.map((control) => (
                                    <FilterOption key={control.id} value={control.value}>{control.content}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </FilterDiv>
                </FiltersDiv>
            </SearchForm>
            <ListDiv>
                {
                    result?.items?.map((item) => (
                        <ListItem key={item.id}>
                            <ItemPhoto src={item.avatar_url} alt="img" />
                            <ItemInfo>
                                <ItemLink to={`/user/${item.login}`} >
                                    <h2>{item.login}</h2>
                                </ItemLink>
                            </ItemInfo>
                        </ListItem>
                    ))
                }
            </ListDiv>
        </>
    )
};

export default Home;