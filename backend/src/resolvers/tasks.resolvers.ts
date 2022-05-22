import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql';
import { TaskModel, Task } from '../models/tasks.model';
import { TaskType } from './types/tasks.type';

@Resolver((_of) => Task)
export class TaskResolver {
  @Query((_returns) => Task, { nullable: false, name: 'task' })
  async getTaskById(@Arg('id') id: string) {
    return await TaskModel.findById({_id: id})
  }

  @Query(() => [Task], { name: 'tasks', description: 'Get All Tasks' })
  async getAllTasks() {
    return await TaskModel.find();
  }

  @Mutation(() => Task, { name: 'createTask'})
  async createTask(@Arg('createTask') {body}: TaskType): Promise<Task> {
    const task = (await TaskModel.create({
      body, 
      isCompleted: false,
    })).save();
    return task;
  }

  @Mutation(() => Task, {name: 'editTask'})
  async editTask(@Arg('editTask') {id, body}: TaskType): Promise<Task> {
    const task = await TaskModel.findByIdAndUpdate(
      {_id: id},
      {
        body, 
        isCompleted: false,
      },
      { new: false}
    )
    return task;
  }
  
  @Mutation(() => Task, {name: 'completeTask'})
  async completeTask(@Arg('completeTask') {id}: TaskType): Promise<Task> {
    const task = await TaskModel.findByIdAndUpdate(
      {_id: id},
      {
        isCompleted: true,
      },
      { new: false}
    )
    return task;
  }
}