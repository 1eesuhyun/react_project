export interface MainItem{
    contentid:number;
    title:string;
    address:string;
    hit:number;
    contenttype:number;
    image1:string;
}

export interface TravelItem{
    contentid:number;
    title:string;
    address:string;
    hit:number;
    contenttype:number;
    image1:string;
}

export interface MainData{
    slist:TravelItem[];
    blist:TravelItem[];
    jlist:TravelItem[];
}
