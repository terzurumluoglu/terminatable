import { ITab } from '../models/ITab';

export const TABS: ITab[] = [
  {
    id: 'preview',
    title: 'Preview',
    tables: ['basic', 'row-select', 'strip', 'frozen'],
  },
  {
    id: 'columns',
    title: 'Columns',
    tables: ['basic', 'row-select', 'strip', 'frozen'],
  },
  {
    id: 'config',
    title: 'Config',
    tables: ['row-select', 'strip'],
  },
  {
    id: 'data',
    title: 'Data',
    tables: ['basic', 'row-select', 'strip', 'frozen'],
  },
  {
    id: 'html',
    title: 'HTML',
    tables: ['basic', 'row-select', 'strip', 'frozen'],
  },
];
