import { AntDesign } from "@expo/vector-icons";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffect } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthStrategy, ModalType } from "types/enums";

const LOGIN_OPTIONS = [
  {
    text: 'Continue with Google',
    icon: require('../assets/images/login/google.png'),
    strategy: AuthStrategy.Google,
  },
  {
    text: 'Continue with Microsoft',
    icon: require('../assets/images/login/microsoft.png'),
    strategy: AuthStrategy.Microsoft,
  },
  {
    text: 'Continue with Apple',
    icon: require('../assets/images/login/apple.png'),
    strategy: AuthStrategy.Apple,
  },
  {
    text: 'Continue with Slack',
    icon: require('../assets/images/login/slack.png'),
    strategy: AuthStrategy.Slack,
  },
];


interface AuthModelProps {
  authType: ModalType | null
}

const AuthModel = ({ authType }: AuthModelProps) => {

  const onSelectAuth = async (strategy: AuthStrategy) => {
    console.log('onSelectedAuth', strategy)
  }

  useEffect(() => {
    console.log('AuthModel', authType)
  })

  return (
    <BottomSheetView style={[styles.modalContainer]} className="flex flex-1  items-start p-5 gap-16 ">
      <TouchableOpacity style={styles.modalBtn}  className="flex flex-row items-center  justify-center  ">
        <AntDesign name="mail" size={24}  className=" h-10"/>
        <Text style={styles.btnText} className=" h-12  text-black">
          {authType === ModalType.Login ? 'Log in' : 'Sign up'} with Email
        </Text>
      </TouchableOpacity>
      {LOGIN_OPTIONS.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.modalBtn}
          onPress={() => onSelectAuth(option.strategy!)} className="flex flex-row p-2  rounded-md justify-center items-center">
          <Image source={option.icon} style={styles.btnIcon} className=" h-16 w-16" />
          <Text style={styles.btnText} className="h-10 text-center ">{option.text}</Text>
        </TouchableOpacity>
      ))}
    </BottomSheetView>

  )
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
    gap: 20,
  },
  modalBtn: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    borderWidth: 1,
  },
  btnIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  btnText: {
    fontSize: 18,
  },
});

export default AuthModel