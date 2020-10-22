import * as firebase from 'firebase'

let config = {
    apiKey: 'AIzaSyCeVSBxD5JsJvg5_9x4OWWXEBdvTSq8We0',
    authDomain: 'oneid-retails-firebase-prod.firebaseapp.com',
    databaseURL: 'https://oneid-retails-firebase-prod.firebaseio.com',
    projectId: 'oneid-retails-firebase-prod',
    storageBucket: 'oneid-retails-firebase-prod.appspot.com',
    messagingSenderId: '1015990196187',
    appId: '1:1015990196187:web:13b81751588d5d593db9fe',
    measurementId: 'G-4TGTF1HNRV',
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase
