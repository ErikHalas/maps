import { Injectable } from '@angular/core';
import {Results} from "../result-page/result-page.component";

@Injectable({
  providedIn: 'root'
})
export class ResultPageService {
  public results: Results= new Results();
  setResults(results: Results){
    this.results = results
  }
  getResults(){
    return this.results;
  }
  constructor() { }
}
