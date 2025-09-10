import "./style.css";
import { TextInterface } from "text-interface";

let introRepeating = true;

// loop this intro until saying yes
let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Do look");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
// remove previous outputs
ti.clear();

ti.output("Hello, " + name);
ti.output("I am Quagmire");
ti.output("This is my room.");
let rival = await ti.prompt("What is your rival's name?");
ti.output("Oh it's " + rival + "!");
if (introRepeating){
let seeQuahog = await ti.promptYesOrNo("Do you want to see Quahog?");

  if (seeQuahog=true) {(introRepeating=false);
 ti.output("Good answer!");
  }
}
