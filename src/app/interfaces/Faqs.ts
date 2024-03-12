export interface Faqs {
    Faq:           FAQ[];
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

export interface FAQ {
    id:        string;
    pregunta:  string;
    respuesta: Respuesta[];
    categoria: Categoria[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Categoria {
    id:          string;
    tag:         string;
    descripcion: string;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Respuesta {
    children:    RespuestaChild[];
    relationTo?: string;
    type?:       string;
    value?:      Value;
}

export interface RespuestaChild {
    text?:     string;
    children?: ChildChild[];
    linkType?: string;
    newTab?:   boolean;
    type?:     string;
    url?:      string;
}

export interface ChildChild {
    text: string;
}

export interface Value {
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
