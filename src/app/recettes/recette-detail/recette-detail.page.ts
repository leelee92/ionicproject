import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recettes } from '../recettes.model';
import { AlertController } from '@ionic/angular';
import { RecettesService } from '../recettes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {

  recette : Recettes
  removeRecette () {
  
   this.alertCtrl.create({
      message: 'Voulez vous supprimer la recette ?',
      header: 'Attention',
      buttons: [{
        text: 'Non',
        handler: () => {
        console.log('Annulé cliqué');
        }
      },
      {
        text: 'Oui, supprimer',
        handler: () => {  
        this.recetteService.removeRecette(this.recette.id);
        this.router.navigate(['/recettes']);
        }
      }]
    }).then(alertElement => {
      alertElement.present();
    });
  }
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetteService: RecettesService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if(!param.has('recetteId')){
        return;
      } else {
        const recetteId = param.get('recetteId');
        this.recette = this.recetteService.getRecette(recetteId);
      }
    })
  }

}
