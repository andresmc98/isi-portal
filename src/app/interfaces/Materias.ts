export interface Materias {
    Materia:       Materia[];
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

export interface Materia {
    id:           string;
    nombre:       string;
    descripcion:  string;
    creditos:     number;
    eje:          string;
    horas:        number;
    requisitos:   Requisito[];
    seriada:      boolean;
    semestre:     string;
    link_temario: string;
    createdAt:    Date;
    updatedAt:    Date;
}

export interface Requisito {
    children:    RequisitoChild[];
    type?:       string;
    relationTo?: string;
    value?:      Value;
}

export interface RequisitoChild {
    text?:     string;
    children?: ChildChild[];
    type?:     string;
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
