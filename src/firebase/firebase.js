import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYYQhL-WDhwizlYoiL6wJp1nt379nNcuI",
  authDomain: "ur-shop-678c9.firebaseapp.com",
  projectId: "ur-shop-678c9",
  storageBucket: "ur-shop-678c9.appspot.com",
  messagingSenderId: "1058604327129",
  appId: "1:1058604327129:web:4fd204526b22182d645ec8",
  measurementId: "G-LGCPYWFG4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// initialize firebase Authentication to get a reference to the service
export const auth = getAuth(app);
export default app;
