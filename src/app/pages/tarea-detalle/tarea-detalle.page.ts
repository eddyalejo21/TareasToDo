import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Tarea, TareaService } from 'src/app/services/tarea.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.page.html',
  styleUrls: ['./tarea-detalle.page.scss'],
  standalone: false
})
export class TareaDetallePage implements OnInit {

  private route = inject(ActivatedRoute);
  private tareaServicio = inject(TareaService);
  private navCtrl = inject(NavController);
  private loadingCtrl = inject(LoadingController);
  public toastCtrl= inject(ToastController);

  task: Tarea = { id: '', titulo: '', descripcion: '', estado: false };
  isNew = true;
  isLoading = false;

  constructor() { }

  async  ngOnInit() {

    const taskId = this.route.snapshot.paramMap.get('tareaId');
    console.log('Tarea ID =>', taskId);
    if (taskId != null) {
      console.log('no es nuevo');
      this.isNew = false;
      this.isLoading = true;
      const tasks = await this.tareaServicio.obtenerTarea();
      this.task = tasks.find(t => t.id === taskId) || this.task;
      this.isLoading = false;
    } else {
      console.log('es nuevo');
      this.task.id = uuidv4();
    }

  }

  async saveTask() {
    const loading = await this.loadingCtrl.create({
      message: 'Guardando'
    });

    loading.present();

    if (this.isNew) {
      console.log('guarda');
      
      
      await this.tareaServicio.grabarTarea(this.task);
      loading.dismiss();
      this.presentToastInfo();
    } else {
      console.log('modifica');
      await this.tareaServicio.actualizarTarea(this.task);
      loading.dismiss();
      this.presentToastUpdate();
    }
    this.navCtrl.navigateBack('/home');
  }

  async deleteTask() {
    const loading = await this.loadingCtrl.create({
      message: 'Eliminando'
    });
    loading.present();
    await this.tareaServicio.eliminarTarea(this.task.id);
    loading.dismiss();
    this.navCtrl.navigateBack('/home');
  }

  async presentToastInfo() {
    const toast = await this.toastCtrl.create({
      message: 'Guardado Correctamente',
      duration: 2000,
      color: "secondary",
      position: "bottom"
    });
    toast.present();
  }

  async presentToastUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'Modificado Correctamente',
      duration: 2000,
      color: "primary",
      position: "bottom"
    });
    toast.present();
  }

  async presentToastDelete() {
    const toast = await this.toastCtrl.create({
      message: 'Eliminado Correctamente',
      duration: 2000,
      color: "danger",
      position: "bottom"
    });
    toast.present();
  }

}
