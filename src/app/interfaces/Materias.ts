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
    horas:        number;
    requisitos:   string;
    semestre:     string;
    link_temario: string;
    createdAt:    Date;
    updatedAt:    Date;
}
