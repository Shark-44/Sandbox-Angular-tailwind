import { Component, OnInit } from '@angular/core';


enum BannerState {
  WithMask,
  WithoutMask
}

@Component({
  selector: 'app-effet-one',
  standalone: true,
  imports: [],
  templateUrl: './effet-one.component.html',
  styleUrl: './effet-one.component.css'
})
export class EffetOneComponent   implements OnInit {
  maskStyle = 'url(assets/images/test.gif)';
  maskSize = 'cover';
  maskPosition = 'center';

  ngOnInit() {
    setTimeout(() => {
      this.maskStyle = 'none';
      this.maskSize = 'none';
      this.maskPosition = 'none';
    }, 6200);
  }
}