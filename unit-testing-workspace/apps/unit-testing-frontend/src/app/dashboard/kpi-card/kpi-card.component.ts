import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() difference?: string;

}
