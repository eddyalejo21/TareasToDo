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
    await this.loadTasks();
  }

  ionViewWillEnter() {
    // Recargar tareas cada vez que se entra en esta página
    this.loadTasks();
  }

  async loadTasks() {
    this.isLoading = true;
    this.tasks = await this.tareaService.getTasks();
    this.filteredTasks = [...this.tasks];
    this.isLoading = false;
  }

  filterTasks(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredTasks = this.tasks.filter(tasks =>
      tasks.titulo.toLowerCase().includes(query)
    );
  }

  navigateToDetail(tareaId: string) {
    console.log('navega');
    this.navCtrl.navigateForward(`/tarea-detalle/${tareaId}`);
  }

  addTask() {
    this.navCtrl.navigateForward(`/tarea-detalle`);
  }

}
