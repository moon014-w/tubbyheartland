  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { 
            getFirestore,
            doc, 
            setDoc,
            collection, 
            query, 
            where, 
            getDocs 
        } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

 const firebaseConfig = {
    apiKey: "AIzaSyCrP7ZSv1jgu9InGqbOdYzZMaWZ95HlOuw",
    authDomain: "testform-f29d4.firebaseapp.com",
    projectId: "testform-f29d4",
    storageBucket: "testform-f29d4.firebasestorage.app",
    messagingSenderId: "990494062849",
    appId: "1:990494062849:web:577c3ac263b7811db24300",
    measurementId: "G-L6MY0PTC3R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

//Elementos HTML---------------------------------------------------------------------------------
    const contenedorContacto = document.getElementById("contenedorContacto");
    const nombreContacto = document.getElementById("nombreContacto");
    const emailContacto = document.getElementById("emailContacto");
    const mensajeContacto = document.getElementById("mensajeContacto");
    const enviarContacto = document.getElementById("enviarContacto");


// Funciones firebase ----------------------------------------------------------------------------
    enviarContacto.addEventListener("click", async function () {
      const q = query(collection(db, "CONTACTANOS"), where("email", "==", emailContacto.value));

      const querySnapshot = await getDocs(q);
        await setDoc(doc(db, "CONTACTANOS", emailContacto.value), {
            nombre: nombreContacto.value,
            mensaje: mensajeContacto.value
        });
    })







/* const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
}); */





















/* const teletubbies = [
    {
        id:1,
        name:"Tinky Winky",
        color:"Purple",
        price: $200,
        imegeUrl:"./img/tinkywinky.png",
        description: "El más grande y el más viejo de los Teletubbies, conocido por su triángulo en la cabeza y su bolso rojo."
    },
     { 
     id: 2, 
     name: 'Dipsy', 
     color: 'green', 
     price: 25.99, 
     imageUrl: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800&auto=format&fit=crop', 
     description: 'Relajado y estiloso, con su sombrero de vaca blanco y negro. Le encanta bailar.' 
    },
    { 
     id: 3, 
     name: 'Laa-Laa', 
     color: 'yellow', 
     price: 27.99, 
     imageUrl: 'https://images.unsplash.com/photo-1488859082932-d593734549af?q=80&w=800&auto=format&fit=crop', 
     description: 'Dulce y maternal, ama cantar y bailar con su gran pelota naranja.' 
  },
    { 
     id: 4, 
     name: 'Po', 
     color: 'red', 
     price: 24.99, 
     imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop', 
     description: 'La más pequeña y traviesa. Es bilingüe y adora su patinete azul y rosa.' 
  },
] */