import { Component } from "@angular/core";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public KPICards = [
    {
      title: 'Visitors this year',
      difference: '10% more than in 2022',
      value: 10230283,
    },
    {
      title: 'Visitors today',
      difference: '3% less than yesterday',
      value: 22397,
    },
    {
      title: 'Revenue today (€)',
      difference: '-36.955',
      value: 1231835,
    },
    {
      title: 'Number of dinasaur species',
      difference: '23 more than last year',
      value: 154,
    },
    {
      title: 'Open areas',
      difference: undefined,
      value: 17,
    },
    {
      title: 'Dangerous areas',
      difference: undefined,
      value: 0,
    }
  ];

}
