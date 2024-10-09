import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Screen03() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800; // Giá của mỗi sản phẩm
  const [total, setTotal] = useState(pricePerItem); // Tổng giá tiền ban đầu

  // Mỗi khi quantity thay đổi, tính lại tổng giá tiền
  useEffect(() => {
    setTotal(quantity * pricePerItem);
  }, [quantity]);

  return (
    <ScrollView style={{ padding: 20, paddingTop: 50 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 100, height: 130 }}
          source={require("../assets/img/book.png")}
        />
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
            Cung cấp bởi Tiki Trading
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingBottom: 10,
              color: "red",
              fontSize: 20,
            }}
          >
            {pricePerItem.toLocaleString()} đ
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              paddingBottom: 10,
              color: "gray",
              fontSize: 15,
              textDecorationLine: "line-through",
            }}
          >
            141.000 đ
          </Text>
          {/* Nút bấm tăng số lượng */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              <Text style={styles.btnQuatity}>-</Text>
            </TouchableOpacity>
            <Text
              style={{ fontWeight: "bold", paddingLeft: 10, paddingRight: 10 }}
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.btnQuatity}>+</Text>
            </TouchableOpacity>
            <View marginLeft={100}>
              <Text style={styles.link}>Mua sau</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Mã giảm giá đã lưu */}
      <View paddingTop={20} style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", paddingRight: 20 }}>
          Mã giảm giá đã lưu
        </Text>
        <Text style={styles.link}>xem tại đây</Text>
      </View>
      {/* Áp mã giảm giá */}
      <View style={{ marginTop: 40, flexDirection: "row" }}>
        {/* button 1 */}
        <View
          style={{
            width: 230,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            marginRight: 10,
            borderRadius: 3,
          }}
        >
          <View
            style={{
              width: 30,
              height: 20,
              backgroundColor: "yellow",
              marginRight: 10,
            }}
          ></View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Mã giảm giá</Text>
        </View>
        {/* button2 */}
        <View
          style={{
            flex: 1,
            borderRadius: 3,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0A5EB7",
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            Áp dụng
          </Text>
        </View>
      </View>
      {/* Phiếu quà tặng */}
      <View
        style={{ marginTop: 40, height: 20, backgroundColor: "gray" }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "center",
          textAlign: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 13 }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={{
            paddingLeft: 10,
            fontWeight: "bold",
            color: "blue",
            fontSize: 13,
          }}
        >
          Nhập tại đây?
        </Text>
      </View>
      <View style={{ height: 20, backgroundColor: "gray" }}></View>
      {/* Tạm tính */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tạm tính</Text>
        <Text style={{ fontWeight: "bold", color: "red", fontSize: 20 }}>
          {total.toLocaleString()} đ
        </Text>
      </View>
      {/* Thành tiền đặt hàng */}
      <View style={{ height: 150, backgroundColor: "gray" }}></View>
      <View style={{ paddingTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "gray" }}>
            Thành tiền
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>
            {total.toLocaleString()} đ
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "red",
            marginTop: 30,
            borderRadius: 3,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnQuatity: {
    fontWeight: "bold",
    backgroundColor: "gray",
    width: 20,
    height: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 15,
  },
});
export default Screen03;
