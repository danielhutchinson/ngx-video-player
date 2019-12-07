import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {VideoPlayerAnimation, VideoPlayerAnimationParameters} from './video-player.animation';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  animations: [
    VideoPlayerAnimation.fadeInOut,
    VideoPlayerAnimation.expandFromTo,
    VideoPlayerAnimation.thumbnailInOut
  ]
})
export class VideoPlayerComponent implements AfterViewInit {
  @Input() public thumbnailSrc: string;
  @Input() public videoSrc: string;

  public showVideoModal: boolean;
  public animationParameters: VideoPlayerAnimationParameters;

  @ViewChild('thumbnail', { static: false })
  private thumbnailElement: ElementRef;

  public ngAfterViewInit(): void {
    this.setAnimationParameters();
  }

  public openVideo(): void {
    this.setAnimationParameters();
    this.showVideoModal = true;
  }

  public closeVideo(): void {
    this.showVideoModal = false;
  }

  private setAnimationParameters(): void {
    const {left, top} = this.thumbnailElement.nativeElement.getBoundingClientRect();
    this.animationParameters = {
      startingPositionTop: `${top}px`,
      startingPositionLeft: `${left}px`
    };
  }
}
