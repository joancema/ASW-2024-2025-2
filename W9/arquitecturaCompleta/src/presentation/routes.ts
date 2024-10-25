import { Router } from 'express';

import { CiudadanoRoutes } from './ciudadanos/routes';
import { UserRoutes } from './users/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/ciudadanos', CiudadanoRoutes.routes );
    router.use('/api/users', UserRoutes.routes );
    
    return router;
  }


}

