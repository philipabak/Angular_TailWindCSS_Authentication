import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../../../../_services/storage.service';
import { AuthService } from '../../../../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})

export class ProfileMenuComponent implements OnInit {
  username?: string;
  isMenuOpen = false;
  
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private readonly _router: Router,
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.username;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        this._router.navigate(['/auth']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
