import { Component } from '@angular/core';
import { NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    portfolioTypes:string[];
    selectedType:string;
    showSingle:boolean;
    featuredProjects:Object;
    firstRoundProjects:Object;
    secondRoundProjects:Object;
    currentProject:Object;
    moreProjects:boolean;
    showHide:string;
    

  constructor() {
    this.portfolioTypes = new Array("Featured Projects", "About Me", "Contact");
    this.selectedType = this.portfolioTypes[0];
    this.showSingle = false;
    this.moreProjects = false;
    this.showHide = "More Projects";
    
    this.featuredProjects = new Array({
        'slug' : 'space_pizza',
        'title' : 'Space Pizza: The Game',
        'techs' : 'CreateJS',
        'image' : 'assets/space_pizza.png',
        'imageLarge' : 'assets/space_pizza_game_play.png'
      }, 
      {
        'slug' : 'tidal_bore',
        'title': 'Tidal Bore App',
        'techs': 'Cordova',
        'image' : 'assets/tidal_bore.png',
        'imageLarge' : 'assets/tidalbore_features.png'
      },
      {
      'slug' : 'fourth_avenue',
      'title' : 'Fourth Avenue',
      'techs' : 'Wordpress, PHP, Smarty',
      'image' : 'assets/fourth_ave.png',
      'imageLarge' : 'assets/fourth_ave_backend.png'
      },
    );

    this.firstRoundProjects = new Array({
        'slug' : 'address_book',
        'title' : 'Address Book',
        'techs' : 'PHP, Webpack, MySql',
        'image' : 'assets/address_book.png',
        'imageLarge' : 'assets/address_book_backend.png'
      }, 
      {
      'slug' : 'launchpad',
      'title' : 'launchpad',
      'techs' : 'ASP.NET CORE, Azure',
      'image' : 'assets/launchpad.png',
      },
    );
  }

  showSingleProject = function(given:string, which:string) {
    if(which === 'featured') {
      this.featuredProjects.forEach(project => {
        if(project.slug === given) {
          this.currentProject = project;
        }
      });
    } else if (which === 'first') {
      this.firstRoundProjects.forEach(project => {
        if(project.slug === given) {
          this.currentProject = project;
        }
      });
    } else if (which === 'second') {
      this.secondRoundProjects.forEach(project => {
        if(project.slug === given) {
          this.currentProject = project;
        }
      });
    }
    this.showSingle = true;
    this.moreProjects = false;
  }

  toggleMoreProjects = function() {
    if(this.moreProjects === false ) {
      this.showHide = "Collapse Projects";
      this.moreProjects = true;
    } else {
      this.showHide = "More Projects";
      this.moreProjects = false;
    }
  }
}





