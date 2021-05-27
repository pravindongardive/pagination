import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { threadId } from 'worker_threads';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.scss']
})
export class CorrespondenceComponent implements OnInit {

  form_page:boolean=false;

  data_result:boolean=false;

  alert_result:boolean=false;

  date_check:boolean=false;

  record_not_found:boolean=false;

  today = new Date().toISOString().substring(0,10);

  prev_year = new Date(new Date().setFullYear(new Date().getFullYear()-1)).toISOString().substring(0,10);

  corres_data:any=[];

  config={
    id:'custom',
    itemsPerPage:10,
    currentPage:1,
    totalItems:this.corres_data.lenght
  };

  isEverythingSelected:boolean;
  categoryList:any;
  checkedCategoryList:any;

  constructor(private correspondenceService : MemberService) {
    this.isEverythingSelected=false;
    this.getCheckedItemList();
   }

  checkUncheckAll(){
    console.log(this.config.currentPage)
    for(var i=0;i<this.corres_data.lenght;i++){
      this.corres_data[i].isSelected=this.isEverythingSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isEverythingSelected=this.corres_data.every(
      function(item:any){
        return item.isSelected==true;
      }
    )
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedCategoryList=[];
    for(var i=0; i<this.corres_data.lenght;i++){
      if(this.corres_data[i].isSelected)
      this.checkedCategoryList.push(this.corres_data[i]);
    }
    this.checkedCategoryList=JSON.stringify(this.checkedCategoryList.lenght);
  }

  getCorrespondenceService() {
    this.correspondenceService.getCorrespondenceData().subscribe((data: any) => {
      console.log(data);
      this.corres_data = data;      
    })
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    dcn_nbr_echs: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    track_id_echs: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    ctrl_num_echs: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    category_echs: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    commets_echs: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    print_sups_echs: new FormControl('', [Validators.required, Validators.maxLength(12)]),
  });

  avoid_special_char(event: any){
    var k: any;
    k = event.keyCode;
    return ((k>64 && k<91) || (k>96 && k<123) || k==8 || k==32 || (k>47 && k<58));
  }

  only_numbers(event: any) {
    var k:any;
    k = event.keyCode;
    return (k>47 && k<58);
  }

  onPaste(event: any) {
    alert(event.target.value)
  }

  onReset() {
    this.form.reset();
  }

  onSubmit() {
    this.form_page=true;
    this.data_result=true;
    this.getCorrespondenceService();
  }
  
  back_search() {
    this.form_page=false;
    this.data_result=false;
    this.alert_result=false;
  }

  retrieve_select() {

  }

}
