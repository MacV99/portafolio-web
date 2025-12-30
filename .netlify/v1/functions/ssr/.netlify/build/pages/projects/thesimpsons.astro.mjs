import { c as createComponent, i as renderComponent, m as maybeRenderHead, k as renderScript, f as addAttribute, j as renderTransition, r as renderTemplate } from '../../chunks/astro/server_J4w-ShtG.mjs';
import { $ as $$Layout1 } from '../../chunks/Layout1_BwIyybxi.mjs';
import { $ as $$Hero } from '../../chunks/hero_BB8YOMhQ.mjs';
/* empty css                                    */
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "The Simpsons | MacV";
  const response_characters = await fetch(
    "https://thesimpsonsapi.com/api/characters"
  );
  const data_character = await response_characters.json();
  const characters = data_character.results;
  return renderTemplate`${renderComponent($$result, "Layout1", $$Layout1, { "title": title, "data-astro-cid-6aqbpda4": true })} ${renderComponent($$result, "Hero", $$Hero, { "title": "The Simpsons", "bg_image": "/img/thesimpsons/bg.jpg", "data-astro-cid-6aqbpda4": true })} ${maybeRenderHead()}<section id="characters" data-astro-cid-6aqbpda4> <input type="text" id="search" placeholder="search.." data-astro-cid-6aqbpda4> <h3 id="no-results" style="display: none;" data-astro-cid-6aqbpda4>No results</h3> <div class="grid flex-row" data-astro-cid-6aqbpda4> ${characters.map((character) => renderTemplate`<a${addAttribute(`/projects/thesimpsons/${character.id}`, "href")} class="character-card flex-column"${addAttribute(character.name.toLowerCase(), "data-name")} data-astro-cid-6aqbpda4> <img${addAttribute(`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`, "src")}${addAttribute(character.name, "alt")} data-astro-cid-6aqbpda4${addAttribute(renderTransition($$result, "xarkdha3", "", `img-${character.id}`), "data-astro-transition-scope")}> <h4${addAttribute(character.name, "title")} data-astro-cid-6aqbpda4${addAttribute(renderTransition($$result, "dppi3cpg", "", `name-${character.id}`), "data-astro-transition-scope")}> ${character.name} </h4> </a>`)} </div> </section>  ${renderScript($$result, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/projects/thesimpsons/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/projects/thesimpsons/index.astro", "self");

const $$file = "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/pages/projects/thesimpsons/index.astro";
const $$url = "/projects/thesimpsons";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
