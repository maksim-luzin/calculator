import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecordDocument = Record & Document;

@Schema({ timestamps: true })
export class Record {
  @Prop()
  record: Array<string>;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
