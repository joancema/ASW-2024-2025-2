import { Router } from 'express';
import { CiudadanosController } from './controller';


export class CiudadanoRoutes {


  static get routes(): Router {

    const router = Router();

    const ciudadanoController = new CiudadanosController();

    router.get('/', ciudadanoController.getCiudadanos );
    router.get('/:id', ciudadanoController.getCiudadanoById );
    
    router.post('/', ciudadanoController.createCiudadano );


    return router;
  }


}

