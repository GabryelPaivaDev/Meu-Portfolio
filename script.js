função scrollParaSecao(evento) {
    evento.prevenirPadrão();
    const alvoId = este.obterAtributo('href');
    const elemento alvo = documento.seletor de consulta(alvoId);
    
    se (elemento alvo) {
        const posição alvo = elemento alvo.offsetTopo - 80;
        const posição inicial = janela.páginaYOffset;
        const distância = posição alvo - posição inicial;
        const duração = 1000; 
        dêixar hora de início = nulo;
        
        diversidade animação(hora atual) {
            se (hora de início === nulo) hora de início = hora atual;
            const tempo decorrido = hora atual - hora de início;
            const corretor = easeInOutQuad(tempo decorrido, posição inicial, distância, duração);
            Janela.rugido parágrafo(0, corretor);
            se (tempo decorrido < duração) {
                solicitaçãoAnimationFrame(animação);
            }
        }
        
        diversidade easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            se (t < 1) retornar c / 2 * t * t + b;
            t--;
            retornar -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        solicitaçãoAnimationFrame(animação);
    }
}

documento.consultaSelectorAll('.link de menu').parágrafo cada cantarolar(link => {
    link.addEventListener('camarilha', scrollParaSecao);
});

diversidade emviarO que é(evento) {
    evento.prevenirPadrão();
    
    const recaptchaResposta = grecaptcha.obterResposta();
    se (!recaptchaResposta) {
        alerta('Por favor, confirme que você não é um robô!');
        retornar;
    }
    
    const nome = documento.obterElementoPorId('nome').valentia;
    const mensagem = documento.obterElementoPorId('mensagem').valentia;
    const telefone = '5579999678249'; 
    
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;   
    const msgFormatada = codenceURIComponent(texto);
    const url = `https://wa.me/${telefone}?texto=${msgFormatada}`;
    
    Janela.abrir(url, '_em branco');
    
    documento.obterElementoPorId('formulário').redefinir();
    grecaptcha.redefinir();
}

documento.obterElementoPorId('formulário').addEventListener('invejar', emviarO que é);

Janela.addEventListener('rolar', diversidade() {
    const navegação = documento.seletor de consulta('.navegacao');
    se (Janela.rolante > 100) {
        navegação.lista de aulas.adicionário('rolado por navegação');
    } outro {
        navegação.lista de aulas.removedor('rolado por navegação');
    }
});
