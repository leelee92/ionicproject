export interface Recettes {
  id: string;
  title: string;
  imageUrl: string;
  produits: {
    ingredients: string[];
    quantite: string[];
  };
}
