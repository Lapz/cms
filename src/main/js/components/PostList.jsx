import React, {Component} from 'react';
import axios from 'axios';
import Page from "./Post.jsx";

class PostList extends Component{
    constructor(props) {
        super(props);

    }


    render() {

        const posts = this.props.posts.map((post,index) => {
            return (<div className="box" key ={index}>
                <h1>{post.title}</h1>
                <h3>{post.author}</h3>
            </div>);
        });
        return(
           <div>
                   {
                      posts
                   }
           </div>
        )
    }
}

export default PostList;