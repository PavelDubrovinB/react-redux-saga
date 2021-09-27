import { SubredditType } from '../interface';
import {
  ButtonsActions,
  ButtonsActionsType,
} from './interface';

export interface ButtonsState {
  buttons: {
    id: SubredditType;
    name: string;
    loading: boolean;
  }[];
}

const initialState: ButtonsState = {
  buttons: [{
    id: 'frontend',
    name: 'Frontend',
    loading: false,
  }, {
    id: 'reactjs',
    name: 'ReactJS',
    loading: false,
  }, {
    id: 'vuejs',
    name: 'VueJS',
    loading: false,
  }, {
    id: 'angular',
    name: 'Angular',
    loading: false,
  }],
};

export const buttonsReduser = (state = initialState, action: ButtonsActions): ButtonsState => {
  switch (action.type) {
    case ButtonsActionsType.LOADING_BUTTONS:
      return {
        ...state,
        buttons: [...state.buttons.map((item) => {
          let newButton = item;
          if (item.id === action.payload) {
            newButton = {
              ...item,
              loading: true,
            };
          }
          return newButton;
        })],
      };
    case ButtonsActionsType.UNLOADING_BUTTONS:
      return {
        ...state,
        buttons: [...state.buttons.map((item) => {
          let newButton = item;
          if (item.id === action.payload) {
            newButton = {
              ...item,
              loading: false,
            };
          }
          return newButton;
        })],
      };
    default: return state;
  }
};
