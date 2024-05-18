import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit{
  
  /* categorias: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.http.get<string[]>('/api/categorias').subscribe(
      (response) => {
        this.categorias = response;
      },
      (error) => {
        console.error('Error al obtener las categorías de platos:', error);
      }
    );
  }
  */
  categorias: string[] = ['Dim Sum', 'Arroz Frito', 'Pollo a la Naranja', 'Rollitos Primavera', 'Chow Mein'];

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías hacer una llamada HTTP para obtener las categorías desde el servidor
  }
}
