export class Serie{
    id: number;
    name: string;
    channel: string;
    season: number;

    constructor(id:number, name: string, channel: string, season: number){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.season = season;
    }
}