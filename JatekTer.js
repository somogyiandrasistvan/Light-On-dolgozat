import Lampa from "../Lampa.js";

class Jatekter {
  #db;
  #allapotLista = [];
  #meret;
  #lepes;
  constructor() {
    let db = 0;
    this.#db = db;
    let meret = 9;
    this.#meret = meret;
    //this.#lepes = lepes;
    let allapot;
    for (let index = 0; index < meret; index++) {
      let valoszinuseg = Math.floor(Math.random() * 100);
      if (valoszinuseg < 20) {
        allapot = 1;
        db++;
      } else {
        allapot = 0;
      }
      this.#allapotLista[index] = allapot;
      console.log(this.#allapotLista);
    }
    this.#setAllapotLista();

    $(window).on("kattint", (event) =>{
        this.#szomszedokKeresese(event.detail)
    })
  }


  #setAllapotLista() {
    const ARTICLE = $("article");
    for (let index = 0; index < this.#allapotLista.length; index++) {
      const lampa = new Lampa(index, this.#allapotLista[index], ARTICLE);
    }
  }

  #szomszedokKeresese(id) {
    let szomszed = id - 1;
    let szomszed2 = id + 1;
    console.log(szomszed, szomszed2)
    for (let index = 0; index < this.#allapotLista.length; index++) {
        if(index == szomszed || index == szomszed2 || index == id){
            if(this.#allapotLista[index] === 1){
                this.#allapotLista[index] = 0
            }
            else{
                this.#allapotLista[index] = 1
            }
        }
    }
    
    this.#init()

  }

  #init() {
    const DIV = $("div");
    DIV.remove();
    this.#setAllapotLista();
  }
  #ellenorzes() {
    const ARTICLE = $("article");
    for (let index = 0; index < this.#allapotLista.length; index++) {
        if(this.#allapotLista == 0){
            
        }
        
    }
  }
}

export default Jatekter;
