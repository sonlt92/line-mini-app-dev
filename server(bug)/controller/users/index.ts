import { Request, Response } from 'express'
import { UserModel } from '../../database/models/User.model'
import IUser from '../../types/user'
const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await UserModel.find()
        res.status(200).json({ users })

    }
    catch (error) {
        throw error
    }
    console.info("Return user list!\n! Done!!!")
}
const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IUser, 'name' | 'furigana' | 'address' | 'phoneNumber'>
        const user: IUser = new UserModel({
            name: body.name,
            furigana: body.furigana,
            address: body.address,
            phoneNumber: body.phoneNumber,
        })
        const newUser: IUser = await user.save()
        const allUsers: IUser[] = await UserModel.find()
        res.status(201).json({ message: "User has been added!!", user: newUser, users: allUsers })
    } catch (error) {
        throw error
    }



    console.info("Add an user to user list!!!\n Done!")
}
const updateUser = async (req: Request, res: Response): Promise<void> => {
    console.info("Update an user !!!!")
}
const deleteUser = async (req: Request, res: Response): Promise<void> => {
    console.info("Delete an user !!!!")
}
export default { getUsers, addUser, updateUser, deleteUser }