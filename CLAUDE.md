# ABAPIA · Sitio web — reglas para Claude Code

Este repo es la web pública de ABAPIA (abapia.com). Seguí estas reglas al hacer cambios.

## Publicación
- Stack: React + Vite. Deploy automático en **Vercel** con cada push a `main`. DNS en Squarespace.
- **El título de cada commit es el número de versión: "Versión N"** (N = la última + 1; mirá el historial con `git log --oneline -1`).
- Antes de pushear, **`npm run build` tiene que pasar** sin errores.
- Push directo a `main` (Vercel publica solo). Avisar al usuario la versión publicada.

## Qué NO tocar sin pedido explícito
- Los textos/copy de la web (hero, Manifiesto, Servicios, etc.). Cambios de copy solo si el usuario lo pide.
- El formulario de contacto: Formspree, form id `mykraqjy`. No romper el envío AJAX ni los estados.
- La voz es siempre de empresa ("Somos ABAPIA"), nunca en primera persona del fundador. Sin cara ni número personal.

## Archivos basura (ignorados en .gitignore, no commitear)
- `abapia-web.code-workspace` (config de VS Code que apunta a otro proyecto, Listario).
- `index 1 .html` (copia vieja del index default).

## Datos útiles
- Entry: `index.html` (tiene título, meta description y Open Graph — mantenerlos).
- Favicon: `public/favicon.png` (optimizado, ~11 KB).
- Componente principal: `src/App.jsx`. Estilos: `src/index.css`.
- Secciones con ancla: #servicios #modalidades #nosotros #metodo #ideal-para #faq #contacto.
  El scroll a #contacto al entrar directo con hash está resuelto con un useEffect en App.jsx (Versión 12).
