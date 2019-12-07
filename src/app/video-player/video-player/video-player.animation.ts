import {animate, style, transition, trigger} from '@angular/animations';

export interface VideoPlayerAnimationParameters {
  readonly startingPositionTop: string;
  readonly startingPositionLeft: string;
}

const animationParameters: VideoPlayerAnimationParameters = {
  startingPositionTop: '0px',
  startingPositionLeft: '0px'
};

const expandFromToStart = {
  top: '{{startingPositionTop}}',
  left: '{{startingPositionLeft}}',
  width: 350,
  height: 266,
  transform: 'none'
};

const expandFromToEnd = {
  top: '50%',
  left: '50%',
  width: '80%',
  height: '65%',
  transform: 'translate(-50%, -50%)'
};

const animateTimeStandard = '350ms ease-out';
const animateTimeFast = '150ms ease-out';


export const VideoPlayerAnimation = {

  fadeInOut: trigger('fadeInOut', [
    transition(':enter', [
      style({opacity: 0}),
      animate(animateTimeStandard, style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate(animateTimeStandard, style({opacity: 0}))
    ])
  ]),

  expandFromTo: trigger('expandFromTo', [
    transition(':enter', [
      style(expandFromToStart),
      animate(animateTimeStandard, style(expandFromToEnd))
    ], {params: animationParameters}),
    transition(':leave', [
      style(expandFromToEnd),
      animate(animateTimeFast, style(expandFromToStart))
    ], {params: animationParameters}),
  ])
};
