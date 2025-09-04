import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Do look");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
// remove previous outputs
ti.clear(); 

ti.output("Hello, " + name);
ti.output("I am Quagmire");


