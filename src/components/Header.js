import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const Header = () => {
    const cartData=useSelector((state)=>state.reducer.length)
    return (
        <View style={styles.txt} >
            <Text style={styles.inn}>{cartData}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    txt: {
        padding: 10,
        backgroundColor: "red",
    
    },
    inn:{
        textAlign: 'right',
        fontSize: 30,

    }
})