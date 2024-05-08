import { View, Text } from "react-native";
import styles from "./styles";

const SuccessMsg = ({ msg }) => {
  return (
    <View style={styles.successContainer}>
      <View style={styles.successMsgContainer}>
        <Text style={styles.successMsgText}>{msg}</Text>
      </View>
    </View>
  );
};

export default SuccessMsg;
