import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports: [],
    providers: [],
    bootstrap: []
})

export class SharedModule { }