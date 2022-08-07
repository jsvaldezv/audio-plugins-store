import { initializeApp } from "firebase/app"

const firebaseConfig = {
	apiKey: "AIzaSyDQJzkElFnskufzvWBtfwqX_QA6GzXOInc",
	authDomain: "audio-plugins-store.firebaseapp.com",
	projectId: "audio-plugins-store",
	storageBucket: "audio-plugins-store.appspot.com",
	messagingSenderId: "511036644728",
	appId: "1:511036644728:web:caf003dea7f3a815fe7c8d",
	measurementId: "G-W7BBDWLGYS"
};

const app = initializeApp(firebaseConfig);

export const firebaseConnection = () => app;