import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-sterilization',
  templateUrl: './sterilization.component.html'
})
export class SterilizationComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
