export type Tab = 'columns' | 'html' | 'preview' | 'config' | 'data';

export interface ITab {
  id: Tab;
  title: string;
  tables: string[];
};
