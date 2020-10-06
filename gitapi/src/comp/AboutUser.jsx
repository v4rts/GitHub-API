import React from 'react';

const AboutUser = ({data, repos}) => {
    return(
        <div className="Aboutuser__Wrapper">
            <h1>{data.login}</h1>
            <img className="Aboutuser__Avatar" src={data.avatar_url} alt={data.avatar_url}></img>
            <p>{data.location}</p>
                {repos.map(item=> (
                    <div key={item.name}>
                        <a href={item.html_url} target="_blank">{item.name}</a>
                    </div>
                ))}
        </div>
    )
}

export default AboutUser;