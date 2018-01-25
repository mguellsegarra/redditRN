import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PostListItemDate.style';

// Relative time helper
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US')

export default class PostListItemDate extends Component {

    formatDate = (date) => {
        return timeAgo.format(new Date(date * 1000))
    }

    render() {
        const date = this.props.date;

        return (
            <View style={styles.postDetailsDateContainer}>
                {/* <Icon name="clock-o" style={styles.iconInline} /> */}
                <Text style={styles.postDetailsDateText}>
                    {this.formatDate(date)}
                </Text>
            </View>
        );
    }
}