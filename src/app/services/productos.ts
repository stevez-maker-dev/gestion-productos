import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  fechaAlta: Date;
}

@Injectable({
  providedIn: 'root',
})
export class Productos {

  private productos: Producto[] = [
    { id: 1, nombre: 'Teclado gamer', precio: 8500, fechaAlta: new Date('2024-01-15') },
    { id: 2, nombre: 'Mouse inalambrico', precio: 4500, fechaAlta: new Date('2025-02-26') },
    { id: 3, nombre: 'Monitor 27 pulgadas', precio: 305000, fechaAlta: new Date('2025-07-12') },
    { id: 4, nombre: 'Auriculares USB', precio: 6000, fechaAlta: new Date('2025-11-05') },
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  addProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  deleteProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}
