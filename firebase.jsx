// firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDadhQvQJsezb0Jj8LkaA6NPHvZ6b3guuY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'project-371ea',
  // Add other Firebase config properties
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
