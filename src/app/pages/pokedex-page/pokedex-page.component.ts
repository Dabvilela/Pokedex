import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';

@Component({
  standalone: true,
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss'],
  imports:[HeaderComponent, SidebarComponent]
})
export class PokedexPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
