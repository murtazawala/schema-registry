import { IsNotEmptyObject, IsObject } from 'class-validator';

export class DemoDto {
  @IsObject()
  @IsNotEmptyObject()
  schema: object;
}
