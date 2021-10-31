import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  login: string;
  @Field()
  about: string;
  @Field({ nullable: true })
  city: string;
}
