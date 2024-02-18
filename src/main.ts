import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './core/exceptions/http-exception.filter';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });

  app.use(helmet());

  const port = process.env.PORT || 3001;
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('BENTECH')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config);
    fs.writeFileSync(`${process.cwd()}/swagger.json`, JSON.stringify(document, null, 2), { encoding: 'utf8' });
    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            docExpansion: 'none',
            displayOperationId: true,
        },
    });

  await app.listen(port);
}
bootstrap();




  


