/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: completeTask
// ====================================================

export interface completeTask_completeTask {
  __typename: "Task";
  id: string;
  body: string;
  isCompleted: boolean | null;
  createdAt: any;
}

export interface completeTask {
  completeTask: completeTask_completeTask;
}

export interface completeTaskVariables {
  completeTask: TaskType;
}
