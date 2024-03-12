export interface Faqs {
    Maestro:       Maestro[];
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

export interface Maestro {
    id:                  string;
    nombre:              string;
    foto:                Foto;
    descripcion:         string;
    tipo:                string;
    contacto:            Contacto[];
    redes_sociales:      RedesSociale[];
    formacion_academica: FormacionAcademica[];
    experiencia_laboral: ExperienciaLaboral[];
    proyectos:           Proyecto[];
    investigaciones:     Investigacione[];
    createdAt:           Date;
    updatedAt:           Date;
}

export interface Contacto {
    correo_inst: string;
    cubiculo:    string;
    id:          string;
}

export interface ExperienciaLaboral {
    nombre_empresa:  string;
    descripcion_exp: string;
    fecha_inicio:    Date;
    fecha_fin:       Date;
    id:              string;
}

export interface FormacionAcademica {
    nombre_institucion: string;
    certificacion:      string;
    fecha_obtencion:    string;
    id:                 string;
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

export interface Investigacione {
    nombre_inv:      string;
    descripcion_inv: Descripcion[];
    id:              string;
}

export interface Descripcion {
    children:    DescripcionInvChild[];
    type?:       string;
    relationTo?: string;
    value?:      Foto;
}

export interface DescripcionInvChild {
    text?:     string;
    children?: ChildChild[];
    type?:     string;
}

export interface ChildChild {
    text: string;
}

export interface Proyecto {
    nombre_proyecto:      string;
    descripcion_proyecto: Descripcion[];
    id:                   string;
}

export interface RedesSociale {
    nombre_red: string;
    link_red:   string;
    id:         string;
}
