import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Client from './components/Client.jsx';
import PostList from "./components/PostList.jsx";

axios.defaults.baseURL = "http://localhost:8080/";

class App extends  Component {
    constructor(props)  {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get("api/posts").then((response) => {
            console.log(response.data);
            this.setState({
                posts:response.data._embedded.posts
            })
        }).catch((err) =>{
            console.log(err)
        })

    }

    render() {
        return(
            <div>
                <Client>
                    <PostList  posts={this.state.posts}/>
                </Client>

            </div>

        )
    }
}

// {/*<Client>*/}
// {/**/}
// </Client>


ReactDOM.render(<Router>
    <App/>
</Router>,document.getElementById("root"))