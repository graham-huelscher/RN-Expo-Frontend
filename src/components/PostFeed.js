import React, { Component } from 'react';
import { FlatList } from 'react-native'
import Post from './Post/Post'

class PostFeed extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.setState({
            posts: [<Post key={1} />, <Post key={2} />, <Post key={3} />]
        })
    }

    _renderPost({ item }) {
        return <Post />
    }

    _keyExtractor(item) {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderPost}
            />
        )
    }
}

export default PostFeed