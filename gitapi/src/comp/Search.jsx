import React from 'react';
import { useState } from 'react';
import AboutUser from "./AboutUser";
import styles from "../styles/Search.module.css"

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

        if (profileJson){
            setData(profileJson);
            setRepos(reposJson);
        }
    };

    return(
        <div className={styles.wrapper}>
            <input type = "text" value = {username} onChange = {changeHandler} />
            <button type = "submit"  onClick = {submitHandler}>Search!</button>
            <AboutUser data={data} repos={repos}/>
        </div>
    )
}

export default Search;