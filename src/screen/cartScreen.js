import { StyleSheet, View, ScrollView, } from 'react-native'
import Header from '../components/Header';
import Product from '../components/Product';
import { appImages } from '../util/images';


const CartScreen = () => {
    const Products = [
        {
            id: 1,
            name: 'Samsung Mobile',
            color: 'white',
            price: 30000,
            image: appImages.mobile
        },
        {
            id: 2,
            name: 'Apple Mobile',
            color: 'white',
            price: 130000,
            image: appImages.mobile
        }, {
            id: 3,
            name: 'Nokia Mobile',
            color: 'white',
            price: 20000,
            image: appImages.mobile
        },
        {
            id: 4,
            name: 'Oppo Mobile',
            color: 'white',
            price: 40000,
            image: appImages.mobile
        },
    ]

    return (
        <View style={styles.view}>
            <Header />
            <ScrollView >
                {Products.map((item, key) => <Product item={item} key={key} />)}
            </ScrollView>
        </View>);
}
export default CartScreen;


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',

    },

})