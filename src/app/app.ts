import { Component } from '@angular/core';
import { ListaProductos } from './components/lista-productos/lista-productos';

@Component({
  selector: 'app-root',
  imports: [ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'gestion-productos';
}
