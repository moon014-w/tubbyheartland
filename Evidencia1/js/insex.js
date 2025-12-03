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
    enviarContacto.addEventListener("click", async () => {
        await setDoc(doc(db, "CONTACTANOS", emailContacto.value), {
            nombre: nombreContacto.value,
            mensaje: mensajeContacto.value
        });
    })



document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('purchaseModal');
    const modalClose = document.getElementById('modalClose');
    const modalCancel = document.getElementById('modalCancel');
    const modalMessage = document.getElementById('modalMessage');
    const form = document.getElementById('purchaseForm');

    function openModal(name, price) {
        document.getElementById('teletubbyName').value = name;
        document.getElementById('teletubbyPrice').value = price;
        document.getElementById('buyerEmail').value = '';
        document.getElementById('location').value = '';
        document.getElementById('cardNumber').value = '';
        document.getElementById('cardType').value = '';
        modalMessage.style.display = 'none';
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
    }

    document.querySelectorAll('.adopt-button-small').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = btn.dataset.name || btn.closest('.teletuby-card')?.querySelector('h4')?.innerText || 'Teletubby';
            const price = btn.dataset.price || btn.closest('.teletuby-card')?.querySelector('.teletubby-price')?.innerText || '';
            openModal(name, price);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalCancel.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target.matches('[data-close], .modal-overlay')) closeModal();
    });

    // Form: format card input (simple grouping) and validate
    const cardInput = document.getElementById('cardNumber');
    cardInput?.addEventListener('input', (e) => {
        let v = e.target.value.replace(/[^\d]/g, '').slice(0,16);
        e.target.value = v.replace(/(\d{4})/g, '$1 ').trim();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('teletubbyName').value.trim();
        const email = document.getElementById('buyerEmail').value.trim();
        const price = document.getElementById('teletubbyPrice').value.trim();
        const location = document.getElementById('location').value.trim();
        const card = document.getElementById('cardNumber').value.replace(/\s/g,'');
        const cardType = document.getElementById('cardType').value;

        if (!email || !location || !card || !cardType) {
            modalMessage.style.display = 'block';
            modalMessage.style.background = '#fdecea';
            modalMessage.style.color = '#a10b0b';
            modalMessage.textContent = 'Por favor completa todos los campos requeridos.';
            return;
        }

        // Mostrar confirmación con mensaje amigable
        modalMessage.style.display = 'block';
        modalMessage.style.background = '#e8f8ee';
        modalMessage.style.color = '#0b6b3a';
        modalMessage.innerHTML = `
            <div style="text-align: center; font-size: 16px;">
                <p style="margin: 0 0 8px 0;"><strong>¡Gracias por tu adopción! 🎉</strong></p>
                <p style="margin: 0 0 8px 0;">Ahora eres parte de nuestra comunidad Tuby Heartland</p>
                <p style="margin: 0; font-size: 14px;">Se ha enviado confirmación a ${email}</p>
            </div>
        `;
        
        // Cerrar modal después de 3 segundos
        setTimeout(() => closeModal(), 3000);
    });
});

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