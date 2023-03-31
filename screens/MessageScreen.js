import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Message from "../components/Message";
import { ScrollView } from "react-native-gesture-handler";

const MessageScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.messageContainer}>
        <View>
          <Text style={styles.textLeft}>Trung tâm tin nhắn</Text>
        </View>

        <View style={styles.messageTopRight}>
          <Ionicons name="notifications" size={18} color="green" />
          <Text style={styles.textRight}>Bấm</Text>
        </View>
      </View>
      <ScrollView>
        <Message
          title="Tin Nhắn"
          content="Hello"
        />
        <Message
          title="Thông báo"
          content="Shop vừa ra mắt thức uống mới, để xem sản phẩm mới vui lòng truy cập vào app"
        />
        <Message
          title="Lời tâm sự"
          content="Tôi là fan của Hola được 20 năm nay rồi. Còn nhớ hồi bé, với cái tivi cà tàng, bố tôi mở một hình ảnh của HolaCoCo lên, tôi ngồi xem cùng, chợt thấy cuốn hút bởi những thức uống, giá thành hợp lý, nhan viên thân thiện và xinh đẹp mà lại còn chưa có người yêu. Và thế là tôi đã đem lòng yêu HolaCoCo từ đó. Tôi bắt đầu lên mạng tìm thông tin, những điểm thú vị và thông tin bên lề của quán và các loại đồ uống, và càng thêm yêu họ hơn. Trải qua bao nhiêu năm tháng thăng trầm cùng quán, dù vắng khách và không gặp vận may, tôi vẫn mãi giữ lửa tình yêu với quán và các nhân viên. Để rồi đến ngày hôm nay, khi được chứng kiến thời khắc chuyển nhượng lịch sử của HolaCoCo, trong tôi lại bùng cháy lên cảm xúc năm xưa một lần nữa, mãnh liệt hệt như lần đầu tiên mà tôi được thưởng thức vậy vậy."
        />
        <Message
          title="Tin nhắn"
          content="Cảm ơn bạn đã mua tại shop. Hẹn bạn vào dịp khác để nhận các ưu đãi từ shop nhé"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  messageTopRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: "green",
    backgroundColor: "#ebffee",
  },
  textLeft: {
    fontSize: 23,
    fontWeight: "400",
  },
  textRight: {
    color: "green",
    paddingLeft: 2,
  },
});

export default MessageScreen;
