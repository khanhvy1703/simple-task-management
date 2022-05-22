/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createTask
// ====================================================

export interface createTask_createTask {
  __typename: "Task";
  id?: string;
  body: string;
  isCompleted?: boolean | null;
  createdAt?: any;
}

export interface createTask {
  createTask: createTask_createTask;
}

export interface createTaskVariables {
  createTask: TaskType;
}
