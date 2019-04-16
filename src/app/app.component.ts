import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    portfolioTypes:string[];
    selectedType:string;
    showSingle:boolean;
    projects:Object;
    currentProject:Object;

  constructor() {
    this.portfolioTypes = new Array("Featured Projects", "About Me", "Extra", "Contact");
    this.selectedType = this.portfolioTypes[0];
    this.showSingle = false;

    this.projects = new Array({
      'slug' : 'intertalk',
      'title' : 'InterTalk',
      'techs' : 'Laravel, Twill, Docker',
      'image' : '../assets/intertalk_image.png',
      },
      {
        'slug' : 'space_pizza',
        'title' : 'Space Pizza: The Game',
        'techs' : 'CreateJS',
        'image' : '../assets/space_pizza.png',
      }, 
      {
        'slug' : 'tidal_bore',
        'title': 'Tidal Bore App',
        'techs': 'Cordova',
        'image' : '../assets/tidal_bore.png',
      }
    );
  }

  showSingleProject = function(given:string) {
    this.projects.forEach(project => { if(project.slug === given) this.currentProject = project; });
    this.showSingle = true;
  }
}





