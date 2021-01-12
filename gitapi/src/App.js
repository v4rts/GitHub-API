import React from 'react';
import Search from "./comp/Search";
import styles from "./styles/Search.module.css"

class App extends React.Component {
    render() {
        return (
            <div className={styles.appwrapper}>
                <Search />
            </div>
        )
    }
}
export default App;