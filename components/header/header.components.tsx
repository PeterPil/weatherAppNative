import React, {useState, useReducer} from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import Button from '../core/button';
import {buttonEmpty} from '../core/styles/core.styles';
import modal, { initialStateRegistration } from '../../reducer/modal';
const logo = require('../../assets/logo.png')
interface HeaderProps {
    logo?: any;
}
const Header = () => {
    const [state, dispatch] = useReducer(modal, initialStateRegistration)
    const clickHandler = () => {
        dispatch({type: 'TOGGLE_REGISTRATION', isRegistrationOpened: !state.isRegistrationOpened})
    } 
    return (
        <View style={styles.header}>
            <Image source={logo}/>
            <Button children={'Login'} clickHandler={clickHandler} styles={buttonEmpty}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 25,
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        justifyContent: "space-between",
    }
})

export default Header;