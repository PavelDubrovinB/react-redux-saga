import {
  SubredditType,
  ThemesState,
} from '../store/interface';

export async function fetchThemeAsync(subreddit: SubredditType): Promise<ThemesState['themes']> {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/random/.json`);
  const json = await response.json();
  return json[0].data.children[0].data;
}
