export interface IFavorite {
    addFavorite(festivalId: number, name: string): void;
    removeFavorite(festivalId: number): void;
}

