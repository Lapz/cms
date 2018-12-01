import React, {Component} from 'react';
import axios from 'axios';
import Page from "./Post.jsx";

class PostList extends Component{
    constructor(props) {
        super(props);

    }


    render() {

        const posts = this.props.posts.map((post,index) => {
            return (<li key ={index}>
                        <div className="card">
                            <h1>{post.title}</h1>
                            <h3>{post.author}</h3>
                        </div>
                    </li>);
        });

        return(
           <div>
               <ul>
                   {
                       posts
                   }
               </ul>
           </div>
        )
    }
}

export default PostList;