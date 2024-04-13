export const HTML_CODE: string = `<terminatable [columns]="columns" [data]="data"></terminatable>`;

export const COLUMNS_CODE: string = `export const columns: IColumn[] = [
    {
      field: 'id',
      title: 'Id',
      width: 100,
      isFrozen: false,
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
  ];`;

export const USER_CODE: string = `export const data: any[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    ...,
    ...,
    ...,
  ];`;
