import db from '../models/index'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10);

let createNewUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === 1 ? "Nam" : "Nữ",
                roleId: data.roleId,
            })
            resolve("Create Succedd!!!")
        } catch (error) {
            reject(error)
        }

    })
}

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
             let hashPassword = await bcrypt.hashSync(password, salt);
             resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUsers = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let allUsers = await db.User.findAll({raw : true})
            resolve(allUsers);
        } catch (error) {
            reject(error)
        }
    })
}

let getUserById = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({where : {id : id}, raw : true})
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userEdit = await db.User.findOne({where : {id : data.id}})
            if(userEdit){
                userEdit.set({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phonenumber: data.phonenumber
                })

                userEdit.save()

                resolve()
            }
            else{
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUser = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({where : {id : id}})
            if(user){
               await user.destroy()
                resolve()
            }
            else{
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUserData,
    deleteUser,
}