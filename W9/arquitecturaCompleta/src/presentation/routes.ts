import { Router } from 'express';

import { CiudadanoRoutes } from './ciudadanos/routes';
import { UserRoutes } from './users/routes';
import { StudentRoutes } from './students/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/ciudadanos', CiudadanoRoutes.routes );
    router.use('/api/users', UserRoutes.routes );
    router.use('/api/students', StudentRoutes.routes );
    
    return router;
  }


}

