import { v4 as uuidv4 } from 'uuid';

let users = []

export const getUsers = (req,res)=>{
    res.send(users);
}

export const createUser = (req,res)=>{
    const userDetails = req.body;

    
    users.push({...userDetails, id:uuidv4()});

    
    res.send(users);
}

export const getUser = (req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user)=>user.id===id)
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    const {id } = req.params;

    users = users.filter((user)=>user.id!==id)
    console.log(`user with id : ${id} deleted`);
}

export const updateUser = (req,res)=>{
    const {id} = req.params
    
    const {name,lastName,age} = req.body;
    const usertobeUpdate = users.find((user)=>user.id===id)
    if(name) usertobeUpdate.name = name
    if(lastName) usertobeUpdate.lastName = lastName
    if(age) usertobeUpdate.age = age

    console.log(`user with id ${id} updated`);
}


