import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

import { Subscription } from 'rxjs';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'WebConnect';

  isLoggedIn = false;
  username?: string;
  eventBusSub?: Subscription;

  constructor(
    public themeService: ThemeService,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username = user.username;
    } else {
      this.router.navigate(['/auth/signin']);
    }
  }

}
