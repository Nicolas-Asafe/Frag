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
        components.button("Enviar", buttonStyle)
    ])
];

newPage(formComponents, "Formulário Bonito", "pt-br");
