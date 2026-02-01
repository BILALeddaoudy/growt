// =======================
// State Management
// =======================
const state = {
    language: 'en',
    darkMode: false,
    selectedCategory: 'all',
    selectedArticle: null,
    menuOpen: false,
    searchOpen: false
};

// =======================
// Categories Data
// =======================
const categories = [
    { id: 'all', nameEn: 'All Articles', nameAr: 'كل المقالات', icon: 'newspaper' },
    { id: 'scientific', nameEn: 'Scientific', nameAr: 'علمي', icon: 'microscope' },
    { id: 'cultural', nameEn: 'Cultural', nameAr: 'ثقافي', icon: 'graduation-cap' },
    { id: 'music', nameEn: 'Music / Entertainment', nameAr: 'موسيقى / ترفيه', icon: 'music' },
    { id: 'news', nameEn: 'News / Journalistic', nameAr: 'أخبار / صحافة', icon: 'newspaper' },
    { id: 'opinion', nameEn: 'Opinion / Editorial', nameAr: 'رأي / مقالات', icon: 'trending-up' },
    { id: 'lifestyle', nameEn: 'Lifestyle / Health', nameAr: 'نمط الحياة / صحة', icon: 'heart' },
    { id: 'educational', nameEn: 'Educational / Academic', nameAr: 'تعليمي / أكاديمي', icon: 'graduation-cap' },
    { id: 'travel', nameEn: 'Travel', nameAr: 'سفر', icon: 'plane' },
    { id: 'technology', nameEn: 'Technology / Science & Tech', nameAr: 'تكنولوجيا / علوم وتقنية', icon: 'laptop' },
    { id: 'sports', nameEn: 'Sports', nameAr: 'رياضة', icon: 'trophy' },
    { id: 'fashion', nameEn: 'Fashion', nameAr: 'أزياء', icon: 'shirt' },
    { id: 'business', nameEn: 'Business / Finance', nameAr: 'أعمال / مال', icon: 'dollar-sign' },
    { id: 'history', nameEn: 'History', nameAr: 'تاريخ', icon: 'clock' },
    { id: 'food', nameEn: 'Food / Culinary', nameAr: 'طعام / طهي', icon: 'utensils-crossed' }
];

// =======================
// DOM Elements
// =======================
const menuBtn = document.getElementById('menuBtn');
const searchBtn = document.getElementById('searchBtn');
const langBtn = document.getElementById('langBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const searchCloseBtn = document.getElementById('searchCloseBtn');
const menuBackdrop = document.getElementById('menuBackdrop');
const sideMenu = document.getElementById('sideMenu');
const searchBar = document.getElementById('searchBar');
const mainContent = document.getElementById('mainContent');
const categoryNav = document.getElementById('categoryNav');

// =======================
// Articles Array (Will load from Firebase)
// =======================
let articles = [];

// =======================
// Initialize App
// =======================
function init() {
    renderCategories();
    setupEventListeners();
    updateLanguage();

    // Load saved preferences
    const savedLang = localStorage.getItem('language');
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedLang) { state.language = savedLang; updateLanguage(); }
    if (savedDarkMode === 'true') { state.darkMode = true; document.body.classList.add('dark'); updateDarkModeIcon(); }

    // Load articles from Firebase
    loadArticlesFromFirebase();
}

// =======================
// Event Listeners
// =======================
function setupEventListeners() {
    menuBtn.addEventListener('click', toggleMenu);
    menuCloseBtn.addEventListener('click', toggleMenu);
    menuBackdrop.addEventListener('click', toggleMenu);
    searchBtn.addEventListener('click', toggleSearch);
    searchCloseBtn.addEventListener('click', toggleSearch);
    langBtn.addEventListener('click', toggleLanguage);
    darkModeBtn.addEventListener('click', toggleDarkMode);
}

// =======================
// Toggle Functions
// =======================
function toggleMenu() {
    state.menuOpen = !state.menuOpen;
    sideMenu.classList.toggle('active');
}

function toggleSearch() {
    state.searchOpen = !state.searchOpen;
    searchBar.classList.toggle('hidden');
    if (state.searchOpen) document.getElementById('searchInput').focus();
}

function toggleLanguage() {
    state.language = state.language === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', state.language);
    updateLanguage();
    renderCategories();
    renderContent();
}

function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', state.darkMode);
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const icon = darkModeBtn.querySelector('i');
    icon.setAttribute('data-lucide', state.darkMode ? 'sun' : 'moon');
    lucide.createIcons();
}

// =======================
// Language & UI Updates
// =======================
function updateLanguage() {
    const html = document.documentElement;
    html.setAttribute('lang', state.language);
    html.setAttribute('dir', state.language === 'ar' ? 'rtl' : 'ltr');

    document.getElementById('logoText').textContent = state.language === 'ar' ? 'موقع الأخبار' : 'News Portal';
    document.getElementById('searchInput').placeholder = state.language === 'ar' ? 'ابحث عن مقال...' : 'Search for an article...';
    document.getElementById('menuTitle').textContent = state.language === 'ar' ? 'الأقسام' : 'Categories';
    document.getElementById('footerLinksTitle').textContent = state.language === 'ar' ? 'روابط سريعة' : 'Quick Links';
    document.getElementById('footerNewsletterTitle').textContent = state.language === 'ar' ? 'اشترك في النشرة الإخبارية' : 'Subscribe to Newsletter';
    document.getElementById('newsletterEmail').placeholder = state.language === 'ar' ? 'البريد الإلكتروني' : 'Email address';
    document.getElementById('subscribeBtnText').textContent = state.language === 'ar' ? 'اشترك' : 'Subscribe';
    document.getElementById('footerSocialTitle').textContent = state.language === 'ar' ? 'تابعنا' : 'Follow Us';
    document.getElementById('copyrightText').textContent =
        `© 2026 ${state.language === 'ar' ? 'موقع الأخبار' : 'News Portal'}. ${state.language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.`;

    renderFooterLinks();
}

// =======================
// Rendering Functions
// =======================
function renderCategories() {
    categoryNav.innerHTML = categories.map(cat => `
        <button class="category-btn ${state.selectedCategory === cat.id ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
            <i data-lucide="${cat.icon}"></i>
            <span>${state.language === 'ar' ? cat.nameAr : cat.nameEn}</span>
        </button>
    `).join('');
    lucide.createIcons();
}

function renderFooterLinks() {
    const footerCategories = categories.slice(1, 7);
    document.getElementById('footerLinks').innerHTML = footerCategories.map(cat => `
        <a class="footer-link" onclick="selectCategory('${cat.id}')">
            ${state.language === 'ar' ? cat.nameAr : cat.nameEn}
        </a>
    `).join('');
}

function selectCategory(categoryId) {
    state.selectedCategory = categoryId;
    state.selectedArticle = null;
    state.menuOpen = false;
    sideMenu.classList.remove('active');
    renderCategories();
    renderContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectArticle(articleId) {
    state.selectedArticle = articles.find(a => a.id === articleId);
    renderContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToHome() {
    state.selectedArticle = null;
    renderContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderContent() {
    if (!articles || articles.length === 0) {
        mainContent.innerHTML = `<p style="color:var(--foreground); text-align:center; margin-top:2rem;">${state.language === 'ar' ? 'جارٍ تحميل المقالات...' : 'Loading articles...'}</p>`;
        return;
    }

    if (state.selectedArticle) renderArticlePage();
    else if (state.selectedCategory === 'all') renderHomePage();
    else renderCategoryPage();

    lucide.createIcons();
}

// =======================
// Home / Category / Article Pages
// =======================
function renderHomePage() {
    const featuredArticle = articles[0];
    const sections = ['scientific','cultural','music','news'].map(cat => ({
        title: categories.find(c => c.id === cat),
        articles: articles.filter(a => a.category === cat)
    }));

    const trendingArticles = [...articles].sort((a,b) => parseFloat(b.views) - parseFloat(a.views)).slice(0,5);

    mainContent.innerHTML = `
        <div class="container">
            ${renderFeaturedArticle(featuredArticle)}
            ${sections.map(s => renderCategorySection(
                (s.title.icon ? s.title.icon + ' ' : '') + (state.language === 'ar' ? s.title.nameAr : s.title.nameEn),
                s.articles
            )).join('')}
            <div class="category-section">
                <div class="section-header">
                    <h2 class="section-title"><i data-lucide="trending-up"></i> ${state.language === 'ar' ? 'الأكثر قراءة' : 'Trending / Most Read'}</h2>
                </div>
                ${trendingArticles.map(a => renderRegularArticle(a)).join('')}
            </div>
        </div>
    `;
}

function renderCategoryPage() {
    const filteredArticles = articles.filter(a => a.category === state.selectedCategory);
    const categoryName = categories.find(c => c.id === state.selectedCategory);

    mainContent.innerHTML = `
        <div class="container">
            <div style="margin-bottom: 1.5rem;">
                <h2 class="section-title">${state.language === 'ar' ? categoryName.nameAr : categoryName.nameEn}</h2>
                <p style="color: var(--muted-foreground);">${filteredArticles.length} ${state.language === 'ar' ? 'مقال' : 'articles'}</p>
            </div>
            ${filteredArticles.map(a => renderRegularArticle(a)).join('')}
        </div>
    `;
}

function renderArticlePage() {
    const article = state.selectedArticle;
    const relatedArticles = articles.filter(a => a.id !== article.id && a.category === article.category).slice(0,3);
    const title = state.language === 'ar' ? article.titleAr : article.titleEn;
    const content = state.language === 'ar' ? article.contentAr : article.contentEn;

    mainContent.innerHTML = `
        <div class="article-page">
            <button class="back-btn" onclick="backToHome()">
                <i data-lucide="${state.language === 'ar' ? 'arrow-right' : 'arrow-left'}"></i>
                <span>${state.language === 'ar' ? 'رجوع' : 'Back'}</span>
            </button>
            <h1 class="article-full-title">${title}</h1>
            <div class="article-full-meta">
                <span>${article.author}</span>
                <span>${article.date}</span>
                <span class="meta-item"><i data-lucide="clock"></i>${article.readTime}</span>
                <span class="meta-item"><i data-lucide="eye"></i>${article.views}</span>
            </div>
            <img src="${article.image}" alt="${title}" class="article-full-image" />
            <div class="article-full-content">${content.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
            <div class="article-tags">${article.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}</div>
            <div class="share-section">
                <h3><i data-lucide="share-2"></i> ${state.language === 'ar' ? 'مشاركة المقال' : 'Share Article'}</h3>
                <div class="share-buttons">
                    <button class="share-btn share-btn-facebook"><i data-lucide="facebook"></i><span>Facebook</span></button>
                    <button class="share-btn share-btn-twitter"><i data-lucide="twitter"></i><span>Twitter</span></button>
                    <button class="share-btn share-btn-whatsapp"><i data-lucide="message-circle"></i><span>WhatsApp</span></button>
                </div>
            </div>
            ${relatedArticles.length > 0 ? `<div class="related-articles">
                <h2>${state.language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}</h2>
                <div class="related-list">${relatedArticles.map(a => renderRegularArticle(a)).join('')}</div>
            </div>` : ''}
        </div>
    `;
}

// =======================
// Article Cards
// =======================
function renderFeaturedArticle(article) {
    const title = state.language === 'ar' ? article.titleAr : article.titleEn;
    const summary = state.language === 'ar' ? article.summaryAr : article.summaryEn;
    return `<div class="article-card article-card-featured" onclick="selectArticle('${article.id}')">
        <img src="${article.image}" alt="${title}" class="article-image-featured" />
        <div class="article-overlay">
            <span class="featured-badge">${state.language === 'ar' ? 'مميز' : 'Featured'}</span>
            <h2 class="article-title">${title}</h2>
            <p class="article-summary">${summary}</p>
            <div class="article-meta">
                <span>${article.author}</span>
                <span class="meta-item"><i data-lucide="clock"></i>${article.readTime}</span>
                <span class="meta-item"><i data-lucide="eye"></i>${article.views}</span>
            </div>
        </div>
    </div>`;
}

function renderRegularArticle(article) {
    const title = state.language === 'ar' ? article.titleAr : article.titleEn;
    const summary = state.language === 'ar' ? article.summaryAr : article.summaryEn;
    return `<div class="article-card article-card-regular" onclick="selectArticle('${article.id}')">
        <img src="${article.image}" alt="${title}" class="article-image-regular" />
        <div class="article-content">
            <h3>${title}</h3>
            <p>${summary}</p>
            <div class="article-meta-small">
                <span class="meta-item"><i data-lucide="clock"></i>${article.readTime}</span>
                <span class="meta-item"><i data-lucide="eye"></i>${article.views}</span>
            </div>
        </div>
    </div>`;
}

function renderCategorySection(title, articlesList) {
    if (articlesList.length === 0) return '';
    return `<div class="category-section">
        <div class="section-header">
            <h2 class="section-title">${title}</h2>
            <button class="view-all-btn"><span>${state.language === 'ar' ? 'عرض الكل' : 'View All'}</span><i data-lucide="${state.language === 'ar' ? 'chevron-left' : 'chevron-right'}"></i></button>
        </div>
        <div class="horizontal-scroll">
            <div class="horizontal-cards">${articlesList.slice(0,4).map(a => {
                const title = state.language === 'ar' ? a.titleAr : a.titleEn;
                const summary = state.language === 'ar' ? a.summaryAr : a.summaryEn;
                return `<div class="horizontal-card"><div class="horizontal-card-inner" onclick="selectArticle('${a.id}')">
                    <img src="${a.image}" alt="${title}" class="horizontal-card-image" />
                    <div class="horizontal-card-content"><h3>${title}</h3><p>${summary}</p></div>
                </div></div>`;
            }).join('')}</div>
        </div>
    </div>`;
}

// =======================
// Firebase Loader
// =======================
async function loadArticlesFromFirebase() {
    if (!window.firebaseDb) return;
    try {
        const articlesCol = collection(window.firebaseDb, 'articles');
        const articlesSnapshot = await getDocs(articlesCol);
        articles = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        renderContent();
    } catch (error) {
        console.error('Error loading articles from Firebase:', error);
        mainContent.innerHTML = `<p style="color:red;">${state.language === 'ar' ? 'فشل في تحميل المقالات' : 'Failed to load articles'}</p>`;
    }
}

// =======================
// Start App
// =======================
init();
