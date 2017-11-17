import { Component } from '@angular/core';
import { AuthorizationService } from '../services/authorization/authorization.service';

@Component({
    selector   : 'fuse-sample',
    templateUrl: './stages.component.html',
    styleUrls  : ['./stages.component.scss']
})
export class FuseSampleComponent
{
    constructor(
      private authorizationService: AuthorizationService
    )
    {
      this.authorizationService.isLogged();
    }
}
