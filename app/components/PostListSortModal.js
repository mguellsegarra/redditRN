import React, { Component } from 'react';
import {
    View,
    Modal,
    Picker
} from 'react-native';
import styles from './PostListSortModal.style';

export default class PostListSortModal extends Component {

    renderPickerItems() {
        return [
            "new",
            "hot",
            "top",
            "controversial"
        ].map((p) => {
            return (<Picker.Item key={p} label={p} value={p} />)
        });
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.visible}
                animationType={'fade'}>
                <View
                    style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.props.selectedValue}
                            onValueChange={this.props.onValueChange}>
                            { this.renderPickerItems() }
                        </Picker>
                    </View>
                </View>
            </Modal>
        );
    }
}