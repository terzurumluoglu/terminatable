interface IColor {
    background?: string;
    text?: string;
}
interface IFont {
    size?: number;
    weight?: string;
}

interface IColorFont {
  color?: IColor;
  font?: IFont;
}

interface IBody {
  odd?: IColorFont;
  even?: IColorFont;
  hover?: IColorFont;
  selected?: IColorFont;
}

interface IStyle {
  header?: IColorFont;
  body?: IBody;
}

export interface IConfig {
  multiSelect?: boolean;
  rowSelection?: boolean;
  strip?: boolean;
  style: IStyle;
}

// export type SelectionMode = 'none' | 'multi-select' | 'row-selection';
