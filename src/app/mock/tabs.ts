import { ITab } from '../models/ITab';

export const TABS: ITab[] = [
  {
    id: 'preview',
    title: 'Preview',
    tables: ['basic', 'frozen', 'strip', 'hover', 'row-selection'],
  },
  {
    id: 'columns',
    title: 'Columns',
    tables: ['basic', 'frozen', 'strip', 'hover', 'row-selection'],
  },
  {
    id: 'config',
    title: 'Config',
    tables: ['strip', 'hover', 'row-selection'], 
  },
  {
    id: 'data',
    title: 'Data',
    tables: ['basic', 'frozen', 'strip', 'hover', 'row-selection'],
  },
  {
    id: 'html',
    title: 'HTML',
    tables: ['basic', 'frozen', 'strip', 'hover', 'row-selection'],
  },
  {
    id: 'event',
    title: 'Event',
    tables: ['row-selection'],
  },
];
