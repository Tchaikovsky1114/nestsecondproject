import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      // whitelist만 사용할때에는 DTO에 명시되어 있지 않은 property를 제거하고 함수를 실행하지만
      // forbidNonWhitelisted를 사용하면 exception 처리가 가능하다.
      forbidNonWhitelisted:true,
      // 서버가 원하는 실제 타입으로 변환해준다.(type에 명시되어 있는 타입으로 변환)
      transform:true
    })
  )
  await app.listen(3000);
}
bootstrap();
