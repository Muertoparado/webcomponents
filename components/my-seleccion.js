let pathName = new URL(import.meta.url).pathname;
let name =pathName.split("/").pop().replace(".js","");

export default class mySeleccion extends HTMLElement{
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
            alert("botooon seleccion");
        }
        connectedCallback(){
            Promise.resolve(mySeleccion.components()).then(html=>{
                this.shadowRoot.innerHTML=html;
                this.mySeleccion=this.shadowRoot.querySelector("#guardarseleccion");
                this.mySeleccion.addEventListener("click", this.handleEvent.bind(this));
                })
    }
}
customElements.define(name,mySeleccion);