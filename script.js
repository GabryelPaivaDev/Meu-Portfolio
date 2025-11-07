function scrollParaSecao(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const targetPosition = targetElement.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
}

function validarFormulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    if (!nome) {
        alert('Por favor, digite seu nome');
        return;
    }
    
    if (!email) {
        alert('Por favor, digite seu email');
        return;
    }
    
    if (!validarEmail(email)) {
        alert('Por favor, digite um email válido');
        return;
    }
    
    if (!mensagem) {
        alert('Por favor, digite sua mensagem');
        return;
    }
    
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert('Por favor, confirme que você não é um robô!');
        return;
    }
    
    enviarWhatsapp(nome, email, mensagem);
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function enviarWhatsapp(nome, email, mensagem) {
    const telefone = '5579999678249';
    const texto = `Olá, meu nome é ${nome}. Email: ${email}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    window.open(url, '_blank');
    document.getElementById('formulario').reset();
    grecaptcha.reset();
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navegacao');
    if (window.scrollY > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', scrollParaSecao);
    });
    
    document.getElementById('formulario').addEventListener('submit', validarFormulario);
});