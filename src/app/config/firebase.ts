import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'revents-2023-6772b.firebaseapp.com',
    projectId: 'revents-2023-6772b',
    storageBucket: 'revents-2023-6772b.appspot.com',
    messagingSenderId: '652549682034',
    appId: '1:652549682034:web:a93817436813b4fdb363eb',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)