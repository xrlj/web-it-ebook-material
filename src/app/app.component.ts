import {Component, OnInit} from '@angular/core';
import {Platform} from "@angular/cdk/platform";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'web-it-ebook-material';

  isHandsetLandscape = false;
  isHandsetPortrait = false;
  isTabletLandscape = false;
  isTabletPortrait = false;
  isWebLandscape = false;
  isWebPortrait = false;

  constructor(public platform: Platform, public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape, // 手持设备横屏
      Breakpoints.HandsetPortrait,  // 手持设备竖屏
      Breakpoints.TabletLandscape,  // 平板设备横屏
      Breakpoints.TabletPortrait,   // 平板设备竖屏
      Breakpoints.WebLandscape,     // Web横屏
      Breakpoints.WebPortrait       // Web竖屏
    ]).subscribe(result => {
      if (result.matches) {
        this.updateMyLayoutForOrientationChange();
      }
    });
  }

  ngOnInit(): void {
  }

  updateMyLayoutForOrientationChange() {
    this.isHandsetLandscape = this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape);
    this.isHandsetPortrait = this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
    this.isTabletLandscape = this.breakpointObserver.isMatched(Breakpoints.TabletLandscape);
    this.isTabletPortrait = this.breakpointObserver.isMatched(Breakpoints.TabletPortrait);
    this.isWebLandscape = this.breakpointObserver.isMatched(Breakpoints.WebLandscape);
    this.isWebPortrait = this.breakpointObserver.isMatched(Breakpoints.WebPortrait);
  }
}
