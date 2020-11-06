import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7zYzfv8wYNFY_BT31Ypj7bpuae8PDwv4",
    authDomain: "crwn-db-46f67.firebaseapp.com",
    databaseURL: "https://crwn-db-46f67.firebaseio.com",
    projectId: "crwn-db-46f67",
    storageBucket: "crwn-db-46f67.appspot.com",
    messagingSenderId: "673378543709",
    appId: "1:673378543709:web:88d4134ee93120a89745b4",
    measurementId: "G-4X44E3ZC94"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exits) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch  (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


