import { newPage, Style, div } from "../../frag/script.js";
import home_button from "../components/home_page/button.js";

newPage("home_page", [
    div({
        style: new Style({
            background_color: "blue",
            width: "100%",
            height: "100%",
            position: "absolute"
        }),
        children:[
            home_button
        ]
    })
], "Home");
