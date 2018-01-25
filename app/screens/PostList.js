import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { List } from "react-native-elements";
// import Icon from 'react-native-vector-icons/FontAwesome';
import PostListItem from '../components/PostListItem';
import PostListSortModal from '../components/PostListSortModal';
import styles from './PostList.style';
import axios from 'axios';

export default class PostList extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            title: 'r/pics',
            headerRight: (
                <TouchableWithoutFeedback onPress={params.showSortModal ? params.showSortModal : () => null}>
                    <View><Text>sort</Text></View>
                    {/* <Icon name="tag" style={styles.sortButton} /> */}
                </TouchableWithoutFeedback>
            )
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            sort: 'new',
            modalIsVisible: false
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ showSortModal: this.showSortModal.bind(this) });
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = 'https://api.reddit.com/r/pics/' + this.state.sort + '.json';
        this.setState(
            {
                loading: true
            },
            () => {
                axios.get(url)
                    .then(res => {
                        const posts = res.data.data.children.map((item) => {
                            return {
                                id: item.data.id,
                                url: item.data.url,
                                thumbnail: item.data.thumbnail,
                                author: item.data.author,
                                title: item.data.title,
                                comments: item.data.num_comments,
                                score: item.data.score,
                                created: item.data.created_utc
                            }
                        });
                        this.setState({
                            data: posts,
                            error: res.error || null,
                            loading: false,
                            refreshing: false
                        });
                    })
                    .catch(function (err) {
                        this.setState({ error: err, loading: false });
                    }.bind(this));
            });
    };

    renderFooter = () => {
        // In case we got some error
        if (this.state.error) {
            return (
                <Text style={styles.error}>Ooops! Network is broken... Pull down to try again :)</Text>
            )
        }

        // This is normal behaviour, when the list has loaded successfully
        if (!this.state.loading) return null;

        // Else we are loading some data
        return (
            <View style={styles.animatorContainer}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    handleRefresh = () => {
        this.setState(
            {
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    showSortModal() {
        this.setState({ modalIsVisible: true })
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
                    <FlatList
                        ref="listRef"
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <PostListItem data={item} navigation={this.props.navigation} />
                        )}
                        keyExtractor={item => item.id}
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}
                        ListFooterComponent={this.renderFooter.bind(this)}
                    />
                </List>
                <PostListSortModal
                    visible={this.state.modalIsVisible}
                    selectedValue={this.state.sort}
                    onValueChange={(selectedValue) => this.setState(
                        {
                            sort: selectedValue,
                            modalIsVisible: false,
                            loading: true,
                            data: []
                        },
                        () => {
                            this.makeRemoteRequest();
                        })}
                />
            </View>
        );
    }
}