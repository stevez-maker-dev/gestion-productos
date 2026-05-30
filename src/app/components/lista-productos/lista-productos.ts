import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Productos, Producto } from '../../services/productos';
import { DescuentoPipe } from '../../pipes/descuento-pipe'

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, FormsModule, DescuentoPipe],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  productos: Producto[] = [];
  nuevoNombre = '';
  nuevoPrecio: number | null = null;

  constructor(private productosService: Productos) {}

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }

  agregar(): void {
    if(!this.nuevoNombre || !this.nuevoPrecio) return;

    const nuevo: Producto = {
      id: Date.now(),
      nombre: this.nuevoNombre,
      precio: this.nuevoPrecio,
      fechaAlta: new Date(),
    };

    this.productosService.addProducto(nuevo);
    this.nuevoNombre = '';
    this.nuevoPrecio = null;
  };

  eliminar(id: number): void {
    this.productosService.deleteProducto(id);
    this.productos = this.productosService.getProductos();
  }
}
