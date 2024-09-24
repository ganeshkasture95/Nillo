import { Colors } from "constants/Colors";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ModalType } from "types/enums";


export default function Page() {

  const { top } = useSafeAreaInsets()
  const showModal = async (type: ModalType) => {


  }
  const openLink=()=>{
    WebBrowser.openBrowserAsync("https://ganeshkasture.vercel.app")
  }
  return (
    <View style={[styles.container,
    {
      paddingTop: top + 30
    }
    ]}>

      <Image source={require("../../assets/images/login/trello.png")} style={styles.image} />
      <Text style={styles.introText}>Move teamwork forword - even on the go</Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "white" }]} onPress={() => { showModal(ModalType.Login) }}>
          <Text style={(styles.btnText, { color: Colors.primary })}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "transparent" }]} onPress={() => { showModal(ModalType.SignUp) }}>
          <Text style={(styles.btnText, { color: Colors.fontLight })}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description} >
        By signing up, you agree to the <Text style={styles.link} onPress={openLink}>User Notice</Text> and <Text style={[styles.link]} onPress={openLink}>Privacy Policy</Text>
      </Text>

      <Text style={styles.link} onPress={openLink}>Can't Log in please Signup</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center'
  },
  image: {

    height: 450,
    paddingHorizontal: 40,
    resizeMode: 'contain'
  },
  introText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 17,
    padding: 30
  },
  bottomContainer: {
    gap: 4,
    width: '100%',
    paddingHorizontal: 40,
  },
  btn: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
  },
  btnText: {
    fontSize: 10
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    marginHorizontal: 60,
  },
  link: {
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: "center",
    fontSize: 16
  }
});