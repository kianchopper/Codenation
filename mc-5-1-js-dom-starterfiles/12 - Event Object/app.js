class Bunny{
    constructor(name){
    this._name = name;
    this._hops = 0;
    }
    get name(){
    return this._name;
    }
    get hops(){
    return this._hops;
    }
    increaseHops(){
    this._hops++;
    } }
    const jordan = new Bunny("Jordan");
    const mina = new Bunny("Mina");
    const lance = new Bunny("Lance");
    const rebecca = new Bunny("Rebecca");
    const fernanda = new Bunny("Fernanda");
    const paula = new Bunny("Paula");
    const pedro = new Bunny("Pedro");
    const danny = new Bunny("Danny");
    const kian = new Bunny("Kian");
    const jessica = new Bunny("Jessica the fav");
    console.log(jordan.name);
    console.log(mina.name);
    console.log(lance.name);
    console.log(rebecca.name);
    console.log(fernanda.name);
    console.log(paula.name);
    console.log(pedro.name);
    console.log(danny.name);
    console.log(kian.name);
    console.log(jessica.name);
    
    console.log(jordan._hops);
    console.log(mina._hops);
    console.log(lance._hops);
    
    jordan.increaseHops();
    jordan.increaseHops();
    mina.increaseHops();
    console.log(jordan._hops);
    console.log(mina._hops);
    console.log(lance._hops);