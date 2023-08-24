import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { getAuth,connectAuthEmulator } from 'firebase/auth';

/* code from our Firebase console */
const firebaseConfig = {
	apiKey: "AIzaSyCADDPZK38h6kXH87DX54hCMRDPPsFgQdM",
	authDomain: "vue-firestore-yarn.firebaseapp.com",
	projectId: "vue-firestore-yarn",
	storageBucket: "vue-firestore-yarn.appspot.com",
	messagingSenderId: "606075661395",
	appId: "1:606075661395:web:309af8b5f96980d457aaa6",
	measurementId: "G-KGJGH9SD9E"
};

// Initialize Firebase
initializeApp(firebaseConfig)

if (location.hostname === "localhost") {
  connectAuthEmulator(getAuth(), "http://localhost:9099");
}

const app = createApp(App)

app.use(router)

app.mount('#app')
