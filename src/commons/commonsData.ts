export interface MainItem{
    contentid:number;
    title:string;
    address:string;
    hit:number;
    contenttype:number;
}

export interface TravelItem{
    contentid:number;
    title:string;
    address:string;
    hit:number;
    contenttype:number;
}

export interface MainData{
    slist:TravelItem[];
    blist:TravelItem[];
    jlist:TravelItem[];
}
