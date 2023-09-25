import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.scss']
})
export class TemplateHeaderComponent implements OnInit{

  menuAtivo = false;
  windowSize!: number;
  mobile !: boolean;

  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.resizweConfig();
  }

  @HostListener("window:resize")
  public resizweConfig(){
    this.windowSize = window.innerWidth;
    if(this.windowSize < 1010){
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }
}
