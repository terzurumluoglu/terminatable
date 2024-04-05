import { IConfig } from '../../projects/terminatable/src/lib/models';

export const CONFIG: IConfig = {
  multiSelect: true,
  rowSelection: true,
  strip: true,
  style: {
    header: {
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
