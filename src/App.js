import React, {Component} from "react";
import Searchbox from "./Searchbox";
import CardList from "./CardList";
import Scroll from "./Scroll";
import { directory } from "./directory";
import './App.css';

class App extends Component {
    constructor() { 
        super()
        this.state = {
            directory: directory,
            searchfield: "",
        }
    } 

    // also set the directory in state as empty if you use this as directory will update when user list is fetched from the server (directory: [])

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({directory: users}))
    // }

    whenISearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredDirectory = this.state.directory.filter(directory => {
            return directory.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })

        if(this.state.directory.length === 0){
            <h1>loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1>RoboDirectory</h1>
                    <Searchbox searchChange = { this.whenISearch }/>
                    <Scroll>
                        <CardList directory = { filteredDirectory }/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;