import {StyleSheet} from 'react-native';

export const buttonEmpty = StyleSheet.create({
    buttton: {
        borderStyle: 'solid',
        paddingVertical: 10,
        width: 100,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    text: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#fff',
    }
})