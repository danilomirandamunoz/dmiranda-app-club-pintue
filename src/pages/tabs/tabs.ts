import { Component } from '@angular/core';

import { SeriesPage } from '../series/series';
import { HomePage } from '../home/home';
import { ProfesionalesPage } from '../profesionales/profesionales';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SeriesPage;
  tab3Root = ProfesionalesPage;

  constructor() {

  }
}
