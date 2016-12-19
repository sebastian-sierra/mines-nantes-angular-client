import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {

  }
}
