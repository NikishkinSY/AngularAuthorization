import { Component, QueryList, ViewChildren } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

import { ApiService } from '../../core-module/api.service'
import { InfoService } from '../../core-module/info.service'
import { IHuman } from '../../core-module/models/human.model'
import { NgbdSortableHeader, SortEvent, compare } from '../../core-module/sortable.table'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  humans: IHuman[] = []
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>

  constructor(
    private apiService: ApiService, 
    private cookieService: CookieService,
    public infoService: InfoService) {}

  ngOnInit() {
    let token = this.cookieService.get('token')
    if (!token) {
      this.infoService.setError('Unauthorized')
    }

    this.apiService.getHumans(token).subscribe({
      next: (data: IHuman[]) => { 
        this.infoService.clear()
        this.humans = data
      },
      error: response => { 
        this.infoService.setError('Unauthorized')   
      }
    })
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting humans
    if (direction === '' || column === '') {
      this.humans = this.humans;
    } else {
      this.humans = [...this.humans].sort((a, b) => {
        const res = compare(`${a[column]}`, `${b[column]}`);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}