import { useEffect } from "react"
import { Text, View } from "react-native"
import { ModalType } from "types/enums"


interface AuthModelProps{
    authType: ModalType | null
}

const AuthModel = ({authType}:AuthModelProps) => {

  useEffect(()=>{
    console.log('AuthModel', authType)
  })

  return (
    <View>
      <Text>AuthModel</Text>
    </View>
  )
}

export default AuthModel