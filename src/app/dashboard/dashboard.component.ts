import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Model = [];

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key)
    switch (event.key) {
      case 'c':
        navigator.clipboard.writeText(this.Model.join());
         
        break;
      case 'C':
        navigator.clipboard.writeText(this.Model.join());
        break;

      case ' ':
        this.getColor();
        break;
    }

  }
  constructor(private api: ApiService , private toastr:ToastrService) { }


  ngOnInit(): void {
    this.getColor();
  }

  getColor() {
    this.api.getColor(this.Model)
      .subscribe((data) => {
        console.log(data)

        let results = data.result;
        this.Model = [];
        results.forEach(result => {
          let color = this.api.rgbToHex(result[0], result[1], result[2])
          this.Model.push(color)
        });
        console.log(this.Model)
      });

  }


  onClick() {
    this.getColor();
  }

  onColorCodeClick(item) {
    navigator.clipboard.writeText(item);
    alert('HEX code copied to clipboard:' + item);
  }
  
}


