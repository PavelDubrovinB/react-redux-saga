import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { RootState } from './store/store';
import { SubredditType } from './store/interface';
import {
  likeTheme,
  deleteTheme,
  requestTheme,
} from './store/themes/actions';
import { Loader } from './components/loader/Loader';
import { ThemeCard } from './components/card/themeCard/ThemeCard';
import { ButtonsSubredditGroup } from './components/buttons/ButtonsSubredditGroup/ButtonsSubredditGroup';
import './App.css';

export const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { themes, buttons } = useSelector((state: RootState) => state);

  const onFetchTheme = (subreddit: SubredditType) => {
    dispatch(requestTheme(subreddit));
  };

  const onDeleteTheme = (id: string) => {
    dispatch(deleteTheme(id));
  };

  const onLikeTheme = (id: string) => {
    dispatch(likeTheme(id));
  };

  return (
    <div className="App">
      <div className="App__buttons">
        <ButtonsSubredditGroup
          onClick={onFetchTheme}
          buttons={buttons}
        />
      </div>
      <div className="App__themes">
        {themes.loading ? (
          <Loader />
        ) : (
          <ThemeCard
            onDelete={onDeleteTheme}
            onLike={onLikeTheme}
            themes={themes.themes}
          />
        )}
      </div>
    </div>
  );
};
