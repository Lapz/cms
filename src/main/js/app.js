import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Page from './components/Page.jsx';
import Client from './components/Client.jsx';

axios.defaults.baseURL = "http://localhost:8080/";

class App extends  Component {
    constructor(props)  {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get("api/posts").then((posts) => {
            console.log(posts)
        }).catch((err) =>{
            console.log(err)
        })
    }

    render() {
        return(
            <Client>
               <Switch>
                   <Route component={Page} path="post/post_id"/>
               </Switch>
            </Client>
        )
    }
}


ReactDOM.render(<Router>
    <App/>
</Router>,document.getElementById("root"))