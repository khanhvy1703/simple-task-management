/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllTasks
// ====================================================

export interface getAllTasks_tasks {
  __typename: "Task";
  id: string;
  body: string;
  isCompleted: boolean | null;
  createdAt: any;
}

export interface getAllTasks {
  /**
   * Get All Tasks
   */
  tasks: getAllTasks_tasks[];
}
