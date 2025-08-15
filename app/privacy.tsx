import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function PrivacyModal() {
  const router = useRouter();

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Privacy Policy</Text>
      <ScrollView>
        <Text style={styles.sectionTitle}>
          1. Information We Collect and/or Store
        </Text>
        <Text style={styles.text}>
          • <Text style={styles.bold}>Account Information:</Text> When you sign
          in with Google or Apple (via Firebase Authentication), we collect your
          generated user ID, name, and email address.{"\n"}•{" "}
          <Text style={styles.bold}>Photo Data:</Text> Any images you upload, as
          well as their metadata (timestamp, file size, device type).
          {"\n"}
        </Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
        <Text style={styles.text}>
          •{" "}
          <Text style={styles.bold}>Authentication & Account Management:</Text>{" "}
          Secure sign-in and account maintenance via Firebase.{"\n"}•{" "}
          <Text style={styles.bold}>Recipe Suggestions:</Text> We send your
          photos to OpenRouter’s AI models to generate item names and recipes.
          We store the returned recipes-related data and photo metadata on your
          local device.{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>3. Data Sharing & Third Parties</Text>
        <Text style={styles.text}>
          • <Text style={styles.bold}>Firebase (Google LLC):</Text> Manages
          authentication.{"\n"}•{" "}
          <Text style={styles.bold}>OpenRouter AI Services:</Text> Processes
          images for recipes.{"\n"}
          {"\n"}
          We will <Text style={styles.bold}>not</Text> sell or share your
          personal information.{"\n"}
        </Text>

        <Text style={styles.text}>
          We reserve the right to update this policy anytime. If you have
          questions about this policy, contact the developer at:
          badhrihari123@gmail.com
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 12,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 12,
    marginBottom: 4,
    fontWeight: "500",
  },
  text: {
    color: "#fff",
    lineHeight: 20,
  },
  bold: {
    fontWeight: "700",
  },
});
