import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demo } from './entity/demo.entity';
import { DemoModel } from './mongodb/schema/demo.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(DemoModel.name) private demoModel: Model<Demo>) {}

  async getSchemaById(id: string) {
    return await this.demoModel.find({
      id: id,
    });
  }

  async getSchemaBySubjectAndVersion(subject: string, version: string) {
    return await this.demoModel.find({
      subject: subject,
      version: version,
    });
  }

  async getSchemaBySubject(subject: string) {
    const data = await this.demoModel.find({
      subject: subject,
    });
    return data;
  }

  async getLatestSchema(subject: string) {
    const data = await this.demoModel
      .find({
        subject: subject,
      })
      .sort({ createdAt: -1 });
    if (data.length > 0) {
      return data[0];
    }
    return data;
  }

  async registerSchema(subject: string, schema: object) {
    const id = Math.random().toString();
    return await this.demoModel.create({
      id: id,
      subject: subject,
      topicSchema: schema,
      version: schema['version'] ? schema['version'] : 1,
    });
  }
}
