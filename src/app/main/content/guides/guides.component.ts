import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from '../services/authorization/authorization.service';
import { GraphqlService } from '../services/graphql/graphql.service';
import { DialogAddStageComponent } from './dialogs/addStage/addStage.component';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import gql from 'graphql-tag';

const queries = {
  getGuides: gql`
    query getGuidesByStageId($stageId: ID!) {
      guides(stageId: $stageId) {
        _id name
      }
    }
  `,
};

const mutations = {
  stageAdd: gql`
    mutation stageAdd($stage: NewStage!) {
      stageAdd(stage: $stage) {
        _id name order
      }
    }
  `,
  stageRemove: gql`
    mutation stageRemove($id: ID!) {
      stageRemove(id: $id) {
        _id name order
      }
    }
  `,
};

@Component({
    selector   : 'guides',
    templateUrl: './guides.component.html',
    styleUrls  : ['./guides.component.scss']
})
export class GuidesComponent implements OnInit, OnDestroy
{
    rows: any[] = [];
    loadingIndicator = true;
    reorderable = true;
    stageId: string;
    subs: any;

    constructor(
      private route: ActivatedRoute,
      private authorizationService: AuthorizationService,
      private graphqlService: GraphqlService,
      public dialog: MdDialog
    )
    {

    }

    ngOnInit()
    {
      this.authorizationService.isLogged();
      this.subs = this.route.params.subscribe(async params => {
         this.stageId = params['id'];
         console.log(await this.graphqlService.query(queries.getGuides, { stageId: this.stageId }));
      });
    }

    ngOnDestroy() {
      this.subs.unsubscribe();
    }

    private async getStages()
    {
      this.loadingIndicator = true;
      /*try {
        this.rows = this.mapStages((await this.graphqlService.query(queries.getStages))['data'].stages);
        this.loadingIndicator = false;
      } catch(error) {
        this.loadingIndicator = false;
        console.error(error);
      }*/
    }

    private mapStages (stages)
    {
      return stages.map(stage => {
        let { _id, name, order } = stage;
        return { _id, name, order };
      });
    }

}
