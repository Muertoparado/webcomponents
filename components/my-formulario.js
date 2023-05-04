import config from "./config.js";
export default class myFrom extends HTMLElement {
static url = import.meta.url
static async components(){
    return await ( await fetch (config.uri(myFrom))).text();
}
constructor(){
    super();
    this.attachShadow({mode : "open"});
}
handleEvent(e){
    (e.type ==="submit") ? this.enviarWorker(e) : undefined;
}
enviarWorker(e){
    console.log(e);
    e.preventDefault();
}
connectedCallback(){
    Promise.resolve(myFrom.components()).then(html=>{
        this.shadowRoot.innerHTML=html;
        this.Myform=this.shadowRoot.querySelector("form");
        this.Myform.addEventListener("submit", this.handleEvent.bind(this));
        })
    }
}
customElements.define(config.name(myFrom.url),myFrom)