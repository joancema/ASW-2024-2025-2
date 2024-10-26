import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina los campos que no esten en el DTO
      forbidNonWhitelisted: true, // Manda error si hay campos no permitidos
      transform: true, // Convierte los tipos
    })
  )
  await app.listen(3000);
}
bootstrap();
