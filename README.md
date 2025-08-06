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

### 2. Personalização de Conteúdo

#### Alterar Informações de Contato
No arquivo `index.html`, procure por:
- `(38) 9729-0904` - Substitua pelo seu número
- `cauaneres2@gmail.com` - Substitua pelo seu email

#### Modificar Planos e Preços
Localize as seções dos planos no `index.html` e ajuste:
- Preços
- Quantidade de canais
- Recursos incluídos
- Descrições

### 3. Hospedagem

#### Opção 1: Servidor Local (Teste)
```bash
cd site_iptv
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

#### Opção 2: Hospedagem Online
- **Netlify**: Arraste a pasta para netlify.com
- **Vercel**: Conecte com GitHub e faça deploy
- **GitHub Pages**: Suba para repositório e ative Pages

## Mensagens WhatsApp Personalizadas

O site gera mensagens automáticas para cada plano:

### Plano Básico
> "Olá! Tenho interesse no *Plano Básico* de Zaapppyy TV por R$ 19,90/mês. Gostaria de mais informações sobre como assinar."

### Plano Premium  
> "Olá! Tenho interesse no *Plano Premium* de Zaapppyy TV  por R$ 29,90/mês. Gostaria de mais informações sobre como assinar."

## Customizações Avançadas

### Alterar Cores
No arquivo `css/style.css`, modifique as variáveis de cor:

```css
/* Cores principais */
--primary-blue: #3b82f6;
--primary-purple: #8b5cf6;
--whatsapp-green: #25d366;
```

### Adicionar Mais Planos
1. Copie um card de plano para o `index.html`
2. Altere as informações (preço, recursos, etc.)
3. Adicione a função correspondente no `script.js`

### Modificar Animações
Ajuste as configurações do AOS no `script.js`:

```javascript
AOS.init({
    duration: 800,    // Duração da animação
    easing: 'ease-in-out',
    once: false,       // Animar apenas uma vez
    offset: 100       // Offset para trigger
});
```

## Compatibilidade
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Dispositivos móveis (iOS/Android)
- ✅ Tablets e desktops
- ✅ WhatsApp Web e aplicativo

## Suporte
Para dúvidas ou customizações adicionais, consulte:
- Documentação HTML/CSS/JavaScript
- Guia do Font Awesome para ícones
- Documentação do AOS para animações

## Licença
Este projeto é de uso livre para fins comerciais.

## CREDITOS 
Desenvolvido por Daniel Quintela!

