import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { user } from '../../data';


const Account = ({ navigation }) => {


    const [loading, setLoading] = useState(false);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Image source={{
                        uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
                    }}
                        style={{ height: 200, width: 200 }}
                    />
                </View>
                <Text style={styles.warningtext}>
                    Currently You Can Only Update Your Name And Password*
                </Text>

                {user.map((user, i) => {
                    return (
                        <>
                            <View style={styles.inputContainer} key={i}>
                                <Text style={styles.inputText}>Name </Text>
                                <TextInput style={styles.inputBox} >{user.name}</TextInput>
                            </View><View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Email</Text>
                                <TextInput style={styles.inputBox} editable={false} >{user.email}</TextInput>
                            </View><View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Password</Text>
                                <TextInput style={styles.inputBox} >{user.password}</TextInput>
                            </View><View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Role</Text>
                                <TextInput style={styles.inputBox} editable={false} >{user.role}</TextInput>
                            </View>
                        </>
                    )

                })}

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.updateBtn} onPress={() => navigation.navigate('Home')} >
                        <Text style={styles.updateBtnText}>{loading ? "Please Wait" : "Update Profile"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#211F26',
    },
    container_1: {
        backgroundColor: "#fff"
    },
    warningtext: {
        fontSize: 13,
        color: "red",
        textAlign: "center",
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    inputText: {
        fontWeight: "bold",
        width: 70,
        color: "#fff",
    },
    inputBox: {
        width: 250,
        backgroundColor: "#fff",
        marginLeft: 10,
        fontSize: 16,
        paddingLeft: 20,
        borderRadius: 5,
        color: "#000",
    },
    updateBtn: {
        backgroundColor: "#0E33F3",
        color: "white",
        height: 40,
        width: 250,
        borderRadius: 10,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    updateBtnText: {
        color: "#ffffff",
        fontSize: 16,
    },
})