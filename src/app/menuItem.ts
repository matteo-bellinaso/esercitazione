
export class menuItem{
    id: string;
    description: string;
    selected: boolean;
    
    constructor(id: string, description: string, selected = false){
        this.id = id;
        this.description = description;
        this.selected = selected;
    }
}