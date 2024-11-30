import { Component, OnInit } from '@angular/core';
import { ErrorMsgService } from './error-msg.service';

@Component({
  selector: 'app-error-msg',
  standalone: true,
  imports: [],
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css'
})
export class ErrorMsgComponent implements OnInit {
  errorMsg = ''

  constructor(private ErrorMsgService: ErrorMsgService) { }

  ngOnInit(): void {
    this.ErrorMsgService.apiError$.subscribe((err: any) => {
      this.errorMsg = err?.message

    })
  }
}
