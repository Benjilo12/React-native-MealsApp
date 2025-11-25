import { View, Text, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
  // Change this line
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text> // And this line
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#e2b497",
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomWidth: 2,
  },
});
