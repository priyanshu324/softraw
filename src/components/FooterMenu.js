import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';


const FooterMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bars}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon name="home" size={45} style={styles.icons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Accounts')}>
                    <FIcon name="plus-square" size={45} style={styles.icons_1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Accounts')}>
                    <Icon name="person" size={45} style={styles.icons_2} />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default FooterMenu

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#211F26',
    },
    bars: {
        width: "100%",
        height: 60,
        backgroundColor: '#383838',
        flexDirection: 'row',
    },
    icons: {
        color: '#ffffff',
        top: 5,
        left: 20,
    }, icons_1: {
        color: '#ffffff',
        top: 5,
        left: 145,
    }, icons_2: {
        color: '#ffffff',
        top: 5,
        left: 275,
    },
})