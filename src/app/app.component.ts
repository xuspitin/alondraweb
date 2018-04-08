import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

const defaultLanguage = "es";
const additionalLanguages = ["en"];
const languages: string[] = [defaultLanguage].concat(additionalLanguages);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.addLangs(additionalLanguages);
    let initLang = this.translate.getBrowserLang();
    if (languages.indexOf(initLang) === -1) {
        initLang = defaultLanguage;
    }
    this.translate.use(initLang);
  }
}
