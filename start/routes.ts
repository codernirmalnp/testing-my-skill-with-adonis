/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {
  return { welcome: 'Welecome to todo Application of Nirmal' }
})
Route.get('/task', 'TasksController.index')
Route.post('/task', 'TasksController.create')
Route.get('/task/:id?', 'TasksController.show')
Route.patch('/task/:id?', 'TasksController.update')
Route.delete('/task/:id?', 'TasksController.destroy')
