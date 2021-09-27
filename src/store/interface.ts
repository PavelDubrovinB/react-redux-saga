export interface ThemesState {
  themes: Theme[];
  loading: boolean;
}

export interface Theme {
  id: string;
  url: string;
  like: boolean;
}

export type SubredditType = 'frontend' | 'reactjs' | 'vuejs' | 'angular';
