import db from '../models/index'
import CRUDService from '../services/CRUDservice'

let getHomePage = async(req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepage.ejs', {
            data : JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}

let getAboutPage = async(req, res) => {
    return res.render('aboutpage.ejs')
}

let getCRUD = async(req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async(req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    return res.send(message)
}

let displayCRUD = async(req, res) => {
    let allUsers = await CRUDService.getAllUsers();
    return res.render('displayusers.ejs', {allUsers})
}

let getEditCRUD = async(req, res) => {
    let userId = req.query.id
    if(userId){
        let userData = await CRUDService.getUserById(userId)
        return res.render('formedituser.ejs', {userData})
    }
    else{
        return res.send('Fail')
    }
}

let putCRUD = async(req, res) => {
    let data = req.body
    if(data){
        await CRUDService.updateUserData(data);
        return res.redirect('/display-crud')
    }
    else{
        return res.send('Edit Fail')
    }
}

let deleteCRUD = async(req, res) => {
    let id = req.query.id
    await CRUDService.deleteUser(id)
    return res.redirect('/display-crud')
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
}