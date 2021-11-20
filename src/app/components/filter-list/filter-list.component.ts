import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements OnInit {
  @Input() filterItems: string[] = [];
  @Input() title: string = 'Category';
  @Output() onChange = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {}
}
