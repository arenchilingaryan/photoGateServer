import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserCreateInputDto {
  @Field(() => String, { nullable: false }) username: string;
  @Field(() => String, { nullable: false }) password: string;
  @Field(() => String, { nullable: false }) firstName: string;
  @Field(() => String, { nullable: false }) lastName: string;
  @Field(() => String, { nullable: true }) avatar: string;
  @Field(() => String, { nullable: false }) email: string;
  @Field(() => Int, { nullable: true }) age: number;
  @Field(() => String, { nullable: true }) about: string;
  @Field(() => String, { nullable: true }) roles: string;
  @Field(() => String, { nullable: false }) country: string;
  @Field(() => String, { nullable: false }) city: string;
}
