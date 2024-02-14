export interface Materias {
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
    id:           string;
    nombre:       string;
    descripcion:  string;
    creditos:     string;
    semestre:     string;
    maestros:     string;
    link_temario: string;
    createdAt:    Date;
    updatedAt:    Date;
    requisitos:   string;
    seriada:      string;
}
