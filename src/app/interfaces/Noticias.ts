export interface Noticias {
    Noticia:       Noticia[];
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

export interface Noticia {
    id:               string;
    titulo:           string;
    image:            Image;
    tag:              Tag[];
    autorPortal:      string;
    fechaPublicacion: Date;
    contenido:        Contenido[];
    createdAt:        Date;
    updatedAt:        Date;
    activa:           boolean;
    autor:            Autor[];
    fuente:           string;
    pieDeFoto:        string;
    resumen:          string;
}

export interface Autor {
    id:        string;
    nombre:    string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Contenido {
    children:    ContenidoChild[];
    type?:       string;
    relationTo?: string;
    value?:      null;
}

export interface ContenidoChild {
    text?:     string;
    children?: PurpleChild[];
    type?:     string;
}

export interface PurpleChild {
    text?:     string;
    children?: FluffyChild[];
    linkType?: string;
    newTab?:   boolean;
    type?:     string;
    url?:      string;
}

export interface FluffyChild {
    text: string;
}

export interface Image {
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

export interface Tag {
    id:          string;
    tag:         string;
    descripcion: string;
    createdAt:   Date;
    updatedAt:   Date;
}
