// ==========================================
// CONFIGURAÇÃO DO SITE MBWAY - WHITE LABEL
// ==========================================
// Edite apenas este arquivo para personalizar o site para cada cliente

const CONFIG = {
  // Informações do Negócio
  business: {
    name: 'Carolina Marques',           // Ex: "Nails Designer"
    logoFile: 'logo.svg',               // Nome do arquivo do logo (deve estar na mesma pasta)
  },

  // Número MBWay
  mbway: {
    phoneDisplay: '+351 963 709 189',        // Formato visual (com espaços)
    phoneValue: '963709189',            // Número real (sem espaços, será copiado)
  },

  // Cores e Estilo
  theme: {
  // Fundo geral da página em degradê.
    
  'bg-gradient': 'linear-gradient(180deg, #C8B497 0%, #BFA98A 100%)',  // Primeiro valor = topo da página, segundo valor = parte de baixo.
  
  'text-color': '#2F2923',  // Cor do nome principal, exemplo: "CN Beauty Lounge".
  'text-secondary': '#5F5145',  // Cor do subtítulo, exemplo: "Nails & Makeup Artist".
  'text-muted': 'rgba(80, 65, 52, 0.65)',  // Cor de textos pequenos, como rodapé/copyright.
  'link-bg': '#FCFCFA',  // Cor de fundo dos botões principais.
  'link-border': 'rgba(126, 142, 120, 0.22)',  // Cor da borda dos botões principais.
  'link-text': '#6B7966',  // Cor do texto e dos ícones dentro dos botões.
  'link-shadow': '0 4px 16px rgba(80, 65, 52, 0.08)',  // Sombra normal dos botões.
  'link-hover-bg': '#F4F7F1',  // Cor do botão quando passa o rato/clica.
  'link-hover-shadow': '0 8px 24px rgba(62, 78, 58, 0.14)',  // Sombra do botão quando passa o rato/clica.
  'social-bg': 'rgba(252, 252, 250, 0.35)',  // Fundo dos ícones sociais redondos, se estiveres a usar.
  'social-border': 'rgba(252, 252, 250, 0.35)',  // Borda dos ícones sociais redondos.
  'social-text': '#6B7966',   // Cor dos ícones sociais redondos.
  'social-hover-bg': '#FCFCFA', // Fundo dos ícones sociais quando passa o rato/clica.
},

  // Textos Customizáveis
  text: {
    pageTitle: 'Pagamento MBWay',       // Título da aba do navegador
    label: 'Número MBWay',              // Texto acima do número
    buttonText: 'Copiar e Abrir MB WAY', // Texto do botão
    successMessage: '✓ Copiado! A abrir MB WAY...', // Mensagem de sucesso
    errorMessage: 'Erro ao copiar. Seleciona o número manualmente.', // Mensagem de erro

    // Instruções
    step1: 'Clica no botão',
    step2: 'No MB WAY → cola o número',
  },
};
