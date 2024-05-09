import { Component } from '@angular/core';
import {RestServiceService} from "../services/rest-service.service";
import {lastValueFrom} from "rxjs";
import {UserServiceService} from "../services/user-service.service";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent {
  // @ts-ignore
  instances: [Instance] = [];

  displayedColumns: string[] = ['ctId', 'maskId', 'accuracy', 'result'];

  constructor(public restService: RestServiceService, public userService: UserServiceService) {
    lastValueFrom(restService.getInstances(userService.user.username ?? "")).then((data: any) => {
      this.instances = data;
    });
  }

  typedInstance(instance: any) {
    return instance as Instance;
  }
}

export class Instance {
  ctId: string | undefined
  maskId: string | undefined
  accuracy: number | undefined
  result: boolean | undefined
}
