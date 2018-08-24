import { Action } from "@ngrx/store";
import { Link } from "../interfaces/link";

export const ADD_LINK = '[LINK] Add'
export const REMOVE_LINK = '[LINK] Remove'

export class AddLink implements Action {
  readonly type = ADD_LINK

  constructor(public payload: Link) {}
}

export class RemoveLink implements Action {
  readonly type = REMOVE_LINK

  constructor(public payload: number) {}
}

export type Actions = AddLink | RemoveLink