import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { trigger,
state,
style,
animate,
transition } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

  animations: [],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
