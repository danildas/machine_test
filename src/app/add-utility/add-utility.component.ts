import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApicallService } from '../apicall.service'

@Component({
  selector: 'app-add-utility',
  templateUrl: './add-utility.component.html',
  styleUrls: ['./add-utility.component.scss']
})
export class AddUtilityComponent implements OnInit {
 

  form = new FormGroup({
    utilityName: new FormControl('', Validators.required)
 })

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){

  }

}
