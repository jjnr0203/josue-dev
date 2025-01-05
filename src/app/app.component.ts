import { Component } from '@angular/core';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent {
  title = 'josue-dev';
}
