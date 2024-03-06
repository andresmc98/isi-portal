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
    mimeType:  MIMEType;
    filesize:  number;
    width:     number;
    height:    number;
    sizes:     Sizes;
    createdAt: Date;
    updatedAt: Date;
    url:       string;
}

export enum MIMEType {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export interface Sizes {
    thumbnail: Card;
    card:      Card;
    tablet:    Card;
}

export interface Card {
    width:    number | null;
    height:   number | null;
    mimeType: MIMEType | null;
    filesize: number | null;
    filename: null | string;
    url?:     string;
}

export interface Proyecto {
    nombre_proyecto:      string;
    descripcion_proyecto: string;
    imagen_proyecto:      ImagenProyecto[];
    id:                   string;
}

export interface ImagenProyecto {
    imagen_proyecto: Logo;
    id:              string;
}

export interface RedesSociale {
    nombre_red: string;
    link_red:   string;
    id:         string;
}

export interface Servicio {
    nombre_servicio:      string;
    descripcion_servicio: string;
    imagen_servicio:      ImagenServicio[];
    id:                   string;
}

export interface ImagenServicio {
    imagen_servicio: Logo;
    id:              string;
}
