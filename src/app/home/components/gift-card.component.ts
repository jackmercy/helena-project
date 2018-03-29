import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent implements OnInit {

    constructor(private _router: Router) { }

    ngOnInit() {
    }

    onWishClicked() {
        this._router.navigate(['/home/supprise']);
    }
}
