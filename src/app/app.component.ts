import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SEOService } from './_services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onActivate(event) {
    window.scroll(0, 0);
  }

  public constructor(
    private titleService: Title,
    private seoService: SEOService
  ) {
    seoService.addSeoData();
   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
