import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postsform extends Component {

    state = {
        title: '',
        body: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        //actions
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label> <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label> <br />
                        <textarea name="body" value={this.state.body} onChange={this.handleChange} />
                    </div>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

Postsform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postsform);
