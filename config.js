// ==========================================
// CONFIGURAÇÃO DO SITE MB WAY - CN BEAUTY LOUNGE
// Repositório: CNails
// ==========================================
// Esta página utiliza a index base da PolyLAB 3D.

const CONFIG = {
  // Informações do negócio
  business: {
    name: 'Carolina Marques',
    logoFile: 'logo.svg',
  },

  // Número MB WAY
  mbway: {
    phoneDisplay: '+351 963 709 189',
    phoneValue: '963709189',
  },

  // Tema visual inspirado na identidade castanha e bege da CN Beauty Lounge
  theme: {
    // Fundo geral da página em degradê bege
    'background-color':
      'linear-gradient(180deg, #CDB89B 0%, #BFA486 100%)',

    // Fundo do card
    'card-background': '#FFFDF9',

    // Sombra do card
    'card-shadow': '0 14px 40px rgba(91, 67, 50, 0.18)',

    // Cor principal do número MB WAY
    'text-color': '#3F3027',

    // Cor do texto "Número MB WAY"
    'text-secondary': '#806653',

    // Cor das instruções e rodapé
    'text-muted': 'rgba(84, 65, 52, 0.72)',

    // Cor da linha divisória
    'divider-color': 'rgba(112, 83, 62, 0.16)',

    // Fundo castanho dos botões
    'link-bg': '#7A6252',

    // Cor mais escura ao clicar ou passar o rato
    'link-hover-bg': '#604C40',

    // Texto e ícones dos botões
    'link-text': '#FFFFFF',
  },

  // Textos da página
  text: {
    pageTitle: 'Pagamento MB WAY',

    label: 'Número MB WAY',

    buttonText: 'Copiar número',

    openButtonText: 'Abrir MB WAY agora',

    successMessage:
      '✓ Número copiado! Agora toque em "Abrir MB WAY agora".',

    errorMessage:
      'Erro ao copiar. Seleciona o número manualmente.',

    step1: 'Clica no botão para copiar o número',

    step2: 'No MB WAY, cola o número',
  },

  // Rodapé
  footer: {
    text: '© 2026 PolyLAB 3D - Todos os direitos reservados',
  },
};
