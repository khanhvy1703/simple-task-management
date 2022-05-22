import { Field, InputType, ID } from 'type-graphql';
import { Task } from '../../models/tasks.model';

@InputType()
export class TaskType implements Partial<Task> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  body?: string;

  @Field({ nullable: true })
  isCompleted: boolean;
}