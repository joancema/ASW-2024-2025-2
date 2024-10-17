import { Router } from 'express';
import { CiudadanosController } from './controller';


export class CiudadanoRoutes {


  static get routes(): Router {

    const router = Router();

    const ciudadanoController = new CiudadanosController();

    router.get('/', ciudadanoController.getCiudadanos );
    router.get('/:id', ciudadanoController.getCiudadanoById );
    
    router.post('/', ciudadanoController.createCiudadano );
    router.put('/:id', ciudadanoController.updateCiudadano );
    router.delete('/:id', ciudadanoController.deleteCiudadano );


    return router;
  }


}

