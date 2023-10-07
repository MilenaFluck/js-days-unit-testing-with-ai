import { Component } from "@angular/core";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public KPICards = [
    {
      title: 'Besucher dieses Jahr',
      difference: '10% mehr als 2022',
      value: 10230283,
    },
    {
      title: 'Besucher heute',
      difference: '3% weniger als gestern',
      value: 22397,
    },
    {
      title: 'Einnahmen heute (€)',
      difference: '-36.955',
      value: 1231835,
    },
    {
      title: 'Anzahl Dinosaurier Spezies',
      difference: '23 mehr als letztes Jahr',
      value: 154,
    },
    {
      title: 'Geöffnete Bereiche',
      difference: undefined,
      value: 17,
    },
    {
      title: 'Gefährdete Bereiche',
      difference: undefined,
      value: 0,
    }
  ];

}
