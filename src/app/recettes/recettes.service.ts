import { Injectable } from "@angular/core";
import { Recettes } from "./recettes.model";

@Injectable({
  providedIn: "root"
})
export class RecettesService {
  private recettes: Recettes[] = [
    {
      id: "recette_1",
      title: "Pancakes pour 2",
      imageUrl: "assets/pancake.jpg",
      produits: {
        ingredients: ["Oeufs", "Lait", "Farine"],
        quantite: ["2", "1L", "100g"]
      }
    },
    {
      id: "recette_2",
      title: "Pates aux crevettes",
      imageUrl: "assets/pates.jpeg",
      produits: {
        ingredients: ["Crevettes", "Champignons", "Pates"],
        quantite: ["100g", "10g", "200G"]
      }
    },
    {
      id: "recette_3",
      title: "Tiep bou dien",
      imageUrl: "/assets/tiep.jpg",
      produits: {
        ingredients: ["Riz", "Carotte", "Choux", "Poisson", "Huile"],
        quantite: ["2Kg", "50g", "100G", "1", "10cl"]
      }
    }
  ];

  getAllRecettes() {
    return [...this.recettes];
  }

  getRecette(recetteId: string) {
    return {
      ...this.recettes.find(recette => {
        return recette.id == recetteId;
      })
    };
  }

  removeRecette(recetteId: string) {
    this.recettes = this.recettes.filter(recette => {
      return recette.id !== recetteId;
    });
  }

  /*
   *
   * Tester la fonction removeRecette avec la fonction SPLICE
   * removeRecette(recetteId : string) {
   * this.recettes.splice();
   * }
   *
   */

  constructor() {}
}
