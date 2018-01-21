import { StyleSheet } from "react-native";

export default StyleSheet.create({
    postImage: {
        flex: 1,
        height: 120,
    },
    postItem: {
        flex: 1, 
        flexDirection: 'row', 
        height: 120, 
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0'
    },
    postDetailsContainer: {
        flex: 2,
        height: '100%',
        marginRight: 20,
    },
    postDetails: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        overflow: 'hidden'
    },
    postDetailsTop: {
        flex: 1,
        justifyContent: 'center',
    },
    postDetailsMiddle: {
        flex: 2,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    postDetailsTitle: {
        fontSize: 15,
        marginLeft: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'center',
    }
});
