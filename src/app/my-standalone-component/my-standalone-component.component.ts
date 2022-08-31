import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-standalone-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-standalone-component.component.html',
  styleUrls: ['./my-standalone-component.component.scss']
})
export class MyStandaloneComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
