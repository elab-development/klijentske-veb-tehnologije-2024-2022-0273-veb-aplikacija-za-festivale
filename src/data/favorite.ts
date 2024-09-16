import { IFavorite } from "./ifavorite";

interface Favorite {
    id: number;
    festivalId: number;
    name: string;
}

class Favorites implements IFavorite {
    public favorites: Favorite[] = [];
    public id: number = 0;  
    public addFavorite(festivalId: number, name: string) {
    
      for (const favorite of this.favorites) {
          if (favorite.festivalId === festivalId) {
            return;
          }
      }

      const id: number = this.id;
      const newFavorite: Favorite = {
        id,
        festivalId,
        name,
      };
      this.favorites.push(newFavorite);
      this.id = id + 1;
    }

    public removeFavorite(festivalId: number) {
        for (let i = 0; i < this.favorites.length; i++) {
          if (this.favorites[i].festivalId === festivalId) {
            this.favorites.splice(i, 1);
            return;
          }
        }

    }

}
  
export default Favorites;
  