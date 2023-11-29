import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import dateFormat from 'dateformat';
import { Title, TitleDiv, ContentDiv, ContentLeftSide, ProfilePic, RepoGrid, ContentRightSide, GridItem, ItemContent, ItemContentP, ItemTitleLink } from "./style";
import codeIcon from '../../utils/icons/code-solid.svg'

const User = () => {
    const { username } = useParams();
    const [user, setUser] = useState([]);
    const [repos, setRepos] = useState([]);


    useEffect(() => {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        octokit.request("GET /users/{username}", {
            username: username
        }).then((res) => {
            setUser(res.data)
        }).catch(err => {
            console.log(err);
        });

    }, [username])

    useEffect(() => {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        function compareOnDate(a, b) {
            return (Number(new Date(b.updated_at)) - Number(new Date(a.updated_at)))
        }

        octokit.request("GET /users/{username}/repos", {
            username: username
        }).then((res) => {
            return res.data.sort(compareOnDate);
        }).then((res) => {
            setRepos(res)
        }).catch(err => {
            console.log(err);
        });
    }, [username])

    return (
        <>
            <TitleDiv>
                <Title>{user?.name} - {username}</Title>
            </TitleDiv>
            {
                user ?
                    <ContentDiv>
                        <ContentLeftSide>
                            <ProfilePic src={user.avatar_url} alt="User Profile" />
                            <p>{user.bio}</p>
                            <p>Joined on - {dateFormat(user.created_at, 'mmmm yyyy')}</p>
                        </ContentLeftSide>
                        <ContentRightSide>
                            {repos ?
                                (
                                    <RepoGrid>
                                        {repos.map((repo) => (
                                            <GridItem key={repo.id}>
                                                <ItemTitleLink to={repo.clone_url} target="_blank">
                                                    <h3>{repo.name}</h3>
                                                </ItemTitleLink>
                                                {
                                                    repo.language ? <ItemContent>
                                                        <img src={codeIcon} alt=" -> " />
                                                        <ItemContentP>{repo.language}</ItemContentP>
                                                    </ItemContent> : <></>
                                                }
                                            </GridItem>
                                        ))}
                                    </RepoGrid>
                                ) :
                                <div>Loading Repos...</div>
                            }
                        </ContentRightSide>
                    </ContentDiv> :
                    <div>Loading...</div>
            }
        </>
    )
};

export default User;