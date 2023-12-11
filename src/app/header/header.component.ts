import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navigator = ['PRODUCT', 'FEATURE', 'PRICING'];
  login = 'LOGIN';
  @Input() mobileView!: boolean;
  btnSrc = '../../assets/icon-hamburger.svg';
  menu = false;
  menuClick = () => {
    this.menu = !this.menu;
    this.btnSrc = this.menu
      ? '../../assets/icon-close.svg'
      : '../../assets/icon-hamburger.svg';
  };
}
