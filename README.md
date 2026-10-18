# Meu estúdio de música / Apostila de HTML

Este repositório contém a apostila de HTML criada por João Paulo Duque. O conteúdo principal está em `index.html` e os estilos e scripts na pasta `assets/`.

Como visualizar localmente

1. Abra o arquivo `index.html` diretamente no navegador, ou
2. Inicie um servidor local na pasta do repositório (recomendado):

```bash
python -m http.server 8000
```

Depois acesse: http://localhost:8000

Estrutura do projeto

```
.
├── index.html
├── assets/
│   ├── css/ (opcional)
│   ├── js/
│   └── img/
├── .gitignore
└── README.md
```

Publicar no GitHub Pages

1. Vá em Settings → Pages no repositório.
2. Em "Source" escolha a branch `main` (ou `apostila-fix` enquanto revisa) e a pasta `/ (root)`.
3. Salve. O site ficará disponível em: `https://joaopauloduque2027-star.github.io/minha-apaostila-de-html-iniciante/` (a URL pode demorar alguns minutos para propagar).

Notas sobre as mudanças

- Normalizei a estrutura do `index.html` e corrigi várias pequenas falhas de formatação.
- Padronizei caminhos para recursos em `assets/` (CSS, JS, imagens).
- Fiz revisão ortográfica leve no conteúdo mantendo o estilo original.
- Criei `backup-originais/index.original.html` com a versão anterior do `index.html`.

Próximos passos (opcionais)

- Confirmar nomeação/ordenação de "folhas" se existir mais de um arquivo de conteúdo separado (neste repositório a apostila está em um único `index.html`).
- Adicionar imagens reais em `assets/img/` e mídia em `assets/media/`.
- Se quiser que eu habilite GitHub Pages ou crie o workflow para gerar PDF automaticamente, diga e eu configuro.
