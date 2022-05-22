/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TaskType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: editTask
// ====================================================

export interface editTask_editTask {
  __typename: "Task";
  id: string;
  body: string;
  isCompleted: boolean | null;
  createdAt: any;
}

export interface editTask {
  editTask: editTask_editTask;
}

export interface editTaskVariables {
  editTask: TaskType;
}
