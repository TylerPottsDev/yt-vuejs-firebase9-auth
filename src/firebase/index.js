import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB3Z8T6I_ZZ9fnXnUUGDL9-3ocJVII3wEM",
  authDomain: "vue-fire-auth-yt.firebaseapp.com",
  projectId: "vue-fire-auth-yt",
  storageBucket: "vue-fire-auth-yt.appspot.com",
  messagingSenderId: "745571531497",
  appId: "1:745571531497:web:31ef49d3de839b54030e78"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }