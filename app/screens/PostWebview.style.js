import { StyleSheet } from "react-native";

export default StyleSheet.create({
    iconInline: {
        fontSize: 20,
        color: '#0066ff',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginRight: 15
    },
    iconText: {
        color: '#0066ff',
        fontSize: 16,
        marginRight: 6,
        textAlign: 'right'
    }
});
