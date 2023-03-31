import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UploadModule,MulterModule.register({
    dest:'./img'

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
