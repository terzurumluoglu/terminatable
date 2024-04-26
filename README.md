# Terminatable

Your Angular version should be 17+

## !!! Development is going on

Terminatable is being developed who use HTML tables in their app and customize that in Angular 17 and above.

## DEMO

How can I use terminatable in my app? [Visit](https://terminatable.onrender.com)

## Installation

Use the package manager npm to install Terminatable.

```bash
npm install terminatable
```

## Usage

```typescript
import { TerminatableComponent } from 'terminable'

@Component({
  selector: 'app-...',
  ...
  imports: [
    CommonModule,
    TerminatableComponent,
    ...
  ],
  ...
})

```

```html

<terminatable
  [columns]="columns"
  [data]="data"
></terminatable>

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
