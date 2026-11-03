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
proyecto/nextcaddy/     Case study NextCaddy
assets/css/             fonts · tokens · typography · base
assets/fonts/           Bevellier y Switzer (.woff2, solo los pesos usados)
assets/img/             imágenes optimizadas (WebP 1x y @2x; capturas del case study en nextcaddy/)
assets/js/              interacciones (hero, ampliar capturas, copiar correo)
```

## Ver en local

```
python3 -m http.server 8000
```

## Buscadores

- Google Search Console: propiedad de dominio `lilirubio.es`, verificada con un registro TXT en Piensa Solutions. **No borrar ese TXT.**
- Bing Webmaster Tools: importado desde Google Search Console.
- `sitemap.xml` y `robots.txt` en la raíz.

**Al añadir o cambiar una página** (por ejemplo, un case study nuevo):

1. Añadir su URL al `sitemap.xml` (y actualizar `lastmod` de las que cambien).
2. Darle `<title>`, `<meta name="description">` y `<link rel="canonical">`, como las demás.
3. En Google Search Console → Inspección de URLs → pegar la URL → Solicitar indexación. Bing lee el mismo sitemap.
