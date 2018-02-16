export class listItem{
    id: string;
    nome_gioco: string;
    description: string;
    price : string;
    
    constructor(id: string, nome_gioco : string ,description: string, price: string){
        this.id = id;
        this.nome_gioco = nome_gioco;
        this.description = description;
        this.price = price;
    }
}