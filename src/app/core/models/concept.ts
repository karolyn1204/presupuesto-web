interface ConceptRequired {
    operation: string;
    description: string;
    value: string;
}

interface ConceptOptionals{
    percentage: number;
}

export type Concept = Required<ConceptRequired> & Partial<ConceptOptionals>;
