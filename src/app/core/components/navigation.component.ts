import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'gift-card', title: 'Supprise',  icon: 'favorite', class: '' },
    { path: 'memories', title: 'Our memories',  icon: 'history', class: '' }/* ,
    { path: 'chatbox', title: 'Chat box',  icon: 'fingerprint', class: '' } */
];


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
    menuItems: any[];

    constructor(public snackBar: MatSnackBar) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    onChatBox() {
        this.snackBar.open('This feature is not implement yet', 'Got it', {
            duration: 5000,
        });
    }
}
