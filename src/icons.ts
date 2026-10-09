// Iconos de Bootstrap Icons como SVG inline: solo se incluyen los que se usan,
// en vez de la fuente completa (~2000 iconos). Para agregar uno, impórtalo aquí.
// Uso: <i class="bi bi-github" set:html={icons.github} />
import arrowLeft from "bootstrap-icons/icons/arrow-left.svg?raw";
import arrowRight from "bootstrap-icons/icons/arrow-right.svg?raw";
import boxArrowUpRight from "bootstrap-icons/icons/box-arrow-up-right.svg?raw";
import chevronDown from "bootstrap-icons/icons/chevron-down.svg?raw";
import github from "bootstrap-icons/icons/github.svg?raw";
import instagram from "bootstrap-icons/icons/instagram.svg?raw";
import linkedin from "bootstrap-icons/icons/linkedin.svg?raw";
import translate from "bootstrap-icons/icons/translate.svg?raw";

// Quita la clase del SVG para que no choque con los estilos de .bi del <i> padre
const clean = (svg: string) =>
  svg.replace(/\sclass="[^"]*"/, ' aria-hidden="true"');

export const icons = {
  arrowLeft: clean(arrowLeft),
  arrowRight: clean(arrowRight),
  boxArrowUpRight: clean(boxArrowUpRight),
  chevronDown: clean(chevronDown),
  github: clean(github),
  instagram: clean(instagram),
  linkedin: clean(linkedin),
  translate: clean(translate),
};
