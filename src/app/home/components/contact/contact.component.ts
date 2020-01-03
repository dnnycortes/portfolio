import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'contact-component',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {
    networking: Array<Object>;

    constructor() { }

    ngOnInit() {
        this.networking = [
            { id: 0, name: 'linkedin', label: 'Linkedin', active: true, link: 'https://www.linkedin.com/in/dnnycortes/'},
            { id: 1, name: 'dribbble', label: 'Dribbble', active: true, link: 'https://dribbble.com/danycortes' },
            { id: 2, name: 'github', label: 'Github', active: true, link: 'https://github.com/dnnycortes' },
            { id: 3, name: 'twitter', label: 'Twitter', active: true, link: 'https://twitter.com/dnnyCortes'}
        ];
    }
}
