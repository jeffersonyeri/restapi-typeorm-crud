import {Request, Response} from 'express';
import {User} from '../entities/user';

export const createUser = async (req: Request, res: Response) => {
    try {
        const {firstname, lastname} = req.body;

        const user = new User();
        user.firstName = firstname;
        user.lastName = lastname;

        await user.save();

        return res.json(user);
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await User.findOneBy({id: parseInt(id)});
        
        if(!user) return res.status(404).json({message: "User not found"});
        console.log(id);
        await User.update({id: parseInt(id)}, req.body);
        console.log(id);
        return res.sendStatus(204);

    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await User.delete({id: parseInt(id)});
        
        if(!result.affected) return res.status(404).json({message: "User not found"});

        return res.sendStatus(204);

    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findOneBy({id: parseInt(id)});
        return res.json(user);
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}