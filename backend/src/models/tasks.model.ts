import { prop as Property, getModelForClass, modelOptions} from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType({ description: 'The Task Model' })
@modelOptions({ schemaOptions: { collection: 'tasks', timestamps: true } })
export class Task {
  @Field(() => ID)
  id: string

  @Field()
  @Property({ type: () => String, required: true })
  body: string;

  @Field({ nullable: true })
  @Property({ type: Boolean, required: false })
  isCompleted: boolean;

  @Field()
  @Property({ required: true, default: Date.now })
  createdAt: Date;
}

export const TaskModel = getModelForClass(Task);
