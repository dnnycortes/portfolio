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
            { id: 5, name: 'behance', label: 'Behance', active: true, link: 'https://www.behance.net/dnnycortes' },
            { id: 4, name: 'github', label: 'Github', active: true, link: 'https://github.com/dnnycortes' },
            { id: 3, name: 'medium', label: 'Medium', active: true, link: 'https://medium.com/@dnnyCortes'},
            { id: 1, name: 'twitter', label: 'Twitter', active: true, link: 'https://twitter.com/dnnyCortes'},
            { id: 2, name: 'instagram', label: 'Instagram', active: true, link: 'https://www.instagram.com/dnnycortes/'},
        ];
    }
}
