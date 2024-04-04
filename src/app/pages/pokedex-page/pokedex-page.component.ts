import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss'],
  imports:[HeaderComponent]
})
export class PokedexPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
