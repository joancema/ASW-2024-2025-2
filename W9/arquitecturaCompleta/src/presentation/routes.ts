import { Router } from 'express';

import { CiudadanoRoutes } from './ciudadanos/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/ciudadanos', CiudadanoRoutes.routes );
    
    return router;
  }


}

