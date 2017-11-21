import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization/authorization.service';
import { StagesService } from '../services/stages/stages.service';
import { DialogAddStage } from './dialogs/addStage/addStage.component';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import gql from 'graphql-tag';

const queries = {
  getStages: gql`
    query {
      stages {
        _id
        name
        order
      }
    }
  `,
};

const mutations = {
  stageAdd: gql`
    mutation stageAdd($stage: NewStage!) {
      stageAdd(stage: $stage) {
        _id
        name
        order
      }
    }
  `,
};

@Component({
    selector   : 'stages',
    templateUrl: './stages.component.html',
    styleUrls  : ['./stages.component.scss']
})
export class StagesComponent implements OnInit
{
    rows: any[] = [];
    loadingIndicator = true;
    reorderable = true;
    stages: any[] = [];

    constructor(
      private authorizationService: AuthorizationService,
      private stagesService: StagesService,
      public dialog: MdDialog
    )
    {

    }

    async ngOnInit()
    {
      this.authorizationService.isLogged();
      try {
        this.stages = (await this.stagesService.getStages(queries.getStages))['data'].stages;
        this.rows = mapStages(this.stages);
        this.loadingIndicator = false;
      } catch(error) {
        console.error(error);
      }
    }

    public addStage()
    {
      let dialogRef = this.dialog.open(DialogAddStage, {
        width: '250px',
        data: { order: this.rows.length + 1 }
      });

      dialogRef.afterClosed().subscribe(async result => {
        if (result) {
          let variables = { stage: result };
          try {
            this.stages = this.stages.concat([(await this.stagesService.addStage(mutations.stageAdd, variables))['data'].stageAdd]);
            this.rows = mapStages(this.stages);
          } catch(error) {
            console.error(error);
          }
        };
      });
    }

    public async removeStage(id)
    {
      try {
        let removedStage = await this.stagesService.
      }
    }
}

const mapStages = stages => {
  return stages.map(stage => {
    let { _id, name, order } = stage;
    return { _id, name, order };
  });
}
