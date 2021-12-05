importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js')


try {
    var config = {
        // apiKey: 'AIzaSyABRALdPhSmLH_NdwxQ27gcwG-_v9QacV4',
        // authDomain: 'evolutiodev.firebaseapp.com',
        // databaseURL: 'https://evolutiodev.firebaseio.com/',
        // projectId: 'evolutiodev',
        // storageBucket: 'evolutiodev.appspot.com',
        // messagingSenderId: '646469414520'

        apiKey: "AIzaSyDNJYEK4nOXpyOs2_Ckto96C_Sv9qIwoI4",
        authDomain: "legalhelp-332723.firebaseapp.com",
        projectId: "legalhelp-332723",
        storageBucket: "legalhelp-332723.appspot.com",
        messagingSenderId: "543859414193",
        appId: "1:543859414193:web:000ea4193a9d53c504fe90",
        measurementId: "G-QK7802FFVX"

    }

    firebase.initializeApp(config)

    const messaging = firebase.messaging()

    messaging.setBackgroundMessageHandler(function (payload) {
        const title = payload.data.username
        let iconPhat = '';
        const options = {
            body: payload.data.message,
            icon: 'public/assets/logo.png'
        }

        return self.registration.showNotification(title, options)
    })
} catch (error) {
    console.log(error)
}
