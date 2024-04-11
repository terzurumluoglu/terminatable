import { IOrder } from "./IOrder";
import { IStyle } from "./IStyle";

export interface IConfig {
  uniqueField: string | number;
  multiSelect?: boolean;
  rowSelection?: boolean;
  orderable?: IOrder;
  strip?: boolean;
  style: IStyle;
}

// export type SelectionMode = 'none' | 'multi-select' | 'row-selection';
