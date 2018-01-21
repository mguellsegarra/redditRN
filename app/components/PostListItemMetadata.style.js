import { StyleSheet } from "react-native";

export default StyleSheet.create({
    iconInline: {
        fontSize: 10,
        color: '#BEBEBE',
    },
    postDetailsBottom: {
        flex: 1,
        flexDirection: 'row'
    },
    postDetailsAuthorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 15,
        flex: 2,
        overflow: 'hidden'
    },
    postDetailsAuthorText: {
        color: '#BEBEBE',
        fontSize: 10,
        marginLeft: 4,
        textAlign: 'left',
        textAlignVertical: 'center',
    },
    postDetailsIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    postDetailsIconText: {
        color: '#BEBEBE',
        fontSize: 10,
        marginLeft: 4,
    }
});
