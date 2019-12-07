import {animate, group, query, sequence, stagger, style, transition, trigger} from '@angular/animations';

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
  height: 200,
  transform: 'none'
};

const expandFromToEnd = {
  top: '50%',
  left: '50%',
  width: '800px',
  height: '450px',
  transform: 'translate(-50%, -50%)',
};

const animateTimeStandard = '350ms cubic-bezier(0.0, 0.0, 0.2, 1)';
const animateTimeFast = '150ms cubic-bezier(0.0, 0.0, 0.2, 1)';


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

  thumbnailInOut: trigger('thumbnailInOut', [
    transition(':enter', [
      group([

        query('.thumbnail', [
          style({opacity: 0}),
          animate(animateTimeFast, style({opacity: 1}))
        ]),
        query('.play-icon', [
          style({opacity: 0, margin: '10px 0 0 0'}),
          animate(animateTimeStandard, style({opacity: 1, margin: '0'}))
        ])
      ])
    ])
  ]),

  expandFromTo: trigger('expandFromTo', [
    transition(':enter', [
      style(expandFromToStart),
      animate(animateTimeStandard, style(expandFromToEnd))
    ], {params: animationParameters}),
    transition(':leave', [
      style(expandFromToEnd),
      sequence([
        animate(animateTimeFast, style(expandFromToStart)),
        animate(animateTimeFast, style({ opacity: 0 }))
      ])
    ], {params: animationParameters}),
  ])
};
