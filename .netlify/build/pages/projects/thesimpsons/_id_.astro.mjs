import { c as createComponent, d as createAstro, i as renderComponent, m as maybeRenderHead, f as addAttribute, j as renderTransition, r as renderTemplate } from '../../../chunks/astro/server_J4w-ShtG.mjs';
import { $ as $$Layout1 } from '../../../chunks/Layout1_BwIyybxi.mjs';
/* empty css                                      */
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
  const character = await response.json();
  const title = `${character.name} | The Simpsons`;
  return renderTemplate`${renderComponent($$result, "Layout1", $$Layout1, { "title": title, "data-astro-cid-qtgeciix": true })} ${maybeRenderHead()}<section id="character-detail" data-astro-cid-qtgeciix> <!-- Botón volver --> <a href="/projects/thesimpsons" class="back-btn flex-row" data-astro-cid-qtgeciix> ← </a> <article class="detail-card flex-column" data-astro-cid-qtgeciix> <!-- Imagen del personaje --> <div class="flex-row" data-astro-cid-qtgeciix> <img${addAttribute(`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`, "src")}${addAttribute(character.name, "alt")} data-astro-cid-qtgeciix${addAttribute(renderTransition($$result, "iukehw6z", "", `img-${id}`), "data-astro-transition-scope")}> <!-- Información principal --> <div class="info-container flex-column" data-astro-cid-qtgeciix> <h1 data-astro-cid-qtgeciix${addAttribute(renderTransition($$result, "payiklky", "", `name-${id}`), "data-astro-transition-scope")}>${character.name}</h1> <div class="basic-info flex-row" data-astro-cid-qtgeciix> ${character.age && renderTemplate`<p data-astro-cid-qtgeciix> <strong data-astro-cid-qtgeciix>Age:</strong> ${character.age} años
</p>`} ${character.gender && renderTemplate`<p data-astro-cid-qtgeciix> <strong data-astro-cid-qtgeciix>Gender:</strong> ${character.gender} </p>`} ${character.occupation && renderTemplate`<p data-astro-cid-qtgeciix> <strong data-astro-cid-qtgeciix>Occupation:</strong> ${character.occupation} </p>`} ${character.status && renderTemplate`<p${addAttribute(`status ${character.status.toLowerCase()}`, "class")} data-astro-cid-qtgeciix> <strong data-astro-cid-qtgeciix>Status:</strong> ${character.status} </p>`} </div> </div> </div> <!-- Frases icónicas --> ${character.phrases && character.phrases.length > 0 && renderTemplate`<div class="phrases-section flex-column" data-astro-cid-qtgeciix> <ul data-astro-cid-qtgeciix> ${character.phrases.map((phrase) => renderTemplate`<li data-astro-cid-qtgeciix>"${phrase}"</li>`)} </ul> </div>`} </article> </section> `;
}, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/projects/thesimpsons/[id].astro", "self");

const $$file = "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/projects/thesimpsons/[id].astro";
const $$url = "/projects/thesimpsons/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
