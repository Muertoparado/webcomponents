let pathName = new URL(import.meta.url).pathname;
let name =pathName.split("/").pop().replace(".js","");

export default class mySeccion extends HTMLElement{
    static async components(){
        return await(await fetch(pathName.replace(".js",".html"))).text();
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
        alert("botooon seccion");
    }
    connectedCallback(){
        Promise.resolve(mySeccion.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.mySeccion=this.shadowRoot.querySelector("#guardarseccion");
            this.mySeccion.addEventListener("click", this.handleEvent.bind(this));
            })
}
}
customElements.define(name,mySeccion);