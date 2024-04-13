import { IOrder } from "./IOrder";
import { IPage } from "./IPage";
import { IStyle } from "./IStyle";

export interface IConfig {
  uniqueField: string | number;
  multiSelect?: boolean;
  rowSelection?: boolean;
  orderable?: IOrder;
  pagination?: IPage;
  strip?: boolean;
  style: IStyle;
}

// export type SelectionMode = 'none' | 'multi-select' | 'row-selection';
