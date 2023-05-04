let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myTabla extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        }

        handleEvent(e){
            (e.type ==="click") ? this.button(e) : undefined;
        }
        button(e){
            console.log(e);
            e.preventDefault();
            alert("botooon");
        }
        connectedCallback(){
            Promise.resolve(myTabla.components()).then(html=>{
                this.shadowRoot.innerHTML=html;
                this.myTabla=this.shadowRoot.querySelector("#button");
                this.myTabla.addEventListener("click", this.handleEvent.bind(this));
                })
    }
}

customElements.define(name,myTabla);
/* 
import config from "./config.js";
export default class myTabla extends HTMLElement {
static url = import.meta.url
static async components(){
    return await ( await fetch (config.uri(myTabla))).text();
}
constructor(){
    super();
    this.attachShadow({mode : "open"});
}
handleEvent(e){
    (e.type ==="submit") ? this.button(e) : undefined;
}
button(e){
    console.log(e);
    e.preventDefault();
    alert("botooon");
}
connectedCallback(){
    Promise.resolve(myTabla.components()).then(html=>{
        this.shadowRoot.innerHTML=html;
        this.Myform=this.shadowRoot.querySelector("button");
        this.Myform.addEventListener("submit", this.handleEvent.bind(this));
        })
    }
}
customElements.define(config.name(myTabla.url),myTabla) */