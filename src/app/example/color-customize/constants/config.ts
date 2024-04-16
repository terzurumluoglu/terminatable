import { IConfig } from "../../../../../projects/terminatable/src/public-api";

export const CONFIG: IConfig = {
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
};
