import { initializeApp } from "firebase/app"

const firebaseConfig = {
	apiKey: "AIzaSyDygXxewwZgV6RD1Aj0pi5INxwC48Rt_tw",
	authDomain: "plugins-store.firebaseapp.com",
	projectId: "plugins-store",
	storageBucket: "plugins-store.appspot.com",
	messagingSenderId: "947884578358",
	appId: "1:947884578358:web:fabe6c7d7a0247d3852a97",
	measurementId: "G-PZDKSH6QYM"
  };

const app = initializeApp(firebaseConfig);

export const firebaseConnection = () => app;