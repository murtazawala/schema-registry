import { Document } from 'mongoose';

export interface Demo extends Document {
  readonly id: string;
  readonly subject: string;
  readonly version: string;
  readonly topicSchema: object;
}
