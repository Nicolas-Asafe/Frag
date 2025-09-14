/* ---------- Páginas ---------- */
const pages = new Map();

/* ---------- Style ---------- */
class Style {
  constructor(prop = {
    display: "block",
    position: "static",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    z_index: "0",
    overflow: "visible",
    background_color: "transparent",
    color: "black",
    opacity: "1",
    font_size: "16px",
    font_family: "Arial, sans-serif",
    font_weight: "normal",
    text_align: "left",
    text_decoration: "none",
    line_height: "normal",
    letter_spacing: "normal",
    margin: "0",
    padding: "0",
    border: "none",
    border_radius: "0",
    box_shadow: "none",
    width: "auto",
    height: "auto",
    max_width: "none",
    max_height: "none",
    min_width: "0",
    min_height: "0",
    cursor: "default",
    pointer_events: "auto",
    visibility: "visible",
    transition: "none",
    transform: "none"
  }) {
    this.prop = prop;
  }
}

/* ---------- renderStyle ---------- */
function renderStyle(style = new Style()) {
  let styleInAll = "";
  const s = style instanceof Style ? style.prop : style;
  for (let propStyle in s) {
    const ps = propStyle.replace(/_/g, '-');
    styleInAll += `${ps}: ${s[propStyle]}; `;
  }
  return `style="${styleInAll}"`;
}

/* ---------- renderAttrs ---------- */
function renderAttrs(attrs = {}) {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
}

/* ---------- Components ---------- */
export const text = (txt, style = new Style()) => {
  return `<span ${renderStyle(style)}>${txt}</span>`;
};

export const button = (txt, { style = new Style(), attrs = {} } = {}) => {
  return `<button ${renderStyle(style)} ${renderAttrs(attrs)}>${txt}</button>`;
};

export const link = (txt, pageName, style = new Style()) => {
  return `<a href="#" ${renderStyle(style)} onclick="renderPage('${pageName}'); return false;">${txt}</a>`;
};

export const input = (placeholder, style = new Style()) => {
  return `<input placeholder="${placeholder}" ${renderStyle(style)}/>`;
};
export const title = (level, text, style = new Style()) => {
    return `<h${level} ${renderStyle(style)}>${text}</h${level}>`;
}
export const video = (src, style = new Style()) => {
    return `<video controls src="${src}" ${renderStyle(style)}></video>`;
}
export const audio = (src, style = new Style()) => {
    return `<audio controls src="${src}" ${renderStyle(style)}></audio>`;
}
export const list = (text, style = new Style()) => {
    return `<li ${renderStyle(style)}>${text}</li>`;
}
export const image = (src,style=new Style())=>{
  return `<img src=${src} ${renderStyle(style)} />`
}

export const breakLine = () => `<br/>`;

export const div = ({ style = new Style(), attrs = {}, children = [] } = {}) => {
  const content = Array.isArray(children) ? children.join(" ") : children;
  return `<div ${renderStyle(style)} ${renderAttrs(attrs)}>${content}</div>`;
};

/* ---------- newPage ---------- */
export const newPage = (name, Components = [], title = "Frag") => {
  pages.set(name, {
    title,
    Components,
    bodyContent: Components.map(c => c).join('')
  });
};

/* ---------- renderPage ---------- */
export const renderPage = (name) => {
  const page = pages.get(name);
  const root = document.getElementById("pages_root");
  if (page && root) {
    root.innerHTML = page.bodyContent;
    document.title = page.title;
  }
};

// expõe globalmente para os links funcionarem
window.renderPage = renderPage;

/* ---------- Objeto agrupado ---------- */
export const components = {
  text,
  button,
  input,
  breakLine,
  div,
  link,
  audio,
  video,
  image,
  list
};

export { Style };
