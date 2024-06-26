import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuCategoriaServiceService } from '../menu-categoria-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit {
  menus: any[] = [];
  nuevoMenu: any = {};
  isUserAdmin: boolean = false;
  errorMessage: string = '';
  nombre: string = '';
  precio: number = 0;
  descripcion: string = '';
  img: string = '';
  categoria: string = '';

  constructor(public authService: AuthService, private menucategoria: MenuCategoriaServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerMenus();
    //this.crearMenu();
    this.isUserAdmin=this.authService.isAdmin();
  }

  obtenerMenus(): void {
    this.menucategoria.obtenerMenus().subscribe(
      (response) => {
        this.menus = response;
        // Agregar una propiedad para controlar la visibilidad de los platos
        this.menus.forEach(menu => menu.platosVisible = false);
      },
      (error) => {
        console.error('Error al obtener los menús:', error);
      }
    );
  }
  /*
  crearMenu(): void {
    this.http.post('http://localhost:3000/api/menu', this.nuevoMenu).subscribe(
        (response) => {
            console.log('Menú creado exitosamente:', response);
            // Actualizar la lista de menús después de crear el nuevo menú
            this.obtenerMenus();
            // Limpiar los campos del formulario después de crear el nuevo menú
            this.nuevoMenu = {};
        },
        (error) => {
            console.error('Error al crear el menú:', error);
        }
    );
}*/
crearMenu(): void {
  if (!this.authService.isAuthenticated()) {
    this.errorMessage = 'Debes iniciar sesión para crear una publicación';
    return;
  }

  if (!this.isUserAdmin) {
    this.errorMessage = 'Solo los administradores pueden crear publicaciones';
    return;
  }

  this.menucategoria.crearMenu(this.nombre, this.precio, this.descripcion, this.img, this.categoria).subscribe(
    response => {
      alert(response.message);
      this.nombre = '';
      this.precio = 0;
      this.descripcion = '';
      this.img = '';
      this.categoria = '';
      this.obtenerMenus();
    },
    error => {
      console.error(error);
      alert('Error al crear menú');
    }
  );
}

}
