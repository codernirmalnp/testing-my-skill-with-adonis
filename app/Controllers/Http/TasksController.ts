import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Task from 'App/Models/Task';


export default class TasksController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 3

    const task = await Database.from('tasks').paginate(page, limit)


    return task;
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(['task', 'description', 'task_status'])
    await Database
      .insertQuery() // 👈 gives an instance of insert query builder
      .table('tasks')
      .insert(data)
    return { success: true }
  }

  public async store({ }: HttpContextContract) { }

  public async show({ params }: HttpContextContract) {
    const task = await Task.find(params.id)
    return task;

  }

  public async edit({ }: HttpContextContract) {

  }

  public async update({ params, request }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)
    const update = await task.merge(request.only(['task', 'description', 'task_status'])).save()
    return update;

  }

  public async destroy({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    return task;
  }
}
