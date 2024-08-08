import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MIcon from "react-native-vector-icons/MaterialIcons"
import FIcon from "react-native-vector-icons/MaterialCommunityIcons"


const InputBox = ({
    inputTitle,
    autoComplete,
    secureTextEntry = false,
    value,
    setValue,
    inputPlaceholder,
}) => {
    return (

        <View>
            <View style={{ flexDirection: "row", marginLeft: 20, }}>
                <Text style={{ marginLeft: 8, fontWeight: 'bold', fontSize: 18, color: "#fff" }}>{inputTitle}</Text>
            </View>

            <TextInput
                style={styles.name}
                autoCorrect={false}
                autoComplete={autoComplete}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder={inputPlaceholder}
            />

        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    name: {
        height: 40,
        marginBottom: 20,
        backgroundColor: '#242D35',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: '#fff',
        marginLeft: 20,
        marginRight: 45,
    },
    icon: {
        fontSize: 25,
        color: "#fff",

    }

})