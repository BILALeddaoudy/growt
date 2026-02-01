// State Management
const state = {
    language: 'en',
    darkMode: false,
    selectedCategory: 'all',
    selectedArticle: null,
    menuOpen: false,
    searchOpen: false
    
};

// Categories Data
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

// Sample Articles Data (Replace with Firebase data)
const articles = [
    {
        id: '1',
        titleEn: 'Breakthrough in Quantum Computing Opens New Possibilities',
        titleAr: 'اختراق في الحوسبة الكمية يفتح إمكانيات جديدة',
        summaryEn: 'Scientists achieve a major milestone in quantum computing that could revolutionize data processing.',
        summaryAr: 'يحقق العلماء إنجازاً كبيراً في الحوسبة الكمية قد يحدث ثورة في معالجة البيانات.',
        contentEn: 'In a groundbreaking achievement, researchers at leading technology institutes have successfully demonstrated a quantum computing system capable of solving complex problems exponentially faster than traditional computers.\n\nThe new quantum processor utilizes 127 qubits, allowing it to perform calculations that would take classical supercomputers thousands of years to complete. This advancement has significant implications for fields ranging from drug discovery to climate modeling.\n\nDr. Sarah Chen, lead researcher on the project, explains: "This represents a quantum leap forward in our computational capabilities. We are now able to simulate molecular interactions with unprecedented accuracy."\n\nThe technology also has profound implications for cybersecurity, as quantum computers could potentially break current encryption methods while simultaneously enabling the creation of virtually unbreakable quantum encryption systems.',
        contentAr: 'في إنجاز رائد، نجح باحثون في معاهد التكنولوجيا الرائدة في إظهار نظام حوسبة كمية قادر على حل المشكلات المعقدة بشكل أسرع بكثير من أجهزة الكمبيوتر التقليدية.\n\nيستخدم المعالج الكمي الجديد 127 كيوبت، مما يسمح له بإجراء حسابات قد تستغرق من الحواسيب الفائقة التقليدية آلاف السنين لإنجازها. لهذا التقدم آثار كبيرة على مجالات تتراوح من اكتشاف الأدوية إلى نمذجة المناخ.\n\nتوضح الدكتورة سارة تشين، الباحثة الرئيسية في المشروع: "هذا يمثل قفزة كمية إلى الأمام في قدراتنا الحسابية. نحن الآن قادرون على محاكاة التفاعلات الجزيئية بدقة غير مسبوقة."\n\nللتكنولوجيا أيضاً آثار عميقة على الأمن السيبراني، حيث يمكن للحواسيب الكمية كسر أساليب التشفير الحالية مع تمكين إنشاء أنظمة تشفير كمية غير قابلة للكسر تقريباً.',
        image: 'https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?w=800',
        author: 'Dr. Ahmed Al-Sayed',
        date: 'Feb 1, 2026',
        readTime: '5 min',
        views: '12.5K',
        category: 'scientific',
        tags: ['quantum', 'technology', 'science', 'innovation']
    },
    {
        id: '2',
        titleEn: 'Ancient Manuscripts Reveal Lost Civilization',
        titleAr: 'مخطوطات قديمة تكشف عن حضارة مفقودة',
        summaryEn: 'Archaeologists discover ancient texts that provide new insights into a previously unknown civilization.',
        summaryAr: 'يكتشف علماء الآثار نصوصاً قديمة توفر رؤى جديدة في حضارة لم تكن معروفة من قبل.',
        contentEn: 'A team of international archaeologists has uncovered a collection of ancient manuscripts in a remote desert region, shedding light on a sophisticated civilization that thrived over 3,000 years ago.\n\nThe texts, written in a previously unknown script, detail advanced astronomical observations, mathematical concepts, and intricate social structures. The discovery challenges our understanding of ancient knowledge and cultural exchange.\n\nProfessor Maria Rodriguez, who led the expedition, states: "These manuscripts demonstrate a level of scientific and cultural sophistication that rivals contemporary civilizations. The astronomical charts are remarkably accurate."\n\nThe findings also include references to trade networks spanning thousands of miles, indicating extensive cultural and economic interactions that historians had not previously documented.',
        contentAr: 'اكتشف فريق من علماء الآثار الدوليين مجموعة من المخطوطات القديمة في منطقة صحراوية نائية، تلقي الضوء على حضارة متطورة ازدهرت منذ أكثر من 3000 عام.\n\nتفصّل النصوص، المكتوبة بخط لم يكن معروفاً من قبل، ملاحظات فلكية متقدمة ومفاهيم رياضية وهياكل اجتماعية معقدة. يتحدى الاكتشاف فهمنا للمعرفة القديمة والتبادل الثقافي.\n\nتقول البروفيسورة ماريا رودريغيز، التي قادت البعثة: "تُظهر هذه المخطوطات مستوى من التطور العلمي والثقافي ينافس الحضارات المعاصرة. الخرائط الفلكية دقيقة بشكل ملحوظ."\n\nتتضمن النتائج أيضاً إشارات إلى شبكات تجارية تمتد لآلاف الأميال، مما يشير إلى تفاعلات ثقافية واقتصادية واسعة لم يوثقها المؤرخون من قبل.',
        image: 'https://images.unsplash.com/photo-1719176372649-5cad35817bc8?w=800',
        author: 'Prof. Layla Hassan',
        date: 'Jan 30, 2026',
        readTime: '7 min',
        views: '18.2K',
        category: 'cultural',
        tags: ['archaeology', 'history', 'culture', 'discovery']
    },
    {
        id: '3',
        titleEn: 'New Music Genre Blends Traditional and Electronic Sounds',
        titleAr: 'نوع موسيقي جديد يمزج الأصوات التقليدية والإلكترونية',
        summaryEn: 'Artists create innovative fusion music that bridges cultural boundaries.',
        summaryAr: 'يبتكر الفنانون موسيقى اندماجية مبتكرة تربط بين الحدود الثقافية.',
        contentEn: 'A new wave of musicians is revolutionizing the global music scene by seamlessly blending traditional folk instruments with cutting-edge electronic production techniques.\n\nThis emerging genre, dubbed "Digital Heritage," has gained massive popularity among diverse audiences. Artists are using traditional instruments like the oud, sitar, and djembe alongside synthesizers.\n\nRenowned producer DJ Karim explains: "We are creating a dialogue between past and present, honoring our cultural roots while embracing modern innovation."\n\nMajor music festivals worldwide have begun featuring Digital Heritage stages, proving that this fusion resonates across cultural divides.',
        contentAr: 'تحدث موجة جديدة من الموسيقيين ثورة في المشهد الموسيقي العالمي من خلال المزج السلس بين الآلات الشعبية التقليدية وتقنيات الإنتاج الإلكتروني المتطورة.\n\nاكتسب هذا النوع الناشئ، الملقب بـ "التراث الرقمي"، شعبية هائلة بين الجماهير المتنوعة. يستخدم الفنانون آلات تقليدية مثل العود والسيتار والجيمبي جنباً إلى جنب مع المركبات الصوتية.\n\nيوضح المنتج الشهير دي جي كريم: "نحن نخلق حواراً بين الماضي والحاضر، ونحترم جذورنا الثقافية بينما نتبنى الابتكار الحديث."\n\nبدأت المهرجانات الموسيقية الكبرى في جميع أنحاء العالم بعرض مراحل التراث الرقمي، مما يثبت أن هذا الاندماج يلقى صدى عبر الحدود الثقافية.',
        image: 'https://images.unsplash.com/photo-1767969457898-51d5e9cf81d2?w=800',
        author: 'Yasmin Fouad',
        date: 'Jan 29, 2026',
        readTime: '4 min',
        views: '25.3K',
        category: 'music',
        tags: ['music', 'culture', 'innovation', 'fusion']
    },
    {
        id: '4',
        titleEn: 'Global Climate Summit Reaches Historic Agreement',
        titleAr: 'قمة المناخ العالمية تتوصل إلى اتفاق تاريخي',
        summaryEn: 'World leaders commit to ambitious carbon reduction targets.',
        summaryAr: 'يلتزم قادة العالم بأهداف طموحة لخفض الكربون.',
        contentEn: 'In a momentous development for global environmental policy, representatives from 195 nations have signed a comprehensive climate agreement that sets binding targets for carbon emissions reduction.\n\nThe accord commits signatory nations to achieving net-zero emissions by 2050. The agreement also establishes a $500 billion fund to support developing nations.\n\nUN Secretary-General António Guterres called it "a turning point in humanity\'s fight against climate change."\n\nThe agreement includes specific provisions for protecting biodiversity and transitioning away from fossil fuels.',
        contentAr: 'في تطور مهم للسياسة البيئية العالمية، وقع ممثلون من 195 دولة على اتفاق مناخي شامل يضع أهدافاً ملزمة لخفض انبعاثات الكربون.\n\nيلزم الاتفاق الدول الموقعة بتحقيق انبعاثات صفرية بحلول عام 2050. كما ينشئ الاتفاق صندوقاً بقيمة 500 مليار دولار لدعم الدول النامية.\n\nوصفه الأمين العام للأمم المتحدة أنطونيو غوتيريش بأنه "نقطة تحول في كفاح الإنسانية ضد تغير المناخ."\n\nيتضمن الاتفاق أحكاماً محددة لحماية التنوع البيولوجي والابتعاد عن الوقود الأحفوري.',
        image: 'https://images.unsplash.com/photo-1562118774-731cd8f2391f?w=800',
        author: 'Omar Ibrahim',
        date: 'Jan 28, 2026',
        readTime: '6 min',
        views: '32.1K',
        category: 'news',
        tags: ['climate', 'environment', 'politics', 'global']
    },
    {
        id: '5',
        titleEn: 'AI-Powered Medical Diagnosis Shows Remarkable Accuracy',
        titleAr: 'التشخيص الطبي المدعوم بالذكاء الاصطناعي يظهر دقة ملحوظة',
        summaryEn: 'New AI system outperforms human doctors in detecting early-stage diseases.',
        summaryAr: 'نظام ذكاء اصطناعي جديد يتفوق على الأطباء البشريين في اكتشاف الأمراض المبكرة.',
        contentEn: 'A revolutionary AI diagnostic system has demonstrated the ability to detect early-stage diseases with accuracy rates exceeding 95%.\n\nThe system can identify subtle patterns invisible to the human eye. In clinical trials, it successfully detected various cancers and cardiovascular conditions months before conventional methods.\n\nDr. Jennifer Lee emphasizes: "This technology enhances doctors\' capabilities, acting as a powerful second opinion."\n\nHospitals in several countries have begun integrating the system into their workflows.',
        contentAr: 'أظهر نظام تشخيصي ثوري بالذكاء الاصطناعي القدرة على اكتشاف الأمراض في مراحلها المبكرة بمعدلات دقة تتجاوز 95٪.\n\nيمكن للنظام تحديد أنماط دقيقة غير مرئية للعين البشرية. في التجارب السريرية، نجح في اكتشاف أنواع مختلفة من السرطانات قبل الطرق التقليدية بأشهر.\n\nتؤكد الدكتورة جينيفر لي: "هذه التكنولوجيا تعزز قدرات الأطباء، تعمل كرأي ثانٍ قوي."\n\nبدأت المستشفيات في عدة دول بدمج النظام في سير عملها.',
        image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?w=800',
        author: 'Dr. Fatima Al-Rashid',
        date: 'Jan 27, 2026',
        readTime: '5 min',
        views: '21.7K',
        category: 'technology',
        tags: ['AI', 'healthcare', 'innovation', 'medicine']
    }
];

// DOM Elements
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

// Initialize
function init() {
    renderCategories();
    renderContent();
    setupEventListeners();
    updateLanguage();
    
    // Load saved preferences
    const savedLang = localStorage.getItem('language');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedLang) {
        state.language = savedLang;
        updateLanguage();
    }
    
    if (savedDarkMode === 'true') {
        state.darkMode = true;
        document.body.classList.add('dark');
        updateDarkModeIcon();
    }
}

// Event Listeners
function setupEventListeners() {
    menuBtn.addEventListener('click', toggleMenu);
    menuCloseBtn.addEventListener('click', toggleMenu);
    menuBackdrop.addEventListener('click', toggleMenu);
    searchBtn.addEventListener('click', toggleSearch);
    searchCloseBtn.addEventListener('click', toggleSearch);
    langBtn.addEventListener('click', toggleLanguage);
    darkModeBtn.addEventListener('click', toggleDarkMode);
}

// Toggle Functions
function toggleMenu() {
    state.menuOpen = !state.menuOpen;
    sideMenu.classList.toggle('active');
}

function toggleSearch() {
    state.searchOpen = !state.searchOpen;
    searchBar.classList.toggle('hidden');
    if (state.searchOpen) {
        document.getElementById('searchInput').focus();
    }
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

function updateLanguage() {
    const html = document.documentElement;
    html.setAttribute('lang', state.language);
    html.setAttribute('dir', state.language === 'ar' ? 'rtl' : 'ltr');
    
    // Update UI text
    document.getElementById('logoText').textContent = 
        state.language === 'ar' ? 'موقع الأخبار' : 'News Portal';
    
    document.getElementById('searchInput').placeholder = 
        state.language === 'ar' ? 'ابحث عن مقال...' : 'Search for an article...';
    
    document.getElementById('menuTitle').textContent = 
        state.language === 'ar' ? 'الأقسام' : 'Categories';
    
    document.getElementById('footerLinksTitle').textContent = 
        state.language === 'ar' ? 'روابط سريعة' : 'Quick Links';
    
    document.getElementById('footerNewsletterTitle').textContent = 
        state.language === 'ar' ? 'اشترك في النشرة الإخبارية' : 'Subscribe to Newsletter';
    
    document.getElementById('newsletterEmail').placeholder = 
        state.language === 'ar' ? 'البريد الإلكتروني' : 'Email address';
    
    document.getElementById('subscribeBtnText').textContent = 
        state.language === 'ar' ? 'اشترك' : 'Subscribe';
    
    document.getElementById('footerSocialTitle').textContent = 
        state.language === 'ar' ? 'تابعنا' : 'Follow Us';
    
    document.getElementById('copyrightText').textContent = 
        `© 2026 ${state.language === 'ar' ? 'موقع الأخبار' : 'News Portal'}. ${state.language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.`;
    
    // Update footer links
    renderFooterLinks();
}

// Render Functions
function renderCategories() {
    categoryNav.innerHTML = categories.map(cat => `
        <button 
            class="category-btn ${state.selectedCategory === cat.id ? 'active' : ''}"
            onclick="selectCategory('${cat.id}')"
        >
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
    if (state.selectedArticle) {
        renderArticlePage();
    } else if (state.selectedCategory === 'all') {
        renderHomePage();
    } else {
        renderCategoryPage();
    }
    
    lucide.createIcons();
}

function renderHomePage() {
    const featuredArticle = articles[0];
    const scientificArticles = articles.filter(a => a.category === 'scientific');
    const culturalArticles = articles.filter(a => a.category === 'cultural');
    const musicArticles = articles.filter(a => a.category === 'music');
    const newsArticles = articles.filter(a => a.category === 'news');
    const trendingArticles = [...articles].sort((a, b) => 
        parseFloat(b.views) - parseFloat(a.views)
    ).slice(0, 5);
    
    mainContent.innerHTML = `
        <div class="container">
            <!-- Featured Article -->
            ${renderFeaturedArticle(featuredArticle)}
            
            <!-- Category Sections -->
            ${renderCategorySection('🔬 ' + (state.language === 'ar' ? 'علمي' : 'Scientific'), scientificArticles)}
            ${renderCategorySection('🎭 ' + (state.language === 'ar' ? 'ثقافي' : 'Cultural'), culturalArticles)}
            ${renderCategorySection('🎵 ' + (state.language === 'ar' ? 'موسيقى / ترفيه' : 'Music / Entertainment'), musicArticles)}
            ${renderCategorySection('📰 ' + (state.language === 'ar' ? 'أخبار' : 'News'), newsArticles)}
            
            <!-- Trending Section -->
            <div class="category-section">
                <div class="section-header">
                    <h2 class="section-title">
                        <i data-lucide="trending-up"></i>
                        ${state.language === 'ar' ? 'الأكثر قراءة' : 'Trending / Most Read'}
                    </h2>
                </div>
                ${trendingArticles.map(article => renderRegularArticle(article)).join('')}
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
                <h2 class="section-title">
                    ${state.language === 'ar' ? categoryName.nameAr : categoryName.nameEn}
                </h2>
                <p style="color: var(--muted-foreground);">
                    ${filteredArticles.length} ${state.language === 'ar' ? 'مقال' : 'articles'}
                </p>
            </div>
            
            ${filteredArticles.map(article => renderRegularArticle(article)).join('')}
        </div>
    `;
}

function renderArticlePage() {
    const article = state.selectedArticle;
    const relatedArticles = articles.filter(a => 
        a.id !== article.id && a.category === article.category
    ).slice(0, 3);
    
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
                <span style="color: var(--foreground);">${article.author}</span>
                <span>${article.date}</span>
                <span class="meta-item">
                    <i data-lucide="clock"></i>
                    ${article.readTime}
                </span>
                <span class="meta-item">
                    <i data-lucide="eye"></i>
                    ${article.views}
                </span>
            </div>
            
            <img src="${article.image}" alt="${title}" class="article-full-image" />
            
            <div class="article-full-content">
                ${content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
            
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            
            <div class="share-section">
                <h3>
                    <i data-lucide="share-2"></i>
                    ${state.language === 'ar' ? 'مشاركة المقال' : 'Share Article'}
                </h3>
                <div class="share-buttons">
                    <button class="share-btn share-btn-facebook">
                        <i data-lucide="facebook"></i>
                        <span>Facebook</span>
                    </button>
                    <button class="share-btn share-btn-twitter">
                        <i data-lucide="twitter"></i>
                        <span>Twitter</span>
                    </button>
                    <button class="share-btn share-btn-whatsapp">
                        <i data-lucide="message-circle"></i>
                        <span>WhatsApp</span>
                    </button>
                </div>
            </div>
            
            ${relatedArticles.length > 0 ? `
                <div class="related-articles">
                    <h2>${state.language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}</h2>
                    <div class="related-list">
                        ${relatedArticles.map(a => renderRegularArticle(a)).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function renderFeaturedArticle(article) {
    const title = state.language === 'ar' ? article.titleAr : article.titleEn;
    const summary = state.language === 'ar' ? article.summaryAr : article.summaryEn;
    
    return `
        <div class="article-card article-card-featured" onclick="selectArticle('${article.id}')">
            <img src="${article.image}" alt="${title}" class="article-image-featured" />
            <div class="article-overlay">
                <span class="featured-badge">
                    ${state.language === 'ar' ? 'مميز' : 'Featured'}
                </span>
                <h2 class="article-title">${title}</h2>
                <p class="article-summary">${summary}</p>
                <div class="article-meta">
                    <span>${article.author}</span>
                    <span class="meta-item">
                        <i data-lucide="clock"></i>
                        ${article.readTime}
                    </span>
                    <span class="meta-item">
                        <i data-lucide="eye"></i>
                        ${article.views}
                    </span>
                </div>
            </div>
        </div>
    `;
}

function renderRegularArticle(article) {
    const title = state.language === 'ar' ? article.titleAr : article.titleEn;
    const summary = state.language === 'ar' ? article.summaryAr : article.summaryEn;
    
    return `
        <div class="article-card article-card-regular" onclick="selectArticle('${article.id}')">
            <img src="${article.image}" alt="${title}" class="article-image-regular" />
            <div class="article-content">
                <h3>${title}</h3>
                <p>${summary}</p>
                <div class="article-meta-small">
                    <span class="meta-item">
                        <i data-lucide="clock"></i>
                        ${article.readTime}
                    </span>
                    <span class="meta-item">
                        <i data-lucide="eye"></i>
                        ${article.views}
                    </span>
                </div>
            </div>
        </div>
    `;
}

function renderCategorySection(title, articles) {
    if (articles.length === 0) return '';
    
    return `
        <div class="category-section">
            <div class="section-header">
                <h2 class="section-title">${title}</h2>
                <button class="view-all-btn">
                    <span>${state.language === 'ar' ? 'عرض الكل' : 'View All'}</span>
                    <i data-lucide="${state.language === 'ar' ? 'chevron-left' : 'chevron-right'}"></i>
                </button>
            </div>
            
            <div class="horizontal-scroll">
                <div class="horizontal-cards">
                    ${articles.slice(0, 4).map(article => {
                        const title = state.language === 'ar' ? article.titleAr : article.titleEn;
                        const summary = state.language === 'ar' ? article.summaryAr : article.summaryEn;
                        
                        return `
                            <div class="horizontal-card">
                                <div class="horizontal-card-inner" onclick="selectArticle('${article.id}')">
                                    <img src="${article.image}" alt="${title}" class="horizontal-card-image" />
                                    <div class="horizontal-card-content">
                                        <h3>${title}</h3>
                                        <p>${summary}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

// Firebase Integration Functions (To be implemented)
// async function loadArticlesFromFirebase() {
//     if (!window.firebaseDb) return;
//     
//     try {
//         const articlesCol = collection(window.firebaseDb, 'articles');
//         const articlesSnapshot = await getDocs(articlesCol);
//         const firebaseArticles = articlesSnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }));
//         
//         // Merge or replace with Firebase articles
//         articles.push(...firebaseArticles);
//         renderContent();
//     } catch (error) {
//         console.error('Error loading articles from Firebase:', error);
//     }
// }

// Initialize the app
init();
