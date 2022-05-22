/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTaskById
// ====================================================

export interface getTaskById_tasks {
  __typename: "Task";
  id: string;
  body: string;
  isCompleted: boolean | null;
  createdAt: any;
}

export interface getTaskById {
  /**
   * Get All Tasks
   */
  tasks: getTaskById_tasks[];
}

export interface getTaskByIdVariables {
  taskId: string;
}
