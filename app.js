import { newPage, components, Style } from "./script.js";

const inputStyle = new Style({
    padding: "10px",
    border: "1px solid #ccc",
    border_radius: "5px",
    margin: "5px 0",
    width: "100%",
    font_size: "16px"
});

const buttonStyle = new Style({
    background_color: "#4CAF50",
    color: "white",
    border: "none",
    border_radius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    font_size: "16px",
    margin_top: "10px",
    transition: "0.3s",
});

const formContainerStyle = new Style({
    width: "400px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ddd",
    border_radius: "10px",
    box_shadow: "0 4px 8px rgba(0,0,0,0.1)",
    background_color: "#f9f9f9"
});

const imgStyle = new Style({
  width: "50px",
  height: "50px",
  border: "1px solid red",
  border_radius: "10px"
});

const titleStyle = new Style({
  color: "red",
  font_family: "Arial"
});

const linkStyle = new Style({
  color: "gray"
});

const videoStyle = new Style({
  width: "500px",
  height: "500px"
});

const audioStyle = new Style({
  background_color: "black"
});

const listStyle = new Style({
  color: "red",
  font_family: "Arial"
})

const formComponents = [
    components.div(formContainerStyle, [
        components.text("Formulário de Contato", new Style({
            font_size: "24px",
            font_weight: "bold",
            text_align: "center",
            margin_bottom: "20px"
        })),
        components.input("Nome", inputStyle),
        components.input("Email", inputStyle),
        components.input("Senha", inputStyle),
        components.button("Enviar", buttonStyle),
        components.image("images/images.jpeg", imgStyle),
        components.title(6, "olá mundo, novo componente", titleStyle),
        components.link("https://www.google.com.br", "vá para o google, e teste o novo componente de link", linkStyle),
        components.video("videos/konoha.mp4", videoStyle),
        components.audio("audios/sigmaboy.mp3", audioStyle),
        components.list("Novo componente de lista", listStyle)
    ])
];

newPage(formComponents, "Formulário Bonito", "pt-br");