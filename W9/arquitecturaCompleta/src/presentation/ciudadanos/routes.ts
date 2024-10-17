import { Router } from 'express';
import { CiudadanosController } from './controller';
import { CiudadanoDatasourceImpl } from '../../infrastructure/datasource/ciudadano.datasource.impl';
import { CiudadanoRepositoryImpl } from '../../infrastructure/repositories/ciudadano.repository.impl';


export class CiudadanoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new CiudadanoDatasourceImpl();
    const ciudadanoRepository = new CiudadanoRepositoryImpl( datasource );
    const ciudadanoController = new CiudadanosController(ciudadanoRepository);

    router.get('/', ciudadanoController.getCiudadanos );
    router.get('/:id', ciudadanoController.getCiudadanoById );
    
    router.post('/', ciudadanoController.createCiudadano );
    router.put('/:id', ciudadanoController.updateCiudadano );
    router.delete('/:id', ciudadanoController.deleteCiudadano );


    return router;
  }


}

