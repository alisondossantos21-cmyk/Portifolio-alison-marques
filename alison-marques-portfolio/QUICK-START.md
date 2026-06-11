# ⚡ Quick Start - Do Zero ao Deploy

Guia rápido (5 minutos) para ter seu portfólio online.

---

## 1️⃣ Setup Local (2 min)

```bash
# Clone ou entre no projeto
cd alison-marques-portfolio

# Instale dependências
pnpm install

# Inicie servidor dev
pnpm dev

# Abra http://localhost:5173
```

✅ Pronto! Seu site roda localmente.

---

## 2️⃣ Teste Tudo (2 min)

**Desktop:**
- [ ] Navegue por todas as seções
- [ ] Teste links (GitHub, LinkedIn, email)
- [ ] Teste formulário de contato

**Mobile (F12 > Toggle Device):**
- [ ] Menu hamburger aparece
- [ ] Pode tocar em tudo
- [ ] Texto legível

✅ Tudo funciona?  Passe para próxima etapa!

---

## 3️⃣ Deploy em 1 Min (Escolha Uma)

### Opção A: Vercel (Recomendado)
```
1. Acesse vercel.com
2. Clique "Sign up with GitHub"
3. Importe seu repositório
4. Clique "Deploy"
5. Pronto! Seu site está online em vercel.app
```

### Opção B: Netlify
```
1. Acesse netlify.com
2. Clique "Sign up with GitHub"
3. Importe seu repositório
4. Clique "Deploy site"
5. Pronto! Seu site está online em netlify.app
```

### Opção C: GitHub Pages (Grátis)
```bash
# Configure para seu repositório
git push origin main
# Vá em Settings > Pages
# Deploy automático!
```

✅ Site está online!

---

## 4️⃣ Configurar Domínio Próprio (Opcional)

```
1. Registre domínio (Namecheap, Google Domains, etc)
2. Copie nameservers da Vercel/Netlify
3. Configure no registrador
4. Aguarde 24-48h
5. Acesse seu domínio!
```

---

## 5️⃣ Formulário de Contato (Opcional)

```
1. Acesse formspree.io
2. Crie conta grátis
3. Configure novo formulário
4. Copie endpoint
5. Edite .env.local:
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_ID
6. Pronto! Fórmulário recebe emails
```

---

## 🎯 Checklist Mínimo

- [ ] Projeto roda localmente (`pnpm dev`)
- [ ] Build sucede (`pnpm build`)
- [ ] Site está online (Vercel/Netlify)
- [ ] Links funcionam
- [ ] Mobile responsivo

✅ Tudo marcado? Seu portfólio está publicado! 🎉

---

## 📚 Documentação Detalhada

Se precisa mais informações:
- **Setup completo:** `README.md`
- **Deployment passo-a-passo:** `DEPLOYMENT.md`
- **Checklist de lançamento:** `LAUNCH-CHECKLIST.md`
- **Melhorias implementadas:** `IMPROVEMENTS-SUMMARY.md`

---

## 🆘 Se der erro

### Build falha
```bash
pnpm clean && pnpm install && pnpm build
```

### Página em branco
- Limpe cache (Ctrl+Shift+Del)
- Verifique console (F12)

### Formulário não funciona
- Teste sem config primeiro (abre mailto)
- Depois configure Formspree

---

## ✨ Pronto!

Seu portfólio profissional está:
- ✅ Responsivo
- ✅ Otimizado para SEO
- ✅ Com formulário funcional
- ✅ Pronto para produção

**Acesse seu site agora e compartilhe! 🚀**

---

## 💬 Dúvidas?

1. Leia os arquivos .md no projeto
2. Verifique console (F12)
3. Teste localmente
4. Procure no Google
5. Abra issue no GitHub

---

**Boa sorte! 🎉**
