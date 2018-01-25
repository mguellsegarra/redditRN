import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PostListItemMetadata.style';

export default class PostListItemMetadata extends Component {

    renderAuthor() {
        const item = this.props.data;

        return (
            <View style={styles.postDetailsAuthorContainer}>
                {/* <Icon name="user" style={styles.iconInline} /> */}
                <Text
                    style={styles.postDetailsAuthorText}
                    ellipsizeMode={'tail'}
                    numberOfLines={1} >
                    {item.author}
                </Text>
            </View>
        );
    }

    renderScore() {
        const item = this.props.data;

        return (
            <View style={styles.postDetailsIconContainer}>
                {/* <Icon name="star" style={styles.iconInline} /> */}
                <Text
                    style={styles.postDetailsIconText}
                    adjustsFontSizeToFit={true }
                    numberOfLines={1} >
                    {item.score}
                </Text>
            </View>
        );
    }

    renderComments() {
        const item = this.props.data;

        return (
            <View style={styles.postDetailsIconContainer}>
                {/* <Icon name="comment" style={styles.iconInline} /> */}
                <Text
                    style={styles.postDetailsIconText}
                    adjustsFontSizeToFit={true }
                    numberOfLines={1} >
                    {item.comments}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.postDetailsBottom}>
            { this.renderAuthor() }
            { this.renderScore() }
            { this.renderComments() }
            </View>
        );
    }
}