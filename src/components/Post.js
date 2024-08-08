import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { notes } from '../../data'
import FIcon from "react-native-vector-icons/FontAwesome"
import moment from 'moment'
const Post = () => {
    return (
        <View>
            {notes?.map((notes, i) => (
                <View style={styles.card} key={i}>
                    <Text style={styles.title}> {notes?.title}</Text>
                    <Text style={styles.desc}> {notes?.desc}</Text>
                    <View style={styles.footer}>
                        <Text style={{ color: "#000" }}>
                            {" "}
                            <FIcon name="user" color={"orange"} />{" "}
                            {moment(notes?.userId).format("DD:MM:YYYY")}
                        </Text>

                        <Text style={{ color: "#000" }}>
                            {" "}
                            <FIcon name="clock-o" color={"orange"} />{" "}
                            {moment(notes?.createdAt).format("DD:MM:YYYY")}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Post

const styles = StyleSheet.create({

    card: {
        width: "97%",
        backgroundColor: "#ffffff",
        borderWidth: 0.2,
        borderColor: "gray",
        padding: 25,
        borderRadius: 10,
        marginVertical: 5,
    },
    title: {
        color: "#000",
        fontWeight: "bold",
        paddingBottom: 10,
        borderBottomWidth: 0.3,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    desc: {
        color: "#000",
        marginTop: 10,
    },
})