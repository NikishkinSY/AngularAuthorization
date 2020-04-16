import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

import { ApiService } from '../../core-module/api.service'
import { InfoService } from '../../core-module/info.service'
import { IHuman } from '../../core-module/models/human.model'

export type SortColumn = keyof IHuman | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

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