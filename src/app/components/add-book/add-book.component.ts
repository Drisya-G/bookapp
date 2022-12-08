import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudApi: CrudService) {

    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit(): void {

  }

  onSubmit(): any {
    this.crudApi.AddBook(this.bookForm.value)
      .subscribe(() => {
        console.log('Data added successfully');
        this.ngZone.run(() =>
          this.router.navigateByUrl('/book-list'))
      },
        result => {
          alert(result.error.message);

        });

  }
}




















