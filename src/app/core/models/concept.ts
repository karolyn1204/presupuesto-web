interface ConceptRequired {
    operation: string;
    description: string;
    value: number;
}

interface ConceptOptionals{
    percentage: number;
}

export type Concept = Required<ConceptRequired> & Partial<ConceptOptionals>;
