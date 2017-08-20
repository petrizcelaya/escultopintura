 //Inicialización Firebase
 var config = {
    apiKey: "AIzaSyDraSjQcfG-p3_0AlmB4PmyGtsrIes_gCg",
    authDomain: "albertopetriz-6bcd0.firebaseapp.com",
    databaseURL: "https://albertopetriz-6bcd0.firebaseio.com",
    projectId: "albertopetriz-6bcd0",
    storageBucket: "albertopetriz-6bcd0.appspot.com",
    messagingSenderId: "361314467708"
  };
  firebase.initializeApp(config);
  // referencia a base de datos
  var TableDataBase = firebase.database().ref('Imagenes')