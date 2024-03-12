export interface Clubes {
    docs:          Club[];
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

export interface Club {
    id:                 string;
    nombre:             string;
    logo:               Logo;
    descripcion:        string;
    profesor_encargado: string;
    lideres:            string;
    ubicacion:          string;
    redes_sociales:     RedesSociale[];
    servicios:          Servicio[];
    proyectos:          Proyecto[];
    createdAt:          Date;
    updatedAt:          Date;
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

export interface Proyecto {
    nombre_proyecto:      string;
    descripcion_proyecto: Descripcion[];
    id:                   string;
}

export interface Descripcion {
    children:    DescripcionProyectoChild[];
    type?:       string;
    relationTo?: string;
    value?:      Logo;
}

export interface DescripcionProyectoChild {
    text?:     string;
    children?: ChildChild[];
    type?:     string;
}

export interface ChildChild {
    text: string;
}

export interface RedesSociale {
    nombre_red: string;
    link_red:   string;
    id:         string;
}

export interface Servicio {
    nombre_servicio:      string;
    descripcion_servicio: Descripcion[];
    id:                   string;
}
