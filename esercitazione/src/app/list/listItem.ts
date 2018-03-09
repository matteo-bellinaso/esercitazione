
export class listItem{

    id : string;
    url : string
    name: string;
    description: string;
    price : string;
    release : string;

constructor(id : string,url:string ,name: string, description : string, price: string, release: string){
    this.id = id;
    this.url = url
    this.name = name;
    this.description = description;
    this.price = price;
    this.release = release;
}

setName(name){
    this.name = name;
}
setGenere(description){
this.description = description;
}
setPrice(price){
    this.price = price;
}




}