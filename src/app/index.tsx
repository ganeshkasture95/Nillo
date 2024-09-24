import { useActionSheet } from "@expo/react-native-action-sheet";
import {
  BottomSheetModal,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import AuthModel from "components/AuthModel";
import { Colors } from "constants/Colors";
import * as WebBrowser from "expo-web-browser";
import React, { useMemo, useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ModalType } from "types/enums";

export default function Page() {

  const { top } = useSafeAreaInsets()
  const { showActionSheetWithOptions } = useActionSheet()
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['33%','90%'], []);

  const [authType, setAuthType] = useState<ModalType | null>(null)

  const openLink = () => {
    WebBrowser.openBrowserAsync("https://ganeshkasture.vercel.app")
  }
  const showModal = async (type: ModalType) => {
    setAuthType(type),
      bottomSheetModalRef.current?.present();
  }



  const openSctionSheet = async () => {
    const option = ['View support docs', 'Contct us', 'Cancel'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options: option,
        cancelButtonIndex,
        title: "Can't Log in please Signup?"
      },
      (selectedIndex: any) => {
        if (selectedIndex === 0) {
          WebBrowser.openBrowserAsync("https://ganeshkasture.vercel.app")
        }
        if (selectedIndex === 1) {
          WebBrowser.openBrowserAsync("https://ganeshkasture.vercel.app")
        }
        if (selectedIndex === 2) {
          console.log("Cancel")
        }
      }
    );
  }

  return (
    <BottomSheetModalProvider>
      <View style={[styles.container, { paddingTop: top + 30 }]}>

        <Image source={require("../../assets/images/login/trello.png")} style={styles.image} />

        <Text style={styles.introText}>Move teamwork forward - even on the go</Text>
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

        <Text style={styles.link} onPress={openSctionSheet}>Can't Log in please Signup?</Text>
      </View>


{/* this is the bottom sheet in the app using gorhomes bottom sheet  */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
      >
        <View>
         <AuthModel  authType= {authType}/>
        </View>

      </BottomSheetModal>

    </BottomSheetModalProvider>
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