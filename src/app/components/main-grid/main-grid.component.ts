import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent {
  public currentOption: string;
   constructor(private route: ActivatedRoute) {
      this.currentOption = this.route.snapshot.url[0].path;
   }
}
