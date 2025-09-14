import { Style,button } from "../../../frag/script.js";

const home_button = button("botão",{style:new Style({
    background_color:"white",
    color:"blue",
    padding:"10px",
    border:"none",
    border_radius:"10px",
    font_size:"18px",
    margin:"10px"
}),attrs:{onclick:()=>{alert("Olá")}}})
export default home_button;