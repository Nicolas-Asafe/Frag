
const components = {
  text: (text, style = {}) => {
    console.log(text, style);
    return `<span ${renderStyle(style)} >${text}</span>`;
  },
  button: (text, style = {}) => { 
    return `<button ${renderStyle(style)} >${text}</button>`;
  },
  input: (placeholder, style = {}) => {
    return `<input placeholder="${placeholder}" ${renderStyle(style)}/>`;
  },
  breakLine: () => {
    return `<br/>`;
  },
  div:(style={},childrens=[]) =>{
    return `
    <div ${renderStyle(style)}>
     ${childrens.map(c=>c).join(" ")}
    </div>
    `
  },
  image:(src, style = {}) => {
    return `<img src="${src}" ${renderStyle(style)} />`;
  }
};

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

function renderStyle(style = {}) {
  let styleInAll = "";
  for (let propStyle in style.prop) {
    const ps = propStyle.replace(/_/g, '-'); // background_color -> background-color
    const styleCom = `${ps}: ${style.prop[propStyle]}; `;
    styleInAll += styleCom;
  }
  return `style="${styleInAll}"`;
}

const newPage = (Components = [], title = "Frag", lan = "en") => {
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
}

export { components, newPage, Style };
