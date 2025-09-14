/* ---------- Style ---------- */
class Style {
  constructor(prop = {
    /* Layout básico */
    display: "block",
    position: "static",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    z_index: "0",
    overflow: "visible",

    /* Cores e fundo */
    background_color: "transparent",
    color: "black",
    opacity: "1",

    /* Texto */
    font_size: "16px",
    font_family: "Arial, sans-serif",
    font_weight: "normal",
    text_align: "left",
    text_decoration: "none",
    line_height: "normal",
    letter_spacing: "normal",

    /* Espaçamento */
    margin: "0",
    padding: "0",

    /* Bordas */
    border: "none",
    border_radius: "0",
    box_shadow: "none",

    /* Tamanho */
    width: "auto",
    height: "auto",
    max_width: "none",
    max_height: "none",
    min_width: "0",
    min_height: "0",

    /* Cursor e interação */
    cursor: "default",
    pointer_events: "auto",
    visibility: "visible",

    /* Transição / animação */
    transition: "none",
    transform: "none"
  }) {
    this.prop = prop;
  }
}

/* ---------- renderStyle ---------- */
function renderStyle(style = new Style()) {
  let styleInAll = "";
  for (let propStyle in style.prop) {
    const ps = propStyle.replace(/_/g, '-'); // background_color -> background-color
    const styleCom = `${ps}: ${style.prop[propStyle]}; `;
    styleInAll += styleCom;
  }
  return `style="${styleInAll}"`;
}

/* ---------- Components individuais ---------- */
export const text = (text, style = new Style()) => {
  console.log(text, style);
  return `<span ${renderStyle(style)}>${text}</span>`;
};

export const button = (text, style = new Style()) => { 
  return `<button ${renderStyle(style)}>${text}</button>`;
};

export const input = (placeholder, style = new Style()) => {
  return `<input placeholder="${placeholder}" ${renderStyle(style)}/>`;
};

export const breakLine = () => {
  return `<br/>`;
};

export const div = (style = new Style(), childrens = []) => {
  return `
    <div ${renderStyle(style)}>
      ${childrens.map(c => c).join(" ")}
    </div>
  `;
};

/* ---------- newPage ---------- */
export const newPage = (Components = [], title = "Frag", lan = "en") => {
  document.getElementById("pages_root").innerHTML += `
    <!DOCTYPE html>
    <html lang="${lan}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
      ${Components.map(c => c).join('')}
    </body>
    </html>
  `;
};

/* ---------- Objeto agrupado ---------- */
export const components = {
  text,
  button,
  input,
  breakLine,
  div
};

/* ---------- Classe exportada ---------- */
export { Style };
