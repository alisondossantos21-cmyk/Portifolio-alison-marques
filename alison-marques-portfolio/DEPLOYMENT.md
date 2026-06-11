# 🚀 Guia de Deployment

Instruções completas para publicar seu portfólio em diferentes plataformas.

---

## ⚡ Deploy Rápido (Recomendado)

### Vercel (Melhor para React/Vite)

**Tempo**: ~5 minutos | **Custo**: Grátis (com opções pagas)

1. **Crie conta no Vercel**
   - Visite [vercel.com](https://vercel.com/)
   - Clique "Sign Up"
   - Login com GitHub

2. **Conecte seu repositório**
   - Clique "New Project"
   - Selecione seu repositório no GitHub
   - Clique "Import"

3. **Configure variáveis de ambiente**
   - Na aba "Environment Variables", adicione:
     ```
     VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
     VITE_ANALYTICS_ENDPOINT=your-analytics-url
     VITE_ANALYTICS_WEBSITE_ID=your-website-id
     ```

4. **Deploy**
   - Clique "Deploy"
   - Espere ~2 minutos
   - Seu site estará em `https://seu-projeto.vercel.app`

5. **Configure domínio próprio (opcional)**
   - Na aba "Domains"
   - Adicione seu domínio
   - Siga as instruções de configuração de DNS

### Netlify

**Tempo**: ~5 minutos | **Custo**: Grátis (com opções pagas)

1. **Crie conta no Netlify**
   - Visite [netlify.com](https://netlify.com/)
   - Clique "Sign up"
   - Login com GitHub

2. **Conecte seu repositório**
   - Clique "Add new site"
   - Selecione "Import an existing project"
   - Escolha "GitHub"
   - Selecione seu repositório

3. **Configure build**
   ```
   Build command: pnpm build
   Publish directory: dist
   ```

4. **Configure variáveis**
   - Na aba "Environment"
   - Adicione suas variáveis (mesmas do Vercel)

5. **Deploy**
   - Clique "Deploy site"
   - Site estará em `https://seu-site.netlify.app`

6. **Configure domínio**
   - Na aba "Domain settings"
   - Adicione seu domínio
   - Siga instruções de DNS

---

## 📍 Deploy em Plataformas Específicas

### GitHub Pages

**Tempo**: ~10 minutos | **Custo**: Grátis | **Limitação**: Apenas conteúdo estático

1. **Atualize vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/alison-marques-portfolio/', // Seu nome de repositório
     // ... resto da config
   })
   ```

2. **Crie GitHub Action**
   - Na raiz do projeto, crie `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: pnpm/action-setup@v2
           with:
             version: 8
         - uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: 'pnpm'
         - run: pnpm install
         - run: pnpm build
         - uses: actions/upload-pages-artifact@v2
           with:
             path: 'dist'
         - uses: actions/deploy-pages@v2
   ```

3. **Configure GitHub Pages**
   - Vá em Settings > Pages
   - Source: GitHub Actions
   - Salve

4. **Deploy automático**
   - Faça push para `main`
   - GitHub Actions faz build e deploy automaticamente
   - Site em `https://seu-usuario.github.io/alison-marques-portfolio/`

### Railway

**Tempo**: ~10 minutos | **Custo**: Grátis (500h/mês) depois $5/mês

1. **Crie conta**
   - Visite [railway.app](https://railway.app/)
   - Clique "Login with GitHub"

2. **Conecte projeto**
   - Clique "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha seu repositório

3. **Configure variáveis**
   - Na aba "Variables"
   - Adicione suas variáveis de ambiente

4. **Deploy**
   - Railway faz deploy automaticamente
   - URL gerada em "Settings > Domains"

### Render

**Tempo**: ~10 minutos | **Custo**: Grátis | **Limitação**: Pode hibernar

1. **Crie conta**
   - Visite [render.com](https://render.com/)
   - Clique "Sign up"

2. **Novo serviço**
   - Clique "New +"
   - Selecione "Static Site"
   - Conecte GitHub

3. **Configure build**
   ```
   Build Command: pnpm install && pnpm build
   Publish Directory: dist
   ```

4. **Deploy**
   - Clique "Create Static Site"
   - Espere deploy
   - URL automática fornecida

---

## 🖥️ Deploy em Servidor Próprio

### Linux/Ubuntu com Nginx

1. **Prepare o servidor**
   ```bash
   sudo apt update
   sudo apt install nginx
   sudo systemctl start nginx
   ```

2. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/alisonmarques.com
   ```
   
   Adicione:
   ```nginx
   server {
       listen 80;
       server_name alisonmarques.com www.alisonmarques.com;
       
       root /var/www/dist;
       index index.html;
       
       # SPA routing
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Cache estático
       location ~* \.(js|css|png|jpg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Ativar site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/alisonmarques.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. **Setup SSL (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d alisonmarques.com -d www.alisonmarques.com
   ```

5. **Upload do build**
   ```bash
   # Localmente
   pnpm build
   
   # Via SCP/FTP
   scp -r dist/* user@seu-servidor:/var/www/dist/
   ```

### Docker

1. **Crie Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package.json pnpm-lock.yaml ./
   RUN npm install -g pnpm && pnpm install
   COPY . .
   RUN pnpm build
   
   FROM nginx:alpine
   COPY --from=0 /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   ```

2. **Crie nginx.conf**
   ```nginx
   server {
       listen 80;
       location / {
           root /usr/share/nginx/html;
           try_files $uri /index.html;
       }
   }
   ```

3. **Build e run**
   ```bash
   docker build -t alison-portfolio .
   docker run -p 80:80 alison-portfolio
   ```

---

## 🌐 Configurar Domínio Próprio

### Registrar Domínio

Popular:
- [Namecheap](https://www.namecheap.com/) - Affordable
- [Google Domains](https://domains.google/) - Easy
- [GoDaddy](https://www.godaddy.com/) - Popular
- [Porkbun](https://porkbun.com/) - Crypto-friendly

### Apontar para Vercel/Netlify

**Para Vercel:**
1. Copie os nameservers da Vercel
2. No seu registrador, mude nameservers
3. Aguarde 24-48h propagação

**Para Netlify:**
1. Nameservers ou registros A
2. Veja docs específicas em `vercel.com/docs/concepts/projects/domains` ou `netlify.com/docs/custom-domains`

### Email com Domínio Próprio (Opcional)

Serviços:
- Gmail com domínio próprio ($6/mês/usuário)
- Zoho Mail (grátis até 5 usuários)
- Forwarder simples (muitos registradores oferecem)

---

## 📊 Monitorar Performance Pós-Deploy

### Ferramentas Essenciais

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Verifica Core Web Vitals

2. **Lighthouse** (Chrome DevTools)
   - F12 > Lighthouse
   - Audit completo

3. **GTmetrix**
   - https://gtmetrix.com/
   - Relatório detalhado

4. **WebPageTest**
   - https://www.webpagetest.org/
   - Teste de velocidade avançado

### Métricas a Monitorar

- **FCP** (First Contentful Paint): < 1.8s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 600ms

---

## 🔐 Segurança Pós-Deploy

### Configurar HTTPS

Todas as plataformas acima oferecem HTTPS automático com Let's Encrypt.

### Headers de Segurança

Adicionados no `netlify.toml` e `vercel.json`:
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Content-Security-Policy (considere adicionar)

### Monitorar Segurança

- [SSL Labs](https://www.ssllabs.com/ssltest/) - Verificar certificado
- [Security Headers](https://securityheaders.com/) - Verificar headers

---

## 🐛 Troubleshooting Deploy

### "Build failed"
```bash
# Tente localmente primeiro
pnpm clean  # limpar cache
pnpm install
pnpm build
```

### "Blank page após deploy"
1. Verifique console do navegador (F12)
2. Verifique "base" no `vite.config.ts`
3. Limpe cache do navegador (Ctrl+Shift+Del)

### "Variáveis de ambiente não funcionam"
1. Verifique nomes das variáveis (devem começar com `VITE_`)
2. Reconstrua após adicionar variáveis
3. Verifique se estão visíveis em build time

### "Formulário não envia"
1. Verifique `VITE_FORMSPREE_ENDPOINT`
2. Teste em DevTools
3. Verifique CORS settings

---

## 📝 Próximas Etapas

Após o deploy inicial:

- [ ] Configurar domínio próprio
- [ ] Configurar email customizado
- [ ] Ativar analytics
- [ ] Configurar formulário de contato
- [ ] Configurar backups automáticos
- [ ] Monitorar performance
- [ ] Configurar CI/CD avançado
- [ ] Adicionar status page (opcional)

---

## 💡 Tips & Tricks

1. **Preview antes de deploy**
   ```bash
   pnpm build && pnpm preview
   ```

2. **Teste mobile**
   - Use Chrome DevTools
   - Teste em dispositivo real

3. **Performance**
   - Comprima imagens antes de upload
   - Use CDN para assets estáticos
   - Considere lazy loading

4. **Updates**
   ```bash
   git push origin main  # Deploy automático
   ```

5. **Rollback**
   - Vercel/Netlify: Um clique para voltar
   - Servidores próprios: Git revert + redeploy

---

**Precisa de ajuda?**
- Verifique os docs da plataforma
- Procure no Stack Overflow com a tag específica
- Abra issue no repositório
