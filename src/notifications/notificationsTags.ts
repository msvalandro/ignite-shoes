import { OneSignal } from "react-native-onesignal";

export function tagUserCreateEmail(email:string) {
  OneSignal.User.addTag('user_email', email)
}