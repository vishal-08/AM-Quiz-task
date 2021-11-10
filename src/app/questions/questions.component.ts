import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageTestService } from '../manage-test.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  tests: any = []
  testName: any = []
  questions: any = []
  item: any = []
  options: any = []
  correctOption: any = []
  availableQues: any = []
  name = ""
  type = ""
  count = 0

  id = this.route.snapshot.params.id

  constructor(private _test: ManageTestService, private route: ActivatedRoute, private _router: Router) { }




  ngOnInit(): void {

    this.count = 0
    this._test.getList().subscribe(

      (result) => {
        console.warn(result)
        this.tests = result
        this.testName = this.tests.tests


        for (let i = 0; i < this.testName.length; i++) {
          if (this.testName[i]._id === this.id) {
            this.questions = this.testName[i].questions
            this.availableQues = [... this.questions]
            // console.log(this.availableQues)
            this.name = this.testName[i].name
            this.item = this.availableQues[Math.floor(Math.random() * this.questions.length)];
            console.log(this.item)



            this.options = this.item.options
            this.type = this.item.type
            this.correctOption = this.item.correctOptionIndex
            console.log(this.correctOption)
          }

        }
      })
  }

  nextQuestion() {
    if (this.availableQues.length > 0) {
      this.availableQues = this.arrayRemove(this.availableQues, this.item);
      console.log(this.availableQues.length)
      for (let i = 0; i < this.availableQues.length; i++) {
        this.item = this.availableQues[i]
        this.options = this.item.options
        this.type = this.item.type
        this.correctOption = this.item.correctOptionIndex

      }
      // console.log(this.correctOption)
    }
    else {
      // this._router.navigate(['/finish'])
    }
  }



  arrayRemove(arr: any, value: any) {

    return arr.filter(function (ele: any) {
      return ele != value;
    });
  }

  onSelect(option: any) {
    let selectedOption: any = []

    // console.log(this.type)
    console.log("selected option = " + option)
    console.log(this.correctOption)

    if (this.type === "Multiple-Response") {
      selectedOption.unshift(option)
      const intersection = this.correctOption.filter((element: any) => selectedOption.indexOf(element) !== -1);
      if (this.correctOption.length === intersection.length) {
        this.count++
      }
      console.log(intersection)
    }
    else {
      selectedOption = option
      if (this.correctOption == selectedOption) {
        console.log("true")
        this.count++
      }
    }
    console.log(this.count)
    localStorage.setItem("count", JSON.stringify(this.count))
  }

}
