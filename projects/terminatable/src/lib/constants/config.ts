import { IConfig } from "../models";

export const CONFIG: IConfig = {
  uniqueField: 'id',
  multiSelect: false,
  rowSelection: false,
  orderable: {
    column: false,
    row: false,
  },
  // pagination: {
  //   rows: 5
  // },
  strip: false,
  style: {
    header: {
      lineHeight: 8,
      color: {
        background: '#FFF',
        text: '#4b5563',
      },
      font: {
        size: 16,
        weight: 'bold',
      },
    },
    body: {
      lineHeight: 8,
      even: {
        color: {
          background: '#E4E4E4',
          text: '#4b5563',
        },
        font: {
          size: 16,
          weight: 'normal',
        },
      },
      odd: {
        color: {
          background: '#FFF',
          text: '#4b5563',
        },
        font: {
          size: 16,
          weight: 'normal',
        },
      },
      hover: {
        color: {
          background: '#C5DBFF',
          text: '#4b5563',
        },
        font: {
          size: 16,
          weight: 'normal',
        },
      },
      selected: {
        color: {
          background: '#6aa3ff',
          text: '#4b5563',
        },
        font: {
          size: 16,
          weight: 'normal',
        },
        
      }
    },
  },
};
