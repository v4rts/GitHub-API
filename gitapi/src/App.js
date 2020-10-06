import React from 'react';
import Search from "./comp/Search";
import AboutUser from "./comp/AboutUser";

class App extends React.Component {
    render() {
        return (
            <div className="Search__Wrapper">
                <Search />
            </div>
        )
    }
}
export default App;