import React, {Component} from "react";
import Searchbox from "./Searchbox";
import CardList from "./CardList";
import { directory } from "./directory";


class App extends Component {
    constructor() { 
        super()
        this.state = {
            directory: directory,
            searchfield: "",
        }
    }

    whenISearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredDirectory = this.state.directory.filter(directory => {
            return directory.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return (
            <div className="tc">
                <h1>RoboDirectory</h1>
                <Searchbox searchChange = { this.whenISearch }/>
                <CardList directory = { filteredDirectory }/>
            </div>
        )
    }
}







// const App = () => {
//     return (
//         <div className="tc">
//             <h1>RoboDirectory</h1>
//             <Searchbox />
//             <CardList directory={ directory }/>
//         </div>
//     )
// }


export default App;