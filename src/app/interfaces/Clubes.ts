export interface Clubes {
    docs:          Doc[];
    totalDocs:     number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      null;
}

export interface Doc {
    id:          string;
    nombre:      string;
    logo:        Logo;
    descripcion: Descripcion[];
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Descripcion {
    children: Child[];
}

export interface Child {
    text: string;
}

export interface Logo {
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
    width:    number | null;
    height:   number | null;
    mimeType: null | string;
    filesize: number | null;
    filename: null | string;
    url?:     string;
}
