export interface Devs {
    Dev:           Dev[];
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

export interface Dev {
    id:             string;
    nombre:         string;
    foto:           Foto;
    rol:            string;
    descripcion:    string;
    redes_sociales: RedesSociale[];
    createdAt:      Date;
    updatedAt:      Date;
}

export interface Foto {
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

export interface RedesSociale {
    link_insta: string;
    link_x:     string;
    github:     string;
    linkedin:   string;
    id:         string;
}
