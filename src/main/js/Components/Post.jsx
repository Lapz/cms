import React,{Component} from 'react';
import Content from "./Content";
import Title from "./Title";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {},
            title:null,
        }

    }


    componentDidMount() {
        axios.get(`api/posts/${this.props.params.post_id}`).then((response) => {
            console.log(response)
        }).catch( (err) => {
            console.log(err);

        });

    }


    render() {
        return (
            <Page>
                <Title title={this.state.title} align="has-text-centered"/>

                <Content  html={this.state.content}/>


            </Page>

        )
    }
}

export defualt Page;