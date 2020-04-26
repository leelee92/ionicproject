import { Component, OnInit } from "@angular/core";
import { Recettes } from "./recettes.model";
import { RecettesService } from "./recettes.service";

@Component({
  selector: "app-recettes",
  templateUrl: "./recettes.page.html",
  styleUrls: ["./recettes.page.scss"]
})
export class RecettesPage implements OnInit {
  recettes: Recettes[];

  constructor(private recetteService: RecettesService) {}

  ngOnInit() {
    this.recettes = this.recetteService.getAllRecettes();
  }

  ngDoCheck() {
    this.recettes = this.recetteService.getAllRecettes();
  }
}
