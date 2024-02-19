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
    respuesta: string;
    categoria: string;
    createdAt: Date;
    updatedAt: Date;
}
