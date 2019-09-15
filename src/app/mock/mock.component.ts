import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MockServiceService } from './mock-service.service';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {
  mainForm: FormGroup;
  planeString: string;
  
  constructor(private formBuilder: FormBuilder,
              private myMockService: MockServiceService) { }

  ngOnInit() {
    this.planeString = 'value';
    this.mainForm = this.formBuilder.group({
      firstArray: this.formBuilder.array([])
    });
    this.detectChanges();
  }

  detectChanges() {
    this.mainForm.valueChanges.subscribe( changedValue => {
      console.log(changedValue);
      this.myMockService.displayTest();
    });
  }

  addField() {
    (this.mainForm.get('firstArray') as FormArray).push(
      this.formBuilder.group({
        name: [''],
        age: ['']
      })
    )
  }
  remove(index) {
    (this.mainForm.get('firstArray') as FormArray).removeAt(index);
  }

}