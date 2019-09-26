import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { UserBar, ImageJSX, LikesBar }  from './index'

class Post extends Component {
    state = {
        isLiked: false
    }

    toggleImageLike = () => {
        console.log('here')
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <UserBar />  
                <ImageJSX toggleImageLike={this.toggleImageLike} />
                <LikesBar isLiked={this.state.isLiked} />
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