import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import InputBox from '../hooks/InputBox'
import SubmitButton from '../hooks/SubmitButton'
import { user } from '../../data';

const Login = ({ navigation }) => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    let loginuser = user.filter(element => element.email === email && element.password === password);
    if (loginuser && loginuser.length > 0) {
      navigation.navigate('Home');
    }
    else {
      alert('user not found');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, justifyContent: 'center', textAlign: 'center', color: "#fff" }}>Login</Text>

      <View>

        <InputBox
          inputTitle={'Email'}
          inputPlaceholder={'Enter Your Email'}
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
          BtnTitle="Login"
          handleSubmit={handleLogin}
        />
        <Text style={styles.linkText}>Please Register Your Account <>{" "}</>

          <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text>

        </Text>
      </View>

    </View >
  )
}

export default Login


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
    textAlign: 'center',

  }
})