import { IColumn } from '../../../../projects/terminatable/src/public-api';

export const COLUMNS: IColumn[] = [
  {
    field: 'id',
    title: 'Id',
    width: 100,
    isFrozen: true,
    isVisible: true,
  },
  {
    field: 'name',
    title: 'Name',
    width: 200,
    isFrozen: false,
    isVisible: true,
  },
  {
    field: 'username',
    title: 'Username',
    width: 200,
    isFrozen: false,
    isVisible: true,
  },
  {
    field: 'email',
    title: 'E-Mail',
    width: 200,
    isFrozen: false,
    isVisible: true,
  },
  {
    field: 'phone',
    title: 'Phone Number',
    width: 200,
    isFrozen: false,
    isVisible: true,
  },
  {
    field: 'website',
    title: 'Web Site',
    width: 200,
    isFrozen: false,
    isVisible: true,
  },
];
