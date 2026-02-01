// ------------------ Firebase imports ------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } 
    from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// ------------------ Firebase config ------------------
const firebaseConfig = {
  apiKey: "AIzaSyA4OTXTp_2tUZ05J0MfmHbANfbvxy4HHzY",
  authDomain: "growt-4aaa0.firebaseapp.com",
  projectId: "growt-4aaa0",
  storageBucket: "growt-4aaa0.firebasestorage.app",
  messagingSenderId: "901425665708",
  appId: "1:901425665708:web:00d1c535c806078b77f109"
};

// ------------------ Initialize Firebase ------------------
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ------------------ DOM Elements ------------------
const loginSection = document.getElementById("login-section");
const dashboard = document.getElementById("dashboard");
const articlesList = document.getElementById("articles-list");

// ------------------ Login Function ------------------
window.loginAdmin = async function() {
  const email = document.getElementById("admin-email").value;
  const password = document.getElementById("admin-password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginSection.style.display = "none";
    dashboard.style.display = "block";
    loadArticles();
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

// ------------------ Add New Article ------------------
window.addArticle = async function() {
  const articleData = {
    titleEn: document.getElementById("titleEn").value,
    titleAr: document.getElementById("titleAr").value,
    summaryEn: document.getElementById("summaryEn").value,
    summaryAr: document.getElementById("summaryAr").value,
    contentEn: document.getElementById("contentEn").value,
    contentAr: document.getElementById("contentAr").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
    tags: document.getElementById("tags").value.split(",").map(tag => tag.trim()),
    author: "Admin",
    date: new Date().toLocaleDateString(),
    readTime: "5 min",
    views: "0"
  };
  try {
    await addDoc(collection(db, "articles"), articleData);
    alert("Article added successfully!");
    clearForm();
    loadArticles();
  } catch (error) {
    console.error("Error adding article:", error);
  }
}

// ------------------ Load Existing Articles ------------------
async function loadArticles() {
  articlesList.innerHTML = "";
  try {
    const snapshot = await getDocs(collection(db, "articles"));
    snapshot.forEach(docItem => {
      const data = docItem.data();
      const div = document.createElement("div");
      div.classList.add("article-item");
      div.innerHTML = `
        <strong>${data.titleEn}</strong> (${data.category})<br>
        <button onclick="deleteArticle('${docItem.id}')">Delete</button>
      `;
      articlesList.appendChild(div);
    });
  } catch (error) {
    console.error("Error loading articles:", error);
  }
}

// ------------------ Delete Article ------------------
window.deleteArticle = async function(id) {
  if(confirm("Are you sure you want to delete this article?")) {
    try {
      await deleteDoc(doc(db, "articles", id));
      loadArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  }
}

// ------------------ Clear Form After Adding ------------------
function clearForm() {
  document.getElementById("titleEn").value = "";
  document.getElementById("titleAr").value = "";
  document.getElementById("summaryEn").value = "";
  document.getElementById("summaryAr").value = "";
  document.getElementById("contentEn").value = "";
  document.getElementById("contentAr").value = "";
  document.getElementById("category").value = "";
  document.getElementById("image").value = "";
  document.getElementById("tags").value = "";
}

// ------------------ Auto Load Articles if Already Logged In ------------------
auth.onAuthStateChanged(user => {
  if(user) {
    loginSection.style.display = "none";
    dashboard.style.display = "block";
    loadArticles();
  }
});
