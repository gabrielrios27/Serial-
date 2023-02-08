import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  visible: boolean;
  login: boolean;
  @ViewChild('videoHome', { static: false }) videoHome!: ElementRef;

  constructor() {
    this.visible = false;
    this.login = true;
  }

  ngOnInit(): void {
    this.turnVisible();
  }
  ngAfterViewInit() {
    this.togglevideoHome();
  }
  togglevideoHome() {
    this.videoHome.nativeElement.muted = true;
    this.videoHome.nativeElement.play();
  }

  turnVisible() {
    setTimeout(() => {
      this.visible = true;
    }, 3000);
  }
  toogleLogin() {
    this.login = true;
  }
  close() {
    this.login = false;
  }
}
