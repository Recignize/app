import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function ProfileModal() {
  const [cuisineFocused, setCuisineFocused] = useState(false);
  const [dietFocused, setDietFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Your Profile</Text>
        <Text style={styles.label}>Preferred cuisine</Text>
        <View
          style={[
            styles.inputContainer,
            cuisineFocused && styles.inputContainerFocused,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Italian, Mexican, Indian etc."
            placeholderTextColor="#757575"
            autoCapitalize="words"
            clearButtonMode="while-editing"
            maxLength={30}
            onFocus={() => setCuisineFocused(true)}
            onBlur={() => setCuisineFocused(false)}
          />
        </View>
        <Text style={styles.label}>Dietary restrictions</Text>
        <View
          style={[
            styles.inputContainer,
            dietFocused && styles.inputContainerFocused,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Vegetarian, Gluten-free, Nut-free, etc."
            placeholderTextColor="#757575"
            autoCapitalize="words"
            clearButtonMode="while-editing"
            maxLength={30}
            onFocus={() => setDietFocused(true)}
            onBlur={() => setDietFocused(false)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 20,
    fontWeight: "600",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  inputContainer: {
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: "transparent",
    borderRadius: 8,
  },
  inputContainerFocused: {
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 8,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 8,
    color: "#fff",
    padding: 12,
    fontSize: 15,
  },
});
