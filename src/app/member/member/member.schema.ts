// member.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Member extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  startDate: string;

  @Prop({ default: true })
  active: boolean;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
