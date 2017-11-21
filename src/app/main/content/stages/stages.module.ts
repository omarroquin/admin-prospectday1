import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { StagesComponent } from './stages.component';
import { DialogAddStage } from './dialogs/addStage/addStage.component';

const routes = [
    {
        path     : 'stages',
        component: StagesComponent
    },
    {
        path     : 'stages/dialogs/addStage',
        component: DialogAddStage
    }
];

@NgModule({
    declarations: [
        StagesComponent,
        DialogAddStage
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        StagesComponent,
        DialogAddStage
    ]
})

export class StagesModule
{
}
