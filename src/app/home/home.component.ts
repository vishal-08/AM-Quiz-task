import { Component, OnInit } from '@angular/core';
import { ManageTestService } from '../manage-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // test =  {}
  tests:any = []
  testName:any = []
  constructor(private _test : ManageTestService) { }

  ngOnInit(): void {
    this._test.getList().subscribe(
      
      (result) => {console.warn(result)
        this.tests = result
       this.testName = this.tests.tests
      //  console.log(this.testName)
    })
  }

  // startTest(){

  //   // for(let i=0;i<this.testName.length;i++)
  //   // {
  //   //   // console.log(this.testName[i]._id)
  //   //   if(this.testName[i]._id === id){
  //   //     let questions = this.testName[i].questions
  //   //     console.log(questions)
  //   //   }
      
  //   // }
    
  // }
}
