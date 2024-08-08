import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const LeftDrawer = ({ isLeftSheetOpen, handleCloseLeftSheet }) => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isLeftSheetOpen}
            onRequestClose={handleCloseLeftSheet}

        >

            <View style={[styles.bottomSheet, { height: windowHeight * 0.2 }]}>

                <View style={{ width: '100%' }}>
                    <View>
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate('Home')}>
                            <Icon name="home" size={35} color="#fff" />
                            <Text style={{ color: "#fff", left: 15, top: 5 }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row", top: 20 }} onPress={() => navigation.navigate('Account')} >
                        <Icon name="person" size={35} color="#fff" />
                        <Text style={{ color: "#fff", left: 15, top: 5 }}>Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}

export default LeftDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomSheet: {
        position: 'absolute',
        left: 10,
        right: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#383838',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 10,
        borderWidth: 1,
        borderColor: 'green',
        top: 0,
        borderBottomEndRadius: 10,
    },
});