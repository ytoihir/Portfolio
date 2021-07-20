import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollOffset >= 100) {
        document.querySelectorAll('.navbar').forEach((c) => {
            c.classList.add('shrink');
        });
    } else if (scrollOffset < 100) {
        document.querySelectorAll('.navbar').forEach((c) => {
            c.classList.remove('shrink');
        });
    }
}

}
