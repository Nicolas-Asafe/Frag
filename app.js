import { newPage, text, Style } from "./script.js";


let com = [];

try{

    com=[
      text("hello world!")
    ]

}catch(err){
    console.log(err)
}

newPage(com, "Frag site", "pt-br");
