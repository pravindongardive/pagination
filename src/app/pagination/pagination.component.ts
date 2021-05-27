import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  config:any
  
  constructor(private correspondenceService : MemberService) { }

  ngOnInit(): void {
  }

}
