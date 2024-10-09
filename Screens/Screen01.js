import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Screen01() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView
      style={{
        flex: 1,
        background: "linear-gradient(180deg, #FBCB00 10%, #BF9A00 100%)",
      }}
    >
      <View style={{ marginTop: 100 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>LOGIN</Text>
      </View>
      {/* input */}
      <View style={{ marginTop: 100, marginLeft: 20, marginRight: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            borderWidth: 1,
            fontSize: 20,
            fontWeight: "bold",
            height: 50,
            padding: 10,
          }}
        >
          <Icon
            name="user"
            size={20}
            color="gray"
            style={{
              marginRight: 10,
              fontSize: 40,
              fontWeight: 10,
              color: "black",
            }}
          />
          <TextInput
            placeholder="Name"
            style={{ flex: 1, fontSize: 20, fontWeight: "50px" }}
            value={name}
            onChangeText={setName} // Sử dụng onChangeText
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            borderWidth: 1,
            fontSize: 20,
            fontWeight: "bold",
            height: 50,
            padding: 10,
          }}
        >
          <Icon
            name="lock"
            size={20}
            color="black"
            style={{
              marginRight: 10,
              fontSize: 40,
              fontWeight: 10,
              color: "black",
            }}
          />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, fontSize: 20, fontWeight: "50px" }}
            value={password}
            onChangeText={setPassword} // Sử dụng onChangeText
          />
        </View>

        {/* button Login */}
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              backgroundColor: "black",
              textAlign: "center",
              padding: 10,
              marginTop: 50,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <View>
          <Text
            style={{
              flex: 1,
              marginTop: 50,
              textAlign: "center",
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Forgot your password?
          </Text>
        </View>
      </View>
    </ScrollView>
    
  );
}

export default Screen01;
