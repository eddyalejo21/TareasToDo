import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private readonly TASKS_KEY = 'tareas';

  async getTasks(): Promise<Tarea[]> {
    const { value } = await Preferences.get({ key: this.TASKS_KEY });
    return value ? JSON.parse(value) : [];
  }

  async saveTask(task: Tarea): Promise<void> {
    const tasks = await this.getTasks();
    tasks.push(task);
    await Preferences.set({ key: this.TASKS_KEY, value: JSON.stringify(tasks) });
  }

  async updateTask(updatedTask: Tarea): Promise<void> {
    let tasks = await this.getTasks();
    tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
    await Preferences.set({ key: this.TASKS_KEY, value: JSON.stringify(tasks) });
  }

  async deleteTask(id: string): Promise<void> {
    const tasks = await this.getTasks();
    const updatedTasks = tasks.filter(task => task.id !== id);
    await Preferences.set({ key: this.TASKS_KEY, value: JSON.stringify(updatedTasks) });
  }


}
