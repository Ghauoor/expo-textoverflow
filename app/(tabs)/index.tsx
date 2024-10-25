import { View, StyleSheet } from "react-native";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceHolderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(!showAppOptions);
    } else {
      alert("No image selected");
    }
  };
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceHolderImage} />
      </View>
      {showAppOptions ? (
        <View></View>
      ) : (
        <View style={style.footerContainer}>
          <Button label="Choose a Photo" theme="primary" onPress={pickImage} />
          <Button label="Use this Photo" />
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#25292e",
  },

  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
