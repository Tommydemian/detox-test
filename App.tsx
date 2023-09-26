import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { CustomInput } from "./components/CustomInput";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <View style={styles.container}>
        {!clicked && (
          <Pressable
            testID="click-me-button"
            style={styles.button}
            onPress={() => setClicked(true)}
          >
            <Text style={styles.text}>Click me</Text>
          </Pressable>
        )}
        {clicked && <Text style={styles.hi}>Hi!</Text>}
        <StatusBar style="auto" />

        <Text testID="hello">hello</Text>
          
        {/* <TextInput
            style={styles.input}
            placeholder="password"
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}\
            id={testid}
          /> */}

       <CustomInput
        text="Password"
        placeholder="password"
        value={password}
        onChangeText={() => setPassword(password) }
        onBlur={() => {}}
        keyboardType="default"
        withIcon={true}
        iconName={seePassword ? "eye-off-sharp" : "eye-sharp"}
        secureTextEntry={seePassword}
        handleIconPress={() => {}}
        testID="password-input"
      /> 
      {/* {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )} */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hi: {
    fontSize: 30,
    color: "#4630EB",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#4630EB",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
