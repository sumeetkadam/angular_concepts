import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  @Input() counter!: number; //why ! added?
  constructor() { }

  ngOnInit(): void {
  }

}
