import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileModal() {
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [cuisineFocused, setCuisineFocused] = useState(false);
  const [dietFocused, setDietFocused] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("userPreferences");
        if (stored) {
          const prefs = JSON.parse(stored);
          setCuisine(prefs.cuisine || "");
          setDiet(prefs.diet || "");
        }
      } catch (e) {
        console.error("Failed to load preferences:", e);
      }
    })();
  }, []);

  const savePreferences = async () => {
    try {
      await AsyncStorage.setItem(
        "userPreferences",
        JSON.stringify({ cuisine, diet })
      );
      alert("Preferences saved!");
    } catch (e) {
      console.error("Error saving preferences:", e);
    }
  };

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
            maxLength={70}
            value={cuisine}
            onChangeText={setCuisine}
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
            maxLength={70}
            value={diet}
            onChangeText={setDiet}
            onFocus={() => setDietFocused(true)}
            onBlur={() => setDietFocused(false)}
          />
        </View>

        <Button title="Save Preferences" onPress={savePreferences} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 24, color: "#fff", marginBottom: 20, fontWeight: "600" },
  label: { color: "#fff", fontSize: 16, marginTop: 12, marginBottom: 4 },
  inputContainer: {
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: "transparent",
    borderRadius: 8,
  },
  inputContainerFocused: {
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.75)",
    borderRadius: 8,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 8,
    color: "#fff",
    padding: 12,
    fontSize: 15,
  },
});
