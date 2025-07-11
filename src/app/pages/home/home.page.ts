import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tarea, TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  private tareaService = inject(TareaService);
  private navCtrl = inject(NavController);

  tasks: Tarea[] = [];
  filteredTasks: Tarea[] = [];
  isLoading = false;

  constructor() {} 

  async  ngOnInit() {
    await this.cargarTareas();
  }

  ionViewWillEnter() {
    // Recargar tareas cada vez que se entra en esta página
    this.cargarTareas();
  }

  async cargarTareas() {
    this.isLoading = true;
    this.tasks = await this.tareaService.obtenerTarea();
    this.filteredTasks = [...this.tasks];
    this.isLoading = false;
  }

  filterTareas(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredTasks = this.tasks.filter(tasks =>
      tasks.titulo.toLowerCase().includes(query)
    );
  }

  verDetalle(tareaId: string) {
    console.log('navega');
    this.navCtrl.navigateForward(`/tarea-detalle/${tareaId}`);
  }

  agregarTarea() {
    this.navCtrl.navigateForward(`/tarea-detalle`);
  }

}
