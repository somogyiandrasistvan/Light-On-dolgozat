class Lampa {
  #allapot;
  #id;
  #divElem;

  constructor(id, allapot, szuloElem) {
    this.#allapot = allapot;
    this.#id = id;
    if (allapot == 1) {
      szuloElem.append(`<div id=${id} style="${this.#szinBeallit(allapot)}"${allapot}></div>`);
    } else {
      szuloElem.append(`<div id=${id} style="${this.#szinBeallit(allapot)}"${allapot}></div>`);
    }
    this.#divElem = szuloElem.children("div:last-child");

    this.#divElem.on("click", () => {
      this.setAllapot(allapot);
      this.#kattintasTrigger("kattint");
    });
  }

  setAllapot(allapot) {
    if (allapot === 1) {
      allapot = 0;
      this.#divElem.attr("style", this.#szinBeallit(allapot));
    }
    else{
        allapot = 1;
        this.#divElem.attr("style", this.#szinBeallit(allapot));
    }
  }

  #szinBeallit(allapot) {
    if (allapot === 1) {
      return 'background:green';
    } else {
      return 'background:yellow';
    }
  }

  #kattintasTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: this.#id });
    window.dispatchEvent(E);
    
  }
}

export default Lampa;
