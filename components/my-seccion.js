let pathName = new URL(import.meta.url).pathname;
let name =pathName.split("/").pop().replace(".js","");

export default class mySeccion extends HTMLElement{
    static async components(){
        return await(await fetch(pathName.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(mySeccion.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
        })
        console.log("etiqueta seccion");
    }
}
customElements.define(name,mySeccion);