// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA4OTXTp_2tUZ05J0MfmHbANfbvxy4HHzY",
    authDomain: "growt-4aaa0.firebaseapp.com",
    projectId: "growt-4aaa0",
    storageBucket: "growt-4aaa0.firebasestorage.app",
    messagingSenderId: "901425665708",
    appId: "1:901425665708:web:00d1c535c806078b77f109",
    measurementId: "G-7PX5RE80YD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// DOM
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginError = document.getElementById('loginError');
const articlesContainer = document.getElementById('articlesContainer');

const addArticleBtn = document.getElementById('addArticleBtn');
const articleFormModal = document.getElementById('articleFormModal');
const cancelArticleBtn = document.getElementById('cancelArticleBtn');
const saveArticleBtn = document.getElementById('saveArticleBtn');
const formMsg = document.getElementById('formMsg');

// Login
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      loginPage.classList.add('hidden');
      dashboardPage.classList.remove('hidden');
      loadArticles();
    })
    .catch(err => loginError.textContent = err.message);
});

// Logout
logoutBtn.addEventListener('click', () => {
  auth.signOut().then(() => {
    dashboardPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
  });
});

// Article Form
addArticleBtn.addEventListener('click', () => {
  articleFormModal.classList.remove('hidden');
  formMsg.textContent = '';
});

cancelArticleBtn.addEventListener('click', () => {
  articleFormModal.classList.add('hidden');
});

// Save Article
saveArticleBtn.addEventListener('click', async () => {
  const articleData = {
    titleEn: document.getElementById('titleEn').value,
    titleAr: document.getElementById('titleAr').value,
    summaryEn: document.getElementById('summaryEn').value,
    summaryAr: document.getElementById('summaryAr').value,
    contentEn: document.getElementById('contentEn').value,
    contentAr: document.getElementById('contentAr').value,
    image: document.getElementById('imageUrl').value,
    author: document.getElementById('author').value,
    category: document.getElementById('category').value,
    tags: document.getElementById('tags').value.split(',').map(t => t.trim()),
    date: new Date().toLocaleDateString(),
    readTime: '5 min',
    views: '0'
  };

  try {
    await db.collection('articles').add(articleData);
    formMsg.style.color = 'green';
    formMsg.textContent = 'Article added successfully!';
    articleFormModal.classList.add('hidden');
    loadArticles();
  } catch (error) {
    formMsg.style.color = 'red';
    formMsg.textContent = error.message;
  }
});

// Load Articles
async function loadArticles() {
  articlesContainer.innerHTML = '';
  try {
    const snapshot = await db.collection('articles').get();
    snapshot.forEach(doc => {
      const a = doc.data();
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${a.image || ''}" alt="${a.titleEn}">
        <h3>${a.titleEn}</h3>
        <p>${a.summaryEn}</p>
        <small>${a.author} - ${a.date}</small>
      `;
      articlesContainer.appendChild(card);
    });
  } catch (err) {
    articlesContainer.innerHTML = `<p class="error-msg">${err.message}</p>`;
  }
}


