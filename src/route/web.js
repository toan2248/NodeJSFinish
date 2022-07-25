import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)

    //rest api

    router.get('/about', homeController.getAboutPage)

    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/display-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);


    return app.use("/", router)
}

export default initWebRoutes;