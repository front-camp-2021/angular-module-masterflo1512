import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  @Input() filterItems: string[] = [];

  @Input() title: string = 'Category'

  constructor() { }

  ngOnInit(): void {



  }

}
