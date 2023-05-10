import { Component } from '@angular/core';
import { UpdateserviceService } from './updateservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private updateService: UpdateserviceService) {}
}
