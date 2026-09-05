# Marcadores Católicos — Landing PT

Projeto React + Vite + Tailwind CSS v4, replicando o design system da
página "150 Marcadores Católicos", adaptado para o mercado português
(preços em euro, devoções portuguesas, RGPD).

## Como abrir no VS Code

```bash
# 1. Descompacta a pasta e abre no VS Code
cd marcadores-catolicos-pt
code .

# 2. Instala as dependências
npm install

# 3. Roda o servidor de desenvolvimento
npm run dev
```

O site abre em `http://localhost:5173`.

## O que falta você adicionar

1. **Vídeo VSL** — troca `src="/videos/vsl.mp4"` em `src/components/Hero.tsx`
   pelo teu vídeo real. Cria a pasta `public/videos/` e coloca o ficheiro lá.
2. **Imagens dos produtos** — todos os blocos `[ imagem ... ]` em
   `HowItWorks.tsx`, `Features.tsx` (opcional), `Gallery.tsx`, `WhatYouGet.tsx`
   e `Pricing.tsx` são placeholders. Coloca as tuas imagens em
   `public/images/` e substitui as `<div>` de placeholder por `<img src="/images/nome.jpg" />`.
3. **Links de checkout** — os botões de CTA apontam para `#oferta`,
   `#checkout-basico` e `#checkout-premium`. Troca pelos links reais da tua
   plataforma de checkout (Hotmart, Kiwify, Stripe, etc.).
4. **Contagem regressiva** — em `TopBar.tsx`, o valor inicial está fixo em
   3h29m. Se quiseres persistência real (não resetar a cada reload), isso
   precisa de lógica adicional (ex.: salvar o horário-alvo no localStorage).
5. **Páginas de Termos e Privacidade** — os links no rodapé (`/termos`,
   `/privacidade`) ainda não existem como páginas — são só placeholders de
   link.

## Estrutura

```
src/
  components/
    TopBar.tsx        — barra de urgência
    Hero.tsx           — headline + VSL + CTA
    Testimonials.tsx    — depoimentos
    HowItWorks.tsx      — "veja como é simples usar"
    Features.tsx        — grid de 4 features
    Gallery.tsx          — galeria de marcadores
    Categories.tsx       — 8 categorias devocionais (fundo navy)
    WhatYouGet.tsx        — tudo o que recebe + bónus
    Pricing.tsx            — cards de preço (básico + premium)
    Guarantee.tsx           — garantia de 7 dias
    FAQ.tsx                  — perguntas frequentes (acordeão)
    FinalCTA.tsx              — chamada final
    Footer.tsx                 — rodapé com RGPD
  App.tsx              — junta tudo na ordem certa
  index.css            — todos os tokens de design (cores, sombras, gradientes)
```

## Preços atuais

- Oferta Básica: de €19,90 por **€7,90**
- Super Oferta (premium): de €29,90 por **€14,90**

Ajusta em `src/components/Pricing.tsx` sempre que quiseres testar outro ticket.
