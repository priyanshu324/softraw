import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../hooks/InputBox'
import SubmitButton from '../hooks/SubmitButton'



const Register = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // const handleRegister = () => {
    //     setLoading(true);
    //     const user = (user({ name: name, email: email, id: new Date().getTime(), userId: new Date().getTime() }));
    //     navigation.navigate('Home')
    // }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, justifyContent: 'center', textAlign: 'center' }}>Register</Text>
            {!loading ? (
                <>
                    <View>
                        <InputBox
                            inputTitle={'Name'}
                            inputPlaceholder={'Enter Your Name'}
                            value={name}
                            setValue={setName}


                        />
                        <InputBox
                            inputTitle={'Email'}
                            inputPlaceholder={'Enter Your Email'}
                            keyboardType="email-Password"
                            autoComplete="email"
                            value={email}
                            setValue={setEmail}

                        />
                        <InputBox
                            inputTitle={'Password'}
                            inputPlaceholder={'Enter Your Password'}
                            secureTextEntry={true}
                            autoComplete="password"
                            value={password}
                            setValue={setPassword}
                        />
                    </View>
                    <View>
                        <SubmitButton
                            BtnTitle="Register"
                        />
                        <Text style={styles.linkText}>Already Register Please <Text onPress={() => navigation.navigate('Login')} style={styles.link}>LOGIN</Text></Text>
                    </View>
                </>

            ) : (
                <>
                    <ActivityIndicator size="large" color="#0000ff" />
                </>
            )
            }

        </View >
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#211F26',
    },
    linkText: {
        textAlign: 'center',
        color: "#fff"
    },
    link: {
        color: '#0E33F3',
    }
})