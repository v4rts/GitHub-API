import React from 'react';
import styles from "../styles/AboutUser.module.css"

const AboutUser = ({data, repos}) => {
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.login}>{data.login}</h1>
            <img className={styles.avatar} src={data.avatar_url} alt={data.avatar_url}></img>
            <p className={styles.location}>{data.location}</p>
                {repos.map(item=> (
                    <div key={item.name}>
                        <a className={styles.repository} href={item.html_url} target="_blank">{item.name}</a>
                    </div>
                ))}
        </div>
    )
}

export default AboutUser;