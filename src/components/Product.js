import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { AddToCart, removeFromCart } from './redux/action';

const Product = ({ item }) => {
    const dispatch = useDispatch();
    const [isAdded,setIsAdded]=useState(false)

    const handleAddToCart = () => {
        console.log("called", item)
        dispatch(AddToCart(item))
        setIsAdded(true)

    }

    const handleRemovefromCart = () => {
        console.log("Removed", item)
        dispatch(removeFromCart(item.name))
        setIsAdded(false)
    }

    return (
        <View style={styles.view} key={item.key}>
            <Text style={styles.font}>{item.name}</Text>
            <Text style={styles.font}>{item.color}</Text>
            <Text style={styles.font}>{item.price}</Text>
            <Image source={item.image} style={styles.img} />
            {
                isAdded?
                <Button title='Remove from Cart' onPress={() => handleRemovefromCart(item)} />
                :
                <Button title='Add to Cart' onPress={() => handleAddToCart(item)} />

            }

        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: "orange",
        borderBottomWidth: 2,
        padding: 10,
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    font: {
        fontSize: 24,
        color: 'black'
    },
})