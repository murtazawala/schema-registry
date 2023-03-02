import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { DemoDto } from './demo.dto';

@Controller('/schemas')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  async getSchemayId(@Param('id') id: string, @Res() response: Response) {
    const schema = await this.appService.getSchemaById(id);
    return response.send({ schema });
  }

  @Get('/:subject/versions/:version')
  async getSchemaBySubjectAndVersion(
    @Param('subject') subject,
    @Param('version') version,
    @Res() response: Response,
  ) {
    const schema = await this.appService.getSchemaBySubjectAndVersion(
      subject,
      version,
    );
    return response.send({ schema });
  }

  @Get('/:subject/versions')
  async getSchemaBySubject(
    @Param('subject') subject,
    @Res() response: Response,
  ) {
    const schema = this.appService.getSchemaBySubject(subject);
    return response.send({ schema });
  }

  @Get('/:subject/latest/versions')
  async getLatestSchema(
    @Param('subject') subject: string,
    @Res() response: Response,
  ) {
    const schema = await this.appService.getLatestSchema(subject);
    return response.send({ schema });
  }

  @Post('/:subject/versions')
  async registerSchema(
    @Param('subject') subject,
    @Body() body: DemoDto,
    @Res() response: Response,
  ) {
    const schema = await this.appService.registerSchema(subject, body.schema);
    return response.send({ schema });
  }
}
