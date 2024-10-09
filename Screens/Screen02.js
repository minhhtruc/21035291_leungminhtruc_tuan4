import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Screen02() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {/* usb */}
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Image source={require("../assets/img/usb.png")} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>
            USB Bluetooth Music Receiver
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            HJX-001-Biến loa thường thành loa bluetooth
          </Text>
        </View>
      </View>

      {/* rating */}
      <View style={{ paddingTop: 60, flex: 1, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Cực kỳ hài lòng
        </Text>
        <View style={{ paddingTop: 10, flexDirection: "row" }}>
          <Image source={require("../assets/img/Star.png")}></Image>
          <Image source={require("../assets/img/Star.png")}></Image>
          <Image source={require("../assets/img/Star.png")}></Image>
          <Image source={require("../assets/img/Star.png")}></Image>
          <Image source={require("../assets/img/Star.png")}></Image>
        </View>
      </View>
      {/* add picture */}
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          flex: 1,
          padding: 20,
          alignItems: "center",
          borderWidth: 2,
          borderRadius: 10,
          backgroud: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ marginRight: 20 }}
          source={require("../assets/img/camera.png")}
        />
        <Text style={{ fontWeight: "bold" }}>Thêm hình ảnh</Text>
      </View>
      {/* comment */}
      <View>
        <TextInput
          TextInputlaceholder="Hãy chia sẽ những điều mà bạn thích về sản phẩm"
          style={{
            flex: 1,
            fontSize: 20,
            marginTop: 20,
            height: 300,
            borderWidth: 1,
            borderRadius: 10,
          }}
          multiline={true}
        />
      </View>
      {/* sent */}

      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 20,
          flex: 1,
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "blue",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Gửi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Screen02;
