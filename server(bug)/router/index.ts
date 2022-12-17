import { Router } from 'express'
import getUsers  from '../controller/users'
import deleteUser  from '../controller/users'
import updateUser from '../controller/users'
import addUser from '../controller/users'
// , updateUser, deleteUser
const router: Router = Router()
router.get('/users', getUsers)
router.post('/add_user', addUser)
router.put('/edit_user/:id',updateUser)
router.delete('/delete_user/:id',deleteUser)

