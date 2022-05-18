import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Firebase project configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyAcZkbcee2d_8NpmJVlSJPnCGh2iPG4ZqQ',
  authDomain: 'favvle-80b16.firebaseapp.com',
  projectId: 'favvle-80b16',
  storageBucket: 'favvle-80b16.appspot.com',
  messagingSenderId: '803116463648',
  appId: '1:803116463648:web:8ee7c8e40c6d1e5dad6e45',
  measurementId: 'G-D8JCLK6P5F',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
