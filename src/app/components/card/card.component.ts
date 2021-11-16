import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'col-lg-4 col-md-6' }
})
export class CardComponent implements OnInit {

  @Input() id: string = ''
  @Input() images: string[] = []
  @Input() title: string = ''
  @Input() rating: number = 0
  @Input() price: number = 0
  @Input() category: string = ''
  @Input() brand: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
