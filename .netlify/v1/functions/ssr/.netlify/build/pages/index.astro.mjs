import { c as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_J4w-ShtG.mjs';
import { $ as $$Layout1 } from '../chunks/Layout1_BwIyybxi.mjs';
import { $ as $$Hero } from '../chunks/hero_BB8YOMhQ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const proyectos = [
    {
      id: 1,
      nombre: "Staurant",
      descripcion: "Mi sitio web personal con todos mis proyectos",
      url: "https://miportfolio.com"
    },
    {
      id: 2,
      nombre: "Farra Calculator",
      descripcion: "Tienda online con carrito de compras",
      url: "https://mitienda.com"
    },
    {
      id: 3,
      nombre: "The Simpsons",
      descripcion: "The Simpsons",
      url: "/projects/thesimpsons/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="proyectos" data-astro-cid-g6tfpcsd> <h2 data-astro-cid-g6tfpcsd>Mis Proyectos</h2> <div class="proyectos-grid" data-astro-cid-g6tfpcsd> ${proyectos.map((proyecto) => renderTemplate`<article class="proyecto-card flex-column" data-astro-cid-g6tfpcsd> <h3 data-astro-cid-g6tfpcsd>${proyecto.nombre}</h3> <p data-astro-cid-g6tfpcsd>${proyecto.descripcion}</p> <a${addAttribute(proyecto.url, "href")} target="_blank" rel="noopener noreferrer" class="boton" data-astro-cid-g6tfpcsd>
Ver Proyecto
</a> </article>`)} </div> </section> `;
}, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/sections/projects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout1", $$Layout1, { "title": "Home | MacV", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "MacV", "span": "Miguel Angel Cuellar Velandia", "bg_image": "/img/wallpaper1.jpg", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
