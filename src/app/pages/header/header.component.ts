import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onButtonClick() {
    this.router.navigate(['/main']);
  }

  goDetail() {
    this.router.navigate(['/detail'], {
      queryParams: { id: 1, name: 'Barah' },
    });
  }
}
