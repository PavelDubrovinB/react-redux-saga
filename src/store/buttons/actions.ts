import { SubredditType } from '../interface';
import {
  ButtonsActionsType,
  LoadingButtonActionsInterface,
  UnLoadingButtonActionsInterface,
} from './interface';

export const loadingButton = (payload: SubredditType): LoadingButtonActionsInterface => ({
  type: ButtonsActionsType.LOADING_BUTTONS,
  payload,
});

export const UnLoadingButton = (payload: SubredditType): UnLoadingButtonActionsInterface => ({
  type: ButtonsActionsType.UNLOADING_BUTTONS,
  payload,
});
