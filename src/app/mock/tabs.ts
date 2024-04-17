import { ITab } from '../models/ITab';

export const TABS: ITab[] = [
  {
    id: 'preview',
    title: 'Preview',
    tables: [
      'basic',
      'frozen',
      'strip',
      'hover',
      'row-selection',
      'color-customize',
      'multi-select',
      'drag-drop',
      'pagination',
    ],
  },
  {
    id: 'columns',
    title: 'Columns',
    tables: [
      'basic',
      'frozen',
      'strip',
      'hover',
      'row-selection',
      'color-customize',
      'multi-select',
      'drag-drop',
      'pagination'
    ],
  },
  {
    id: 'config',
    title: 'Config',
    tables: [
      'strip',
      'hover',
      'row-selection',
      'color-customize',
      'multi-select',
      'drag-drop',
      'pagination'
    ],
  },
  {
    id: 'data',
    title: 'Data',
    tables: [
      'basic',
      'frozen',
      'strip',
      'hover',
      'row-selection',
      'color-customize',
      'multi-select',
      'drag-drop',
      'pagination'
    ],
  },
  {
    id: 'html',
    title: 'HTML',
    tables: [
      'basic',
      'frozen',
      'strip',
      'hover',
      'row-selection',
      'color-customize',
      'multi-select',
      'drag-drop',
      'pagination'
    ],
  },
  {
    id: 'event',
    title: 'Event',
    tables: ['row-selection', 'color-customize', 'multi-select', 'drag-drop'],
  },
];
