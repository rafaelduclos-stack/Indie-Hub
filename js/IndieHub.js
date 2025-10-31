// POPUP DE LOGIN
const loginBtn = document.querySelector('.login-btn');
const body = document.body;

// Criar popup de login
function createLoginPopup() {
    const popup = document.createElement('div');
    popup.className = 'login-popup-overlay';
    popup.innerHTML = `
        <div class="login-popup">
            <button class="close-popup"><i class="fa-solid fa-xmark"></i></button>
            <div class="login-header">
                <h2>Bem-vindo ao Indie Hub</h2>
                <p>Faça login para acessar todo o conteúdo</p>
            </div>
            <form class="login-form" id="loginForm">
                <div class="form-group">
                    <label for="email"><i class="fa-solid fa-envelope"></i> Email</label>
                    <input type="email" id="email" placeholder="seu@email.com" required>
                </div>
                <div class="form-group">
                    <label for="password"><i class="fa-solid fa-lock"></i> Senha</label>
                    <input type="password" id="password" placeholder="••••••••" required>
                </div>
                <div class="form-options">
                    <label class="checkbox-label">
                        <input type="checkbox" id="remember">
                        <span>Lembrar de mim</span>
                    </label>
                    <a href="#" class="forgot-password">Esqueceu a senha?</a>
                </div>
                <button type="submit" class="submit-btn">
                    <i class="fa-solid fa-right-to-bracket"></i> Entrar
                </button>
            </form>
            <div class="login-divider">
                <span>ou continue com</span>
            </div>
            <div class="social-login">
                <button class="social-btn google">
                    <i class="fa-brands fa-google"></i> Google
                </button>
                <button class="social-btn discord">
                    <i class="fa-brands fa-discord"></i> Discord
                </button>
            </div>
            <div class="signup-link">
                Não tem uma conta? <a href="#">Cadastre-se</a>
            </div>
        </div>
    `;
    return popup;
}

// Abrir popup
loginBtn.addEventListener('click', () => {
    const popup = createLoginPopup();
    body.appendChild(popup);
    body.style.overflow = 'hidden';
    
    // Animação de entrada
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
    
    // Fechar popup
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => closePopup(popup));
    
    // Fechar ao clicar fora
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup(popup);
        }
    });
    
    // Submit do formulário
    const form = popup.querySelector('#loginForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = popup.querySelector('#email').value;
        const password = popup.querySelector('#password').value;
        
        // Simulação de login
        console.log('Login:', { email, password });
        alert(`Login realizado com sucesso!\nEmail: ${email}`);
        closePopup(popup);
    });
});

// Função para fechar popup
function closePopup(popup) {
    popup.classList.remove('active');
    setTimeout(() => {
        popup.remove();
        body.style.overflow = '';
    }, 300);
}

// MENU MOBILE
const menuBtn = document.querySelector('.menu-btn');
const mainNav = document.querySelector('.main-nav');

menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// FILTROS DE NOTÍCIAS
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// TABS DE ENTRETENIMENTO
const entLinks = document.querySelectorAll('.ent-link');

entLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        entLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// DROPDOWN
const dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownOpen = false;

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', () => {
        dropdownOpen = !dropdownOpen;
        const icon = dropdownBtn.querySelector('i');
        icon.style.transform = dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });
}

// ANIMAÇÃO DE CURTIDAS
const heartIcons = document.querySelectorAll('.card-actions span:first-child');

heartIcons.forEach(heart => {
    heart.addEventListener('click', function() {
        const icon = this.querySelector('i');
        
        if (icon.classList.contains('fa-solid')) {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            this.style.color = '';
        } else {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            this.style.color = 'var(--color-primary)';
            
            // Animação de pulso
            icon.style.animation = 'heartPulse 0.3s ease';
            setTimeout(() => {
                icon.style.animation = '';
            }, 300);
        }
    });
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ANIMAÇÃO AO SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards de notícias
document.querySelectorAll('.news-card, .news-item, .ent-card, .forum-post').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// BUSCA (simulação)
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Buscando por:', searchTerm);
            alert(`Buscando por: "${searchTerm}"\n(Funcionalidade em desenvolvimento)`);
            searchInput.value = '';
        }
    }
});
