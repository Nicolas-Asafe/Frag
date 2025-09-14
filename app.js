import { newPage, renderPage, link, text, breakLine } from "./frag/script.js";

// Página Home
newPage("home", [
  text("Bem-vindo à Página Home!"),
  breakLine(),
  link("Ir para Sobre", "about")
], "Home");

// Página Sobre
newPage("about", [
  text("Esta é a página Sobre."),
  breakLine(),
  link("Voltar para Home", "home")
], "Sobre");

// Renderiza página inicial
renderPage("home");
