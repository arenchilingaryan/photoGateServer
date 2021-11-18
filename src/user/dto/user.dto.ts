import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field(() => Int, { nullable: false }) id: number;
  @Field(() => String, { nullable: false }) username: string;
  @Field(() => String, { nullable: false }) password: string;
  @Field(() => String, { nullable: false }) firstName: string;
  @Field(() => String, { nullable: false }) lastName: string;
  @Field(() => String, { nullable: true }) avatar: string;
  // TODO: сделать поля с подтверждением e-mail или unvariable вместо значения
  @Field(() => String, { nullable: false }) email: string;
  @Field(() => Int, { nullable: true }) age: number;
  @Field(() => String, { nullable: true }) about: string;
  @Field(() => String, { nullable: true }) roles: string;
  @Field(() => String, { nullable: false }) country: string;
  @Field(() => String, { nullable: false }) city: string;
  // @Field(() => String, { nullable: true }) messages: string;
  // @Field(() => String, { nullable: true }) comments: string;
}
