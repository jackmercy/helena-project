import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'supprise', title: 'Supprise',  icon: 'favorite', class: '' },
    { path: 'memories', title: 'Our memories',  icon: 'history', class: '' },
    { path: 'chatbox', title: 'Chat box',  icon: 'fingerprint', class: '' }
];


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
    menuItems: any[];

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
