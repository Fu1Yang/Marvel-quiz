import app from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyCGWK5mCPkk_TJ6hiYH9-klzeERzEEqDc4",

  authDomain: "marvel-quiz-df1bf.firebaseapp.com",

  projectId: "marvel-quiz-df1bf",

  storageBucket: "marvel-quiz-df1bf.firebasestorage.app",

  messagingSenderId: "40018077094",

  appId: "1:40018077094:web:0af3fe7f2b734a67b65b67"

};


class Firebase{
    constructor()
    {
        app.initializeApp(firebaseConfig)
    }
}

export default Firebase