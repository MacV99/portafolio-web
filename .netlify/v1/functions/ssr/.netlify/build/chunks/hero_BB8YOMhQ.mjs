import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, l as renderSlot, r as renderTemplate } from './astro/server_J4w-ShtG.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, span, bg_image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex-column"${addAttribute(`--bg-image: url('${bg_image || ""}')`, "style")} data-astro-cid-ve27vnvx> <h1 data-astro-cid-ve27vnvx>${title}</h1> ${span && renderTemplate`<span data-astro-cid-ve27vnvx>${span}</span>`} ${renderSlot($$result, $$slots["default"])} <!-- <div class="buttons flex-row">
    <a
      class="boton"
      href="https://wa.me/523172366425?text=Hola%20quiero%20información"
      target="_blank">CONTÁCTANOS</a
    >
    <a
      class="boton2"
      href="https://wa.me/523172366425?text=Hola%20quiero%20información"
      target="_blank">ABRIR APP</a
    >
  </div> --> </section> `;
}, "C:/Users/USUARIO/Documents/GIT PROJECTS/portafolio-web/src/sections/hero.astro", void 0);

export { $$Hero as $ };
