import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';


@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService],
})
export class AppModule { }
