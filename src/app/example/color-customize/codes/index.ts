export const HTML_CODE: string = `  <terminatable
    [config]="config"
    [columns]="columns"
    [data]="data"
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
    hover: true,
    rowSelection: true,
    style: {
      header: {
        color: {
          background: '#373737',
          text: '#FFF'
        },
        font: {
          size: 20,
          weight: 'bold',
        },
        lineHeight: 60,
      },
      body: {
        odd: {
          color: {
            background: '#dac11d',
            text: '#464646'
          },
          font: {
            size: 12,
            weight: "normal",
          },
        },
        even: {
          color: {
            background: '#464646',
            text: '#dac11d'
          },
          font: {
            size: 12,
            weight: "normal",
          },
        },
        hover: {
          color: {
            background: '#8d1414',
            text: '#FFF'
          },
          font: {
            size: 12,
            weight: "normal",
          },
        },
        selected: {
          color: {
            background: '#0d9715',
            text: '#FFF'
          },
          font: {
            size: 12,
            weight: "normal",
          },
        },
        lineHeight: 30,
      }
    }
  };`

  export const EVENT_CODE: string = `  onRowSelect = (event: IRowSelection) => {
    console.log(event);
  }
  
  // CONSOLE OUTPUT
  {
    "isSelected": true,
    "row": {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    }
  }
  
  `;