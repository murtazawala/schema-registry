import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: { createdAt: 'created_at' },
})
export class DemoModel {
  @Prop({ type: String, required: true })
  id: string;

  @Prop({ type: String, required: true })
  subject: string;

  @Prop({ type: String, required: true })
  version: string;

  @Prop({ type: Object, required: true })
  topicSchema: object;
}

export const DemoSchema = SchemaFactory.createForClass(DemoModel);
