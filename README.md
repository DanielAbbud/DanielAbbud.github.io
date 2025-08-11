# Site Zaappyy Tv - Documentação

## Visão Geral
Site profissional para vendas de serviços de Zaappyy TV com integração direta ao WhatsApp para facilitar o processo de assinatura.

## Características do Site

### ✨ Funcionalidades
- **Design Moderno**: Interface atrativa com gradientes e animações
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Integração WhatsApp**: Botões que direcionam automaticamente para o WhatsApp
- **2 Planos**: Básico (R$ 24,99), Premium (R$ 34,99)
- **FAQ Interativo**: Seção de perguntas frequentes com accordion
- **Animações**: Efeitos visuais suaves com AOS (Animate On Scroll)

### 🎨 Design
- **Paleta de Cores**: Azul escuro, roxo, gradientes coloridos
- **Tipografia**: Inter (Google Fonts)
- **Ícones**: Font Awesome
- **Layout**: Grid responsivo com Bootstrap-like styling

## Estrutura de Arquivos

```
site_iptv/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── script.js       # JavaScript e integração WhatsApp
├── design/
│   ├── *.png           # Mockups e referências visuais
│   └── design_guide.md # Guia de design
└── README.md           # Esta documentação
```

## Como Usar

### 1. Configuração do WhatsApp
Edite o arquivo `js/script.js` e altere o número de telefone:

```javascript
const phoneNumber = '553897290904'; // Numero de telefone 
```

**Formato do número**: 
- País (55) + DDD + Número
- Exemplo: 5511987654321 para (11) 98765-4321

## Mensagens WhatsApp Personalizadas

O site gera mensagens automáticas para cada plano:

### Plano Básico
> "Olá! Tenho interesse no *Plano Básico* de Zaapppyy TV por R$ 24,99/mês. Gostaria de mais informações sobre como assinar."

### Plano Premium  
> "Olá! Tenho interesse no *Plano Premium* de Zaapppyy TV  por R$ 34,99/mês. Gostaria de mais informações sobre como assinar."

## Suporte
- Para dúvidas ou customizações adicionais, consulte: DanielAbbud/Quintela 
- Documentação HTML/CSS/JavaScript
- Guia do Font Awesome para ícones
- Documentação do AOS para animações

## CREDITOS 
Desenvolvido por Daniel Quintela!

