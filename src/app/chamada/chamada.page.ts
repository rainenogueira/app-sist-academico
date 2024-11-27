import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.page.html',
  styleUrls: ['./chamada.page.scss'],
})
export class ChamadaPage implements OnInit {

  showAlert: boolean = false;

  constructor() { }

  confirmarPresenca() {
    this.showAlert = true;
  }

  ngOnInit() {
  }

}
