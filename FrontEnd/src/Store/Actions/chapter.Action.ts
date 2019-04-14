import { Action } from '@ngrx/store';
import { chapter, article } from '../model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ActionTypes {
    chapters = 'get/chapters',
    articles = 'get/articles',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */

export class chapters implements Action {
    readonly type = ActionTypes.chapters;
    constructor(public payload: chapter[]) { }
}
export class articles implements Action {
    readonly type = ActionTypes.articles;
    constructor(public payload: article) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = chapters | articles;
