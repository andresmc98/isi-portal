export interface Noticias {
    docs: Doc[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null;
    nextPage: null;
}

export interface Doc {
    id: string;
    titulo: string;
    image: Image;
    tag: string;
    autorPortal: string;
    fechaPublicacion: Date;
    contenido: Contenido[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Contenido {
    children: ContenidoChild[];
    type?: string;
    relationTo?: string;
    value?: Image;
}

export interface ContenidoChild {
    text?: string;
    children?: PurpleChild[];
    type?: string;
}

export interface PurpleChild {
    text?: string;
    children?: FluffyChild[];
    linkType?: string;
    newTab?: boolean;
    type?: string;
    url?: string;
}

export interface FluffyChild {
    text: string;
}

export interface Image {
    id: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    sizes: Sizes;
    createdAt: Date;
    updatedAt: Date;
    url: string;
}

export interface Sizes {
    thumbnail: Card;
    card: Card;
    tablet: Card;
}

export interface Card {
    width?: number;
    height?: number;
    mimeType?: string;
    filesize?: number;
    filename?: string;
    url?: string;
}