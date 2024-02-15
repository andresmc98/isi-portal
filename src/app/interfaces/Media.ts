export interface Media {
    id:        string;
    filename:  string;
    mimeType:  string;
    filesize:  number;
    width:     number;
    height:    number;
    sizes:     Sizes;
    createdAt: Date;
    updatedAt: Date;
    url:       string;
}

export interface Sizes {
    thumbnail: Card;
    card:      Card;
    tablet:    Card;
}

export interface Card {
    width:    number;
    height:   number;
    mimeType: string;
    filesize: number;
    filename: string;
    url:      string;
}
