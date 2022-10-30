import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

enum TaskStatus {
  COMPLETED = ' COMPLETED',
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',

}
export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public task: string

  @column()
  public description: string

  @column()
  public task_status: TaskStatus

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
