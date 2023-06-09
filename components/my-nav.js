let pathName = new URL(import.meta.url).pathname;
let name =pathName.split("/").pop().replace(".js","");

export default class myNav extends HTMLElement{
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
        alert("botooon nav");
    }
    connectedCallback(){
        Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.myNav=this.shadowRoot.querySelector("#guardarnav");
            this.myNav.addEventListener("click", this.handleEvent.bind(this));
            })
}
}
customElements.define(name,myNav);