import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_J4w-ShtG.mjs';
import { $ as $$Layout1 } from '../chunks/Layout1_BwIyybxi.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout1", $$Layout1, { "title": "404 - Not Found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404 - Not Found</h1> <p data-astro-cid-zetdm5md>La página que buscas no existe.</p> </section> ` })} `;
}, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/404.astro", void 0);

const $$file = "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
