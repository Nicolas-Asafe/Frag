import { newPage, components, Style } from "./script.js";

const inputStyle = new Style({
    padding: "12px",
    border: "1px solid #ccc",
    border_radius: "5px",
    margin: "5px 0",
    width: "100%",
    font_size: "16px",
    transition: "0.2s"
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
  width: "60px",
  height: "60px",
  border_radius: "50%",
  display: "block",
  margin: "10px auto",
  box_shadow: "0 2px 6px rgba(0,0,0,0.2)"
});

const titleStyle = new Style({
  color: "#2c3e50",
  font_family: "Arial",
  font_weight: "bold",
  text_align: "center",
  margin_bottom: "20px"
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

const footerStyle = new Style({
  color: "#2980b9",
  font_size: "14px",
  text_align: "center",
  margin_top: "20px"
})

const progressStyle = new Style({
  width: "100%",
  margin: "10px 0"
})

const navStyle = new Style({
  position: "absolute",
  margin_top: "75px"
})

const fruitStyle = new Style({
  color: "#34495e",
  font_size: "18px",
  margin: "5px 0"
})

const iStyle = new Style({
  color: "red",
  font_size: "60px",
  display: "block",
  text_align: "center",
  margin: "15px 0"
})

const formStyle = new Style({
  position: "absolute",
  display: "flex"
})

const labelMomNumberStyle = new Style({
  position: "absolute",
  color: "red"
})

const fruitsItems = [
  components.list("Banana", fruitStyle),
  components.list("Maçã", fruitStyle),
  components.list("Pera", fruitStyle),
  components.list("Uva", fruitStyle)
];

const inputsItems = [
  components.input("text", "maeInput", "Numero da sua mãe", inputStyle),
  components.input("text", "tiaInput", "Numero da sua tia", inputStyle),
  components.input("text", "paiInput", "Numero do seu pai", inputStyle),
  components.input("submit", "Enviar", buttonStyle)
];

const formComponents = [
    components.div(formContainerStyle, [
        components.text("Formulário de Contato", new Style({
            font_size: "24px",
            font_weight: "bold",
            text_align: "center",
            margin_bottom: "20px"
        })),
        components.input("text", "OneName", "Nome", inputStyle),
        components.input("email", "OneEmail", "Email", inputStyle),
        components.input("password", "OnePassword", "Senha", inputStyle),
        components.button("Enviar", buttonStyle),
        components.image("images/images.jpeg", imgStyle),
        components.title(6, "olá mundo, novo componente", titleStyle),
        components.link("https://www.google.com.br", "vá para o google, e teste o novo componente de link", linkStyle),
        components.video("videos/konoha.mp4", videoStyle),
        components.audio("audios/sigmaboy.mp3", audioStyle),
        components.list("Novo componente de lista", listStyle),
        components.footer("Pagina feita por NK", footerStyle),
        components.progress(90, 100, progressStyle),
        components.nav("ol", fruitsItems.join(""), navStyle),
        components.hr(),
        components.pre("olá, este texto é legal"),
        components.i("fa-brands fa-apple", iStyle),
        components.form("#", inputsItems.join(""), formStyle),
        components.label("maeInput", "Mom Number", labelMomNumberStyle)
    ])
];

newPage(formComponents, "Formulário Bonito", "pt-br");