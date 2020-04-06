import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/core-module/api.service'

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit {
  data: Object
  error: Object

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPublic().subscribe({
        next: (data: string) => { 
          this.data=data
        },
        error: response => { 
          console.log(response) 
          this.error = response.error
        }
      });
  }
}