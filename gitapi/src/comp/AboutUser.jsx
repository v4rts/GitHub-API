import React from 'react';
import styles from "../styles/AboutUser.module.css"

const AboutUser = ({data, repos}) => {
    return(
        <div className={styles.wrapper}>
            <img className={styles.avatar} src={data.avatar_url} alt={data.avatar_url}></img>
            <h1 className={styles.login}>{data.login}</h1>
            <p className={styles.location}>{data.location}</p>
                <div className={styles.repowrapper}>
                    {repos.map(item=> (
                        <div className={styles.rep} key={item.name}>
                            <a className={styles.repository} href={item.html_url} target="_blank">{item.name}</a>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default AboutUser;