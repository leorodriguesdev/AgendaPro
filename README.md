# AgendaPro

![Banner do Projeto](public/images/home.png)

**AgendaPro** - Sistema completo de agendamentos online desenvolvido com Next.js, React e TypeScript.

---

## 📄 Sumário

- [Sobre](#-sobre)
- [Status do Projeto](#-status-do-projeto)
- [Features](#-features)
- [Pré-visualização](#-pré-visualização)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Rodando a Aplicação](#-rodando-a-aplicação)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Autor](#-autor)
- [Contato](#-contato)
- [Licença](#-licença)

## 📝 Sobre

O **AgendaPro** é um sistema completo de agendamentos online que permite aos clientes agendar serviços de forma rápida e prática, enquanto as empresas mantêm o controle total e personalizam a experiência com sua identidade visual.

Com uma interface moderna e responsiva, o sistema oferece:

- Página inicial institucional para apresentar o serviço
- Sistema de agendamento personalizado por empresa
- Gestão completa de horários e disponibilidade
- Notificações automáticas para clientes
- Suporte a tema claro e escuro
- Design responsivo e acessível

## 🚧 Status do Projeto

#### ✅ Sistema em desenvolvimento ativo

## ✅ Features

- **Gestão Completa de Agendamentos**

  - Permite que clientes agendem serviços online de forma prática e organizada
  - Controle total de horários e disponibilidade
  - Validação de datas e horários

- **Customização por Empresa**

  - Sistema multi-tenant com rotas dinâmicas por empresa
  - Personalização de identidade visual
  - Experiência única e alinhada à marca de cada empresa

- **Notificações Automáticas**

  - Sistema de notificações para lembrar clientes dos agendamentos
  - Confirmação de agendamento via e-mail
  - Opção de receber notificações push

- **Interface Moderna e Responsiva**

  - Design responsivo para todos os dispositivos
  - Suporte a tema claro e escuro
  - Animações e transições suaves
  - Feedback visual com toasts de notificação

- **Formulário Intuitivo**
  - Campos de nome, e-mail, profissional, data e hora
  - Validação em tempo real
  - Experiência de usuário otimizada

## 📸 Pré-visualização

### Página Inicial

![Página Inicial](public/images/home.png)

### Sistema de Agendamento

![Sistema de Agendamento](public/images/marcar.png)

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- **Git** - Para clonar o repositório
- **Node.js** - Versão 18 ou superior
- **Yarn** ou **npm** - Gerenciador de pacotes
- **TypeScript** - Já incluído nas dependências

Além disso, é recomendado utilizar um editor de código como o **VSCode**.

## 🛠️ Instalação

Siga os passos abaixo para executar este projeto localmente:

1. **Clone este repositório:**

```bash
git clone https://github.com/leorodriguesdev/AgendaPro.git
```

2. **Acesse a pasta do projeto no terminal/cmd:**

```bash
cd AgendaPro
```

3. **Instale as dependências:**

```bash
yarn install
```

ou

```bash
npm install
```

4. **Configure as variáveis de ambiente (se necessário):**
   Crie um arquivo `.env.local` na raiz do projeto caso precise configurar variáveis de ambiente para integrações futuras.

## 🚀 Rodando a Aplicação

Após instalar as dependências, execute a aplicação em modo de desenvolvimento:

```bash
yarn dev
```

ou

```bash
npm run dev
```

A aplicação irá iniciar na porta `3000`. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

### Rotas Disponíveis

- **Página Inicial:** `http://localhost:3000`
- **Agendamento por Empresa:** `http://localhost:3000/[nome-da-empresa]`

### Construindo para Produção

Para construir a aplicação para produção:

```bash
yarn build
```

ou

```bash
npm run build
```

Em seguida, para iniciar o servidor de produção:

```bash
yarn start
```

ou

```bash
npm start
```

### Linting

Para verificar problemas de código:

```bash
yarn lint
```

ou

```bash
npm run lint
```

## 💻 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### Core

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática

### Estilização

- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Ferramenta para transformar CSS
- **Autoprefixer** - Plugin PostCSS para adicionar prefixos de vendor

### Componentes e Utilitários

- **React Icons** - Biblioteca de ícones para React
- **React Toastify** - Sistema de notificações toast

### Desenvolvimento

- **ESLint** - Linter para JavaScript/TypeScript
- **Turbopack** - Bundler rápido para desenvolvimento

## 📁 Estrutura do Projeto

```
AgendaPro/
├── public/
│   ├── images/          # Imagens do projeto
│   └── ...
├── src/
│   └── app/
│       ├── [empresa]/   # Rota dinâmica por empresa
│       │   └── page.tsx
│       ├── components/  # Componentes reutilizáveis
│       │   ├── CTA.tsx
│       │   ├── Features.tsx
│       │   ├── Footer.tsx
│       │   ├── Hero.tsx
│       │   ├── Navbar.tsx
│       │   └── Testimonials.tsx
│       ├── fonts/       # Fontes personalizadas
│       ├── globals.css  # Estilos globais
│       ├── layout.tsx   # Layout raiz
│       └── page.tsx     # Página inicial
├── next.config.ts      # Configuração do Next.js
├── tailwind.config.ts  # Configuração do Tailwind
├── tsconfig.json       # Configuração do TypeScript
└── package.json        # Dependências do projeto
```

## 👤 Autor

**Leonardo Rodrigues** ⚡

Desenvolvedor Full Stack especializado em React, Next.js e Node.js.

## 📫 Contato

Desenvolvido por **Leonardo Rodrigues**.

- **LinkedIn:** [linkedin.com/in/leorodriguesdev](https://linkedin.com/in/leorodriguesdev)
- **Portfólio:** [leorodrigues.dev](https://leorodrigues.dev)
- **GitHub:** [@leorodriguesdev](https://github.com/leorodriguesdev)

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

© 2024 AgendaPro. Todos os direitos reservados.
