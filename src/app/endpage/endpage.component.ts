import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageTestService } from '../manage-test.service';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {
  
  tests:any = []
  testName:any = []
  nameOfTest = ''
  numberOfQuestions = 0 
  correctAnswer = 0
  wrongAnswer = 0
  id = this.route.snapshot.params.id


  constructor(private _test : ManageTestService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._test.getList().subscribe(
      
      (result) => {console.warn(result)
        this.tests = result
       this.testName = this.tests.tests

       for (let i = 0; i < this.testName.length; i++) {
        if (this.testName[i]._id === this.id) {

          this.nameOfTest = this.testName[i].name
          this.numberOfQuestions = this.testName[i].questions.length
         console.log(this.testName[i].questions.length)
        }

      }
      this.correctAnswer=JSON.parse(localStorage.getItem('count')!)

      console.log(this.correctAnswer)
      this.wrongAnswer = this.numberOfQuestions - this.correctAnswer
    })
  }

}


