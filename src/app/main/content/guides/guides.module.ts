import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { GuidesComponent } from './guides.component';

const routes = [
    {
        path     : 'stages/:id',
        component: GuidesComponent
    }
];

@NgModule({
    declarations: [
        GuidesComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        GuidesComponent
    ]
})

export class GuidesModule
{
}
