import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { UserBar, ImageJSX, LikesBar } from './index'

class Post extends Component {
    state = {
        isLiked: false,
        likeCount: 365
    }

    toggleImageLike = () => {
        const incrementOrDecrement = this.state.isLiked ? -1 : 1
        this.setState({
            isLiked: !this.state.isLiked,
            likeCount: this.state.likeCount + incrementOrDecrement
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <UserBar />
                <ImageJSX toggleImageLike={this.toggleImageLike} />
                <LikesBar
                    isLiked={this.state.isLiked}
                    likeCount={this.state.likeCount}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

export default Post