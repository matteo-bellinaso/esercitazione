
export class listItem{

    id : string;
    url : string
    name: string;
    description: string;
    price : string;
    release : Date;
    releasePicker: any;

constructor(id : string,url:string ,name: string, description : string, price: string, release: Date){
    this.id = id;
    this.url = url
    this.name = name;
    this.description = description;
    this.price = price;
    this.release = release;
    this.releasePicker = { date: { year: release.getFullYear(), month: release.getMonth()+1, day: release.getDate() } };
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
setRelease(date){
    this.releasePicker = { date: { year: date.getFullYear(), month: date.getMonth()+1, day: date.getDate() } };
    this.release = this.releasePicker;
}

}