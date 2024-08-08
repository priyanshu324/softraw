import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LeftDrawer from '../Drawer/LeftDrawer';
import Post from './Post';


const Home = ({ navigation }) => {

    const [isLeftSheetOpen, setIsLeftSheetOpen] = useState(false);

    const handleOpenLeftSheet = () => {
        setIsLeftSheetOpen(true);
    };
    const handleCloseLeftSheet = () => {
        setIsLeftSheetOpen(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.bars}>
                <TouchableOpacity onPress={handleOpenLeftSheet}>
                    <Icon name="menu" size={45} style={styles.icons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Icon name="logout" size={45} style={styles.icons} />
                </TouchableOpacity>
                <LeftDrawer handleCloseLeftSheet={handleCloseLeftSheet} handleOpenLeftSheet={handleOpenLeftSheet} isLeftSheetOpen={isLeftSheetOpen} />
            </View>

            <ScrollView>
                <View style={{ top: 20 }}>
                    <Post />
                </View>


            </ScrollView>


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#211F26',
    },
    bars: {
        width: 370,
        height: 60,
        top: 5,
        backgroundColor: '#383838',
        marginLeft: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icons: {
        flex: 1,
        backgroundColor: '#383838',
        color: '#ffffff',
        padding: 5,
    },
})