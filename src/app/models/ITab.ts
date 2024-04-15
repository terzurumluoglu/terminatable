export type Tab = 'columns' | 'html' | 'preview' | 'config' | 'data' | 'event';

export interface ITab {
  id: Tab;
  title: string;
  tables: string[];
};
