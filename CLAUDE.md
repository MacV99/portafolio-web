# Portafolio MacV — Miguel Angel Cuellar Velandia

Portafolio web personal. Astro 5 estático, bilingüe (ES/EN), deploy en Netlify.

## Comandos

```bash
pnpm dev      # servidor local
pnpm build    # build producción (astro build)
pnpm preview  # previsualizar build
```

Gestor de paquetes: **pnpm** (no npm/yarn).

## Arquitectura

- **Contenido centralizado en `src/i18n/ui.ts`** — TODO el texto vive aquí, en ES y EN:
  strings de UI (`ui`), casos (`caseStudies`), experiencia (`experience`), educación (`education`).
  Es un espejo bilingüe: cada bloque tiene array `es` y array `en`. **Al editar contenido,
  actualiza AMBOS idiomas** o quedan desincronizados.
- **i18n:** ES = idioma por defecto, sin prefijo de URL (`/`). EN = prefijo `/en/`.
  Helper `localizedPath(path, lang)`. Fallback: si falta un string en EN, cae a ES.
- **Casos de éxito:** páginas dinámicas `getStaticPaths` desde `getCaseStudies(lang)`.
  Ruta ES: `src/pages/casos/[slug].astro`. Ruta EN: `src/pages/en/casos/[slug].astro`.
  Ambas renderizan `src/components/CaseStudy.astro`. **Editar rutas = tocar las dos.**
- **Layout:** `src/layouts/Layout1.astro`. Secciones en `src/sections/`, componentes en `src/components/`.

## CSS

- Global: `src/styles/global.css` (variables `--clr-*`, `--shadow-*`).
- **NO escribas reglas CSS a ciegas** — el proyecto tiene skills que gobiernan el CSS:
  `astro-css-architecture` (dónde va cada estilo), `css-order` (orden base→hover→media),
  `flex-utilities-audit` (clases `.flex-row`/`.flex-column`). Se activan solos al tocar CSS.
- Utilitarias existentes: `.flex-row`, `.flex-column`, `.button1`, `.button2`. Reúsalas antes de crear.

## Convenciones

- Contenido nuevo → `src/i18n/ui.ts`, nunca hardcodeado en `.astro`.
- Hay `// TODO` en `ui.ts` marcando stacks de casos sin confirmar — no inventes, pregunta.
