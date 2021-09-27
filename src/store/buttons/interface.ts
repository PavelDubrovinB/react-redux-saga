import { Action } from 'redux';
import { SubredditType } from '../interface';

export enum ButtonsActionsType {
  LOADING_BUTTONS = 'BUTTONS/LOADING_BUTTONS',
  UNLOADING_BUTTONS = 'BUTTONS/UNLOADING_BUTTONS',
}

export interface LoadingButtonActionsInterface extends Action<ButtonsActionsType> {
  type: ButtonsActionsType.LOADING_BUTTONS,
  payload: SubredditType,
}

export interface UnLoadingButtonActionsInterface extends Action<ButtonsActionsType> {
  type: ButtonsActionsType.UNLOADING_BUTTONS,
  payload: SubredditType,
}

export type ButtonsActions = LoadingButtonActionsInterface | UnLoadingButtonActionsInterface;
