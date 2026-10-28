# lilirubio.es

Portfolio de Lili Rubio · UX/UI y diseño de producto.

- **Diseño:** Figma (fuente de verdad del diseño y del copy).
- **Código:** HTML, CSS y JavaScript estáticos, sin paso de compilación. Tokens en `assets/css/tokens.css`, generados desde las variables de Figma (primitivas → semánticas → componente; modo móvil por defecto y desktop a partir de 960 px).
- **Publicación:** Vercel (sitio estático, sin build), dominio lilirubio.es.
- La rama `astro-base` guarda una base equivalente en Astro por si se retoma.

## Estructura

```
index.html              Home
sobre-mi/index.html     Sobre mí
trabajo/nextcaddy/      Case study NextCaddy
assets/css/             fonts · tokens · typography · base
assets/fonts/           Bevellier y Switzer (.woff2, solo los pesos usados)
assets/img/             imágenes optimizadas (WebP 1x y @2x; capturas del case study en nextcaddy/)
assets/js/              interacciones (hero, ampliar capturas, copiar correo)
```

## Ver en local

```
python3 -m http.server 8000
```
