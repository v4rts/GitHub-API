import React from 'react';
import { useState } from 'react';

let Search = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");

    let changeHandler = (e) => {
        setUsername(e.target.value);
    };

    return(
        <div>
            <input type = "text" value = {username} onChange = {changeHandler} />
        </div>
    )
}

export default Search;