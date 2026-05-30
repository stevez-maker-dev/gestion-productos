import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
  standalone: true
})
export class DescuentoPipe implements PipeTransform {

  transform(precio: number, porcentaje: number): number {
    return precio - (precio * porcentaje / 100);
  }
}
