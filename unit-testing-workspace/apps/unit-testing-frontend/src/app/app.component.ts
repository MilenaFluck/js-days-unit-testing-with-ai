import { Component } from '@angular/core';

@Component({
  selector: 'unit-testing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public links = [
    {name: 'Dashboard', href: '/', icon: 'dashboard'},
    {name: 'Dinosaurs', href: '/dino', icon: 'pets'},
    {name: 'Parks', href: '/parks', icon: 'map'}
  ];
}
