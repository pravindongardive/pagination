import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  jsonUrl = "assets/membersearchdata.json";

  getMemberSearchData() {
    return this.http.get(this.jsonUrl);
  }

  corres_json_Url = "assets/corres_mock_data.json";

  getCorrespondenceData() {
    return this.http.get(this.corres_json_Url);
  }
}
