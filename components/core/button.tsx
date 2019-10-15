import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
interface ButtonProps {
    children: string;
    clickHandler: () => void;
    styles: any;
}

const Button = ({children, clickHandler, styles}: ButtonProps) => {
    return (
        <TouchableNativeFeedback
            onPress={clickHandler}
            background={TouchableNativeFeedback.SelectableBackground()}
        >
            <View style={styles.buttton}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default Button;