import { c as createComponent, d as createAstro, f as addAttribute, n as renderHead, l as renderSlot, r as renderTemplate } from './astro/server_J4w-ShtG.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout1;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-rlbyt7mk> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-rlbyt7mk> <main data-astro-cid-rlbyt7mk> ${renderSlot($$result, $$slots["default"])} </main>  <style>
    section:last-child {
      padding-bottom: 70px;
    }
  </style> </body></html>`;
}, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/layouts/Layout1.astro", void 0);

export { $$Layout1 as $ };
