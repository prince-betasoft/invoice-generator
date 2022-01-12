import { firebase as Firebase } from '@firebase/app'
import 'firebase/storage'
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/functions'
import 'firebase/database'

const config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
  measurementId: process.env.firebaseMeasurementId,
}
//Firebase.initializeApp(config)

if (Firebase.apps.length === 0) {
  Firebase.initializeApp(config)
}

export const firebase = Firebase
export const storage = Firebase.storage()
export const auth = Firebase.auth
export const firestore = Firebase.firestore()
export const functions = Firebase.functions()
