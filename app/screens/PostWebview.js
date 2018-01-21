import React, { Component } from 'react';
import { WebView, Linking, Button, View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PostWebview.style'

export default class PostWebview extends Component {

    static navigationOptions = ({ navigation }) => {
        openUrl = (url) => {
            Linking.canOpenURL(url).then(supported => {
                if (!supported) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err))
        }

        return {
            title: '',
            headerRight: (
                <TouchableWithoutFeedback onPress={() => { openUrl(navigation.state.params.url); }}>
                    <View style={styles.iconContainer}>
                        <Text
                            style={styles.iconText}
                            numberOfLines={1} >
                            Open in
                    </Text>
                        <Icon name="safari" style={styles.iconInline} />
                    </View>
                </TouchableWithoutFeedback>
            )
        };
    };

    render() {
        const { params } = this.props.navigation.state;

        return (
            <WebView
                source={{ uri: params.url }}
            />
        );
    }
}