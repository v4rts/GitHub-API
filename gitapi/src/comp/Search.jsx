import React from 'react';
import { useState } from 'react';

let Search = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repos, setRepos]  = useState([]);

    let changeHandler = (input) => {
        setUsername(input.target.value);
    };

    let submitHandler = async e => {
        e.preventDefault();
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);

        const repos = await fetch(profileJson.repos_url);
        const reposJson = await repos.json();
        console.log(reposJson);
    };

    return(
        <div>
            <input type = "text" value = {username} onChange = {changeHandler} />
            <button type = "submit"  onClick = {submitHandler}>Search!</button>
        </div>
    )
}

export default Search;