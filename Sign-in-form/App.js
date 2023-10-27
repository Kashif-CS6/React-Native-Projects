import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.login}>
          <Text style={styles.heading1}>Login</Text>
        </View>
        <View style={styles.username}>
          <Text style={styles.username_text}>Username</Text>
          <TextInput
            style={styles.input_username}
            placeholder="Type your username"
          />
        </View>
        <View style={styles.password}>
          <Text style={styles.password_text}>Password</Text>
          <TextInput
            style={styles.input_password}
            placeholder="Type your Password"
          />
          <Text style={styles.forget_password}>Forget password?</Text>
          <TouchableOpacity>
            <Text style={styles.Login_button}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.signup_here}>Or Sign Up Using</Text>
          <View style={styles.sign_in_icons}>
            <TouchableOpacity><Icon name="facebook" size={30} color="#1877f2" /></TouchableOpacity>
            <TouchableOpacity> <Icon name="twitter" size={30} color="#1da1f2" /></TouchableOpacity>
            <TouchableOpacity> <Icon name="google" size={30} color="#db4a39" /></TouchableOpacity>
          </View>
          <View style={styles.lastone}>
          <Text style={styles.second_last}>Or SignUp Using</Text>
          <Text style={styles.last}>SIGN UP</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
  },
  box: {
    width: 350,
    height: 600,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "white",
    marginTop: 50,
    marginBottom: 30,
    borderRadius:9
  },
  login: {
    height: 100,
    display: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  heading1: {
    fontSize: 40,
    fontWeight: "bold",
  },
  username: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  input_username: {
    padding: 10,
    marginTop: 3,
    borderBottomWidth: 1,
    marginBottom: 3,
    borderTopColor: "none",
    borderLeftColor: "none",
    borderRightColor: "none",
  },
  password: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  input_password: {
    padding: 10,
    marginTop: 3,
    borderBottomWidth: 1,
    marginBottom: 3,
    borderTopColor: "none",
    borderLeftColor: "none",
    borderRightColor: "none",
  },
  forget_password: {
    fontSize: 11,
    textAlign: "end",
    marginTop: 4,
    marginBottom: 25,
  },
  Login_button: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "blue",
    padding: 5,
    color: "white",
    borderRadius: 15,
  },
  signup_here: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 29,
  },
  sign_in_icons:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    marginBottom:100
    
  },
  second_last:{
    fontSize:10,
    textAlign:'center'
  },
  last:{
    fontSize:13,
    fontWeight:'bold',
    textAlign:'center'
  }
});
