import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() selectedItems: string[] = [];
  @Output() onChange = new EventEmitter<string[]>();

  ngOnInit(): void {}

  isChecked() {
    return this.selectedItems.includes(getId(this.title));
  }

  handleOnChange(e: Event) {
    const selectedFilter = this.selectedItems;
    if ((e.target as HTMLInputElement).checked) {
      this.onChange.next(selectedFilter.concat(getId(this.title)));
    } else {
      this.onChange.next(
        selectedFilter.filter((id) => id !== getId(this.title))
      );
    }
  }
}
