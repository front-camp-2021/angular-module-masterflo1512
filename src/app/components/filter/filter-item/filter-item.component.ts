import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';

export function getId(filterName: string) {
  return filterName.toLowerCase().split(' ').join('_');
}

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
})
export class FilterItemComponent implements OnInit {
  @Input() title: string = '';
  @Output() onChange = new EventEmitter<string[]>();

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {}

  handleonChange(e: Event) {
    const selectedFilter = this.filtersService.brands.getValue();
    if ((e.target as HTMLInputElement).checked) {
      this.onChange.next(selectedFilter.concat(getId(this.title)));
    } else {
      this.onChange.next(
        selectedFilter.filter((id) => id !== getId(this.title))
      );
    }
  }
}
