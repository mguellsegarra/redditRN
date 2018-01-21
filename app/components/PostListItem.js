import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PostListItem.style';
import PostListItemDate from './PostListItemDate'
import PostListItemImage from './PostListItemImage'
import PostListItemMetadata from './PostListItemMetadata'

export default class PostListItem extends Component {

    renderPostDetails = (item) => {
        return (<View style={styles.postDetailsContainer}>
            <View style={styles.postDetails}>
                <View style={styles.postDetailsTop}>
                    <PostListItemDate date={item.created} />
                </View>
                <View style={styles.postDetailsMiddle}>
                    <Text
                        style={styles.postDetailsTitle}
                        numberOfLines={3}
                        ellipsizeMode={'tail'}>
                        {item.title}
                    </Text>
                </View>
                <PostListItemMetadata data={item} />
            </View>
        </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        const item = this.props.data;

        return (
            <TouchableWithoutFeedback onPress={() => navigate('PostWebview', { url: item.url })}>
                <View style={styles.postItem}>
                    <PostListItemImage srcUrl={item.thumbnail} />
                    {this.renderPostDetails(item)}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}