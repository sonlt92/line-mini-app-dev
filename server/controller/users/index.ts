import { Request, Response } from 'express'
import { UserModel } from '../../models/User.model'
const getUsers = async (req: Request, res: Response): Promise<void> => {
    console.info("Return user list!!!!")
}
const addUser = async (req: Request, res: Response): Promise<void> => {
    console.info("Add an user to user list!!!!")
}
const updateUser = async (req: Request, res: Response): Promise<void> => {
    console.info("Update an user !!!!")
}
const deleteUser = async (req: Request, res: Response): Promise<void> => {
    console.info("Delete an user !!!!")
}
export default {getUsers,addUser,updateUser,deleteUser}