import { Slot } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";

export default function RootLayout() {
  return <LinearGradient style={styles.rootScreen}
    colors={['#4e0329', '#ddb52f']}>
    <ImageBackground source={require('../assets/images/background.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootScreen}>
        <Slot />
      </SafeAreaView>
    </ImageBackground>
  </LinearGradient>;
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
