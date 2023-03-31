import { Controller, Get } from '@nestjs/common';
import {
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer/interceptors';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  uploadFile(@UploadedFiles() file){
    console.log(file)
  }


  
  // @Post()
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     {
  //       name: 'profile',
  //       maxCount: 2,
  //     },
  //     {
  //       name: 'profile2',
  //       maxCount: 1,
  //     },
  //   ]),
  // )
  // uploadFile(
  //   @UploadedFiles()
  //   file: {
  //     profile?: Express.Multer.File[];
  //     profile2?: Express.Multer.File[];
  //   },
  // ): object {
  //   console.log(file);
  //   return {
  //     message: 'File Upload',
  //   };
  // }

  @Get(':imgpath')
  seeUploadFile(@Res() req, @Param('imgpath') image) {
    return req.sendFile(image, { root: 'img' });
  }
}
