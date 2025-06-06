import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { NatsModule } from './transports/nats.module';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { EnterprisesModule } from './enterprises/enterprises.module';
import { EntitiesModule } from './entities/entities.module';
import { EntityTypesModule } from './entity-types/entity-types.module';


@Module({
  imports: [ProductsModule, OrdersModule, NatsModule, AuthModule, StudentsModule, EnterprisesModule, EntitiesModule, EntityTypesModule],
})
export class AppModule {}
