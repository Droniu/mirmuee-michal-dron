export interface Planet {
    id: string;
    name: string;
    rotationPeriod: number | null;
    orbitalPeriod: number | null;
    diameter: number | null;
    climates: string[];
    surfaceWater: number | null;
    population: number | null;
    filmConnection: {
        films: {
            id: string;
        }[];
    }
}

export interface Film {
    id: string;
    title: string;
}

export interface Data {
    films: Film[];
    planets: Planet[];

}