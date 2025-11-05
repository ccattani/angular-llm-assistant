# 🧠 NgCortex

NgCortex é um assistente de código inteligente desenvolvido em **Angular** que integra a API da OpenAI para responder perguntas técnicas sobre o framework.  
Ele permite enviar prompts diretamente da interface e receber respostas em tempo real — tudo 100% front-end.

---

## 🚀 Tecnologias

- **Angular 18+**
- **TypeScript**
- **OpenAI API (Responses Endpoint)**
- **SCSS**
- **Modo Claro/Escuro**

---

## ⚙️ Como rodar o projeto

```bash
npm install
npm start
```

Acesse:  
👉 http://localhost:4200

---

## 🔑 Configuração da OpenAI API Key

1️⃣ Crie uma conta em [https://platform.openai.com/](https://platform.openai.com/)  
2️⃣ Vá em **View API Keys** → **Create new secret key**  
3️⃣ Copie sua chave gerada (ex: `sk-xxxxxx`)

Abra o arquivo:  
```
src/environments/environment.ts
```

E substitua a linha:

```ts
openaiKey: "SUA_API_KEY_AQUI",
```

por:

```ts
openaiKey: "sk-sua_chave_aqui",
```

## 🌗 Funcionalidades

✅ Alternância entre **modo claro e escuro**  
✅ Ícone e **logo personalizados (NgCortex)**  
✅ Integração direta com IA  
✅ Layout moderno e responsivo  
✅ Projeto Angular puro (standalone)

---

## 🧠 Preview

![NgCortex Logo](./src/assets/ngcortex-logo-white.png)

---            
## 🛠️ Próximas melhorias

- Histórico de conversas  
- Geração automática de testes unitários  
- Revisão de snippets Angular  
- Integração com backend seguro para ocultar a API Key  

---

## 📄 Licença

MIT © 2025 — Desenvolvido por [Cheyenne Cattani](https://github.com/cheyennecattani)
