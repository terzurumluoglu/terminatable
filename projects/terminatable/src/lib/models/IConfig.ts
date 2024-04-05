export interface IColor {
    background?: string;
    text?: string;
}
export interface IFont {
    size?: number;
    weight?: string;
}

export interface IColorFont {
  color?: IColor;
  font?: IFont;
}

export interface IBody {
  odd?: IColorFont;
  even?: IColorFont;
  hover?: IColorFont;
  selected?: IColorFont;
}

export interface IStyle {
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
