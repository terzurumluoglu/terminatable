export const HTML_CODE: string = `  <terminatable
    [config]="config"
    [columns]="columns"
    [data]="data"
    (onRowDrop)="onRowDrop($event)"
    (onColumnDrop)="onColumnDrop($event)"
  ></terminatable>`;

export const COLUMNS_CODE: string = `  export const columns: IColumn[] = [
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
  ];`;

export const USER_CODE: string = `  export const data: any[] = [
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

export const CONFIG_CODE: string = `  export const CONFIG: IConfig = {
    uniqueField: 'id',
    strip: true,
    orderable: {
      column: true,
      row: true,
    },
  };`;

export const EVENT_CODE: string = `  onColumnDrop = (event: IDragAngDrop) => {
    console.log(event);
  }

  // CONSOLE OUTPUT

  {
    "oldValue": [
        "id",
        "name",
        "username",
        "email",
        "phone",
        "website"
    ],
    "newValue": [
        "id",
        "name",
        "email",
        "username",
        "phone",
        "website"
    ]
  }

  onRowDrop = (event: IDragAngDrop) => {
    console.log(event);
  }

  // CONSOLE OUTPUT
  {
    "oldValue": [
        {
            "id": 1, <--
            ...
        },
        {
            "id": 2,
            ...
        },
        {
            "id": 3,
            ...
        },
        {
            "id": 4,
            ...
        },
        {
            "id": 5,
            ...
        },
        {
            "id": 6,
            ...
        },
        {
            "id": 7,
            ...
        },
        {
            "id": 8,
            ...
        },
        {
            "id": 9,
            ...
        },
        {
            "id": 10,
            ...
        }
    ],
    "newValue": [
        {
            "id": 2,
            ...
        },
        {
            "id": 3,
            ...
        },
        {
            "id": 4,
            ...
        },
        {
            "id": 5,
            ...
        },
        {
            "id": 6,
            ...
        },
        {
            "id": 1, <--
            ...
        },
        {
            "id": 7,
            ...
        },
        {
            "id": 8,
            ...
        },
        {
            "id": 9,
            ...
        },
        {
            "id": 10,
            ...
        }
    ]
}
  `;
