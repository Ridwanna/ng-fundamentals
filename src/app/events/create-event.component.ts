import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';


@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #9999;}
    .error ::-moz-placeholder {color: #9999;}
    .error :-moz-placeholder {color: #9999;}
    .error :ms-input-placeholder {color: #9999;}
  `]
})

export class CreateEventComponent {
  event;
  isDirty = true;

  constructor (private route: Router, private eventService: EventService) {

  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.route.navigate(['/events']);
    });
  }

  cancel() {
    this.route.navigate(['/events']);
  }
}
