import { Octokit } from "octokit";
import { useState } from "react";
import { filterControls, orderControls } from "./control";
import { FiltersDiv, FilterDiv, SearchBar, SearchForm, Title, TitleDiv, FilterLabel, FilterSelect, FilterOption, FormSubmit, ListDiv, ListItem, ItemPhoto, ItemLink, ItemInfo } from "./style";

const Home = () => {
    const [result, setResult] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    const [sortBy, setSortBy] = useState('follower');
    const [orderBy, setOrderBy] = useState('desc');

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
        baseUrl: 'https://api.github.com'
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();

        octokit.request("GET /search/users?q={search}", {
            search: searchUser,
            sort: sortBy,
            direction: orderBy
        }).then((res) => {
            setResult(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <TitleDiv>
                <Title>Find Github User's</Title>
            </TitleDiv>
            <SearchForm onSubmit={handleOnSubmit}>
                <SearchBar
                    type="text"
                    placeholder='Search User'
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)}
                />
                <FiltersDiv>
                    <FilterDiv>
                        <FilterLabel>Sort by</FilterLabel>
                        <FilterSelect name="sort" id="sort-select" onChange={(e) => setSortBy(e.target.value)}>
                            {
                                filterControls.map((control) => (
                                    <FilterOption  key={control.id} value={control.value}>{control.content}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </FilterDiv>
                    <FilterDiv>
                        <FilterLabel>Order by</FilterLabel>
                        <FilterSelect name="order" defaultValue='follower' id="order-select" onChange={(e) => setOrderBy(e.target.value)}>
                            {
                                orderControls.map((control) => (
                                    <FilterOption key={control.id} value={control.value}>{control.content}</FilterOption>
                                ))
                            }
                        </FilterSelect>
                    </FilterDiv>
                </FiltersDiv>
                <FormSubmit type="submit" value="Submit" />
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