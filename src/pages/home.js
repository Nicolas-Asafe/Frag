import { newPage, Style, div } from "../../frag/script.js";

newPage("home", [
    div({
        style: new Style({
            background_color: "blue",
            width: "100%",
            height: "100%",
            position: "absolute"
        })
    })
], "Home");
