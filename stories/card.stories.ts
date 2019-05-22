import { storiesOf } from '@storybook/angular';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { text } from '@storybook/addon-knobs/angular';

storiesOf('Card', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-card>{{label}}</mat-card>
    </div>
    `,
    props: {
      label: text('label', 'A simple card')
    },
    moduleMetadata: {
      imports: [MatCardModule]
    }
  }))
  .add('Complex', () => ({
    template: `
    <div>
      <mat-card style="width: 400px; margin: 0 auto;">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Word lid!</mat-card-title>
          <mat-card-subtitle>Van Treinvereniging Stoom & Damp</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="http://www.voornse-modelspoor.nl/media/images/oostvoorne.jpg" alt="Photo of a Shiba Inu">
        <mat-card-content>
          <p>
            Altijd al de stoerste treinen willen bouwen? Dat kan!
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" class="mat-elevation-z0">WORD LID</button>
          <button mat-button color="accent">ALLE LEDEN</button>
        </mat-card-actions>
      </mat-card>
    </div>
    `,
    moduleMetadata: {
      imports: [MatCardModule, MatButtonModule]
    }
  }));
