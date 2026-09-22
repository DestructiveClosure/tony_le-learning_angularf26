const uuid = self.crypto.randomUUID;

export interface Recipe {
    id: number | typeof uuid,
    name: string,
    description: string,
    rating: number,
    image?: string,
    country: string,
    onMenu?: boolean,
}

