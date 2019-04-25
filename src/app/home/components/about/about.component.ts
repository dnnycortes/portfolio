import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'about-component',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {
    aboutTitle: string;
    jobTitle: string;
    aboutIntro: string;
    skillsTitle: string;
    technicalSkills: Array<Object>;
    @Output() scrollDown: EventEmitter<string> = new EventEmitter;

    ngOnInit() {
        this.aboutTitle = 'Quién soy';
        this.jobTitle = 'Front-end Developer';
        this.aboutIntro = `¡Hola! soy Dany, diseñadora y desarrolladora de solucionas web.
        Los últimos 4 años me he desenvuelto principalmente en la programación de aplicaciones web
        del lado del cliente. Actualmente formo parte de un equipo de desarrolladores enfocados en
        generar proyectos de tecnología educativa, ahí he tenido la oportunidad de ser Líder de Proyectos.
        Me encantan los retos que involucra mi profesión pues resultan siempre en un aprendizaje
        autónomo y evolutivo.
        Tengo background de diseñadora, por lo que es importante para mí aportar conocimientos
        visuales a los proyectos en los que trabajo.`;
        this.skillsTitle = 'Habilidades Técnicas';
        this.technicalSkills = [
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'SASS' },
            { name: 'JavaScript' },
            { name: 'jQuery' },
            { name: 'Wordpress' },
            { name: 'AngularJs' },
            { name: 'Angular' },
            { name: 'Diseño Responsivo' },
            { name: 'Git' },
            { name: 'UI/UX' }
        ];
    }

    onScroll ( section: string ) {
        this.scrollDown.emit( section );
    }

}
