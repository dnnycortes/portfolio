import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    jobTitle: string;
    aboutTitle: string;
    aboutIntro: string;
    skillsTitle: string;
    technicalSkills: Array<Object>;

    @ViewChild('about') about: ElementRef;
    @ViewChild('portfolio') portfolio: ElementRef;


    ngOnInit() {
        this.jobTitle = 'Front-end Developer';
        this.aboutTitle = 'Quién soy';
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


    /**
     * Function executed by the dom that scrolls down to an specific section in home page
     * @param section string with the name of the section to scroll to
     */
    scrollTo( section: string ) {
        switch ( section ) {
            case 'about':
                this.about.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'portfolio':
                this.portfolio.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
        }
    }
}
