import { Component} from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) { #searchForm {display:none;} }
    li > a.active { color: #f97924; }
    .dropdown-menu li {padding:7px;}
    .dropdown-menu li a {font-size: 0.8em; padding:10px;}
  `]
})
export class NavBarComponent {

  searchTerm = '';
  foundSessions: ISession[];

  constructor(public authService: AuthService,
    private eventService: EventService) {}

  searchSessions (searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }

}
