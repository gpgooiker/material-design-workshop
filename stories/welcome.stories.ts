import { storiesOf } from '@storybook/angular';
import { MatButtonModule, MatIconModule } from '@angular/material';

storiesOf('Welkom bij de style guide van Stoom en Damp', module)
  .add('Typografie', () => ({
    template: `
    <div class="mat-typography" style="padding: 16px;">
      <h1>Welkom bij de style guide van Stoom en Damp</h1>
      <p class="mat-body-2">In deze style guide laten we de corporate identity van Stoom en Damp zien.</p>
      <h2>Typografie (Heading 2)</h2>
      <p>
        Voor Stoom en Damp kiezen we voor een letter die recht uit het stoomtijdperk komt, zonder een dolkomisch
        effect na te streven.
      </p>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
    </div>
    `
  }));
