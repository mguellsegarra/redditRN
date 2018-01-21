import React, { Component } from 'react';
import { Image, View } from 'react-native';
import styles from './PostListItem.style';

// For checking valid url's
const urlPattern = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

export default class PostListItemImage extends Component {

    renderPostImage = (imageUrl) => {
        // Some images don't have a valid url, instead they have nsfw, default, etc. Render an empty view in these cases, just for safety :)
        if (!imageUrl.match(urlPattern)) {
            return (<View
                style={styles.postImage} />);
        }

        return (<Image
            style={styles.postImage}
            source={{ uri: imageUrl }} />);
    }

    render() {
        return this.renderPostImage(this.props.srcUrl);
    }
}