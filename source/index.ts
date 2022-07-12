declare global {
  interface Window {
    FooterSmall: typeof FooterSmall;
  }
}

type SocialLinkType = { [key: string]: string };
type SocialLinksType = Array<SocialLinkType>;

const Colors = {
  white: '#fff',
  offWhite: '#f1f1f1',
  grayLight: '#e6e6e6',
  gray: '#222',
  grayDark: '#454545',
  red: '#e21833',
  redDark: '#951022',
  yellow: '#FFD200',
  green: '#70ebd6',
};
const Breakpoints = {
  smallMobileMax: 479,
  mediumMobileMin: 480,
  socialIconsTransitionPoint: 700,
  largeMobileMax: 767,
  tabletMin: 768,
  tabletMax: 1023,
  desktopMin: 1024,
};

const SourceSans = `Source Sans,Source Sans Pro,sans-serif`;

const ELEMENT_NAME = 'umd-footer-small';

const CONTAINER_CLASS = 'umd-footer-container';
const LOCK_CLASS = 'umd-footer-lock';
const LOGO_CLASS = 'umd-footer-logo';
const CONTACT_CLASS = 'umd-footer-contact';
const SOCIAL_LINKS_CLASS = 'umd-footer-social-links';
const UTILITY_CONTAINER_CLASS = 'umd-footer-utility-container';
const LOGO_CONTACT_WRAPPER_CLASS = 'umd-footer-logo-contact-wrapper';

const ANIMATION_IN_SPEED = 800;
const ANIMATION_OUT_SPEED = 400;

const logoSvg = `<svg title="university of maryland logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 314 50" style="enable-background:new 0 0 314 50;" xml:space="preserve"> <style type="text/css"> .st0{fill:url(#SVGID_1_);} .st1{fill:#CCCCCC;} .st2{fill:#FFD520;} .st3{fill:#E03A3E;} .st4{stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;}</style><g><path d="M81.1,49.2L69.4,24.7h-0.1L68,45.3c-0.1,2.3,1.6,2.8,3.7,2.9v0.9h-9.6v-0.9c3.4,0,3.8-0.7,4-4.9l1.1-17.9c0.2-3,0.1-3.9-2.8-4v-0.8h7l11.1,23.1l11-23.1h6.7v0.8c-2.2,0.2-3.1,0.2-3,1.8L98.7,44c0.3,4.2,0.6,4.2,4,4.2v0.9H90.9v-0.9c2.2,0,4.3-0.6,4.1-3l-1.3-20.6h-0.1L82.1,49.2H81.1z"/><path d="M121.1,34.5h-7.9l3.9-10.6L121.1,34.5z M121.9,36.5l3.1,8.3c0.2,0.5,0.5,1.1,0.5,1.9c0,1.3-1,1.6-3.6,1.6h-1.2v0.9h12.6v-0.9c-2.3,0-3.3-0.5-4.2-2.9L119.6,20h-4l0.4,1l-8.4,22.8c-1.5,4-2,4.5-5,4.5v0.9h10.6v-0.9h-0.7c-2.5,0-3.7-0.5-3.7-1.7c0-0.6,0.6-2,0.9-2.9l2.7-7.2H121.9z"/><path d="M141.6,21.2c0.8-0.1,1.4-0.1,2.3-0.1c7.1,0,9,3.3,9,7.6c0,5.5-3.4,7.7-8.5,7.7c-1.1,0-1.8,0-2.9-0.1V21.2z M141.6,37.1c0.7,0,1.3,0.1,2.4,0.1c1.2,0,2,0,3.1-0.1c1.1,0.7,2.7,2.1,4.8,4.1l3,3c4.1,4.1,6.1,5.8,14.2,5.4v-0.8c-3.5-0.2-6.3-1.9-9-4.6l-3.6-3.6c-2.1-2.1-3.5-3.4-5.2-4.8c3.8-1.1,6.1-4,6.1-7.4c0-4.7-3.8-8.2-12.3-8.2c-3,0-3.9,0-5.8,0.1c-1.9,0.1-4.7,0.3-5.8,0.3v0.9h1c2.7,0,3.4,0.8,3.4,3.7v19.3c0,3.1-1,3.8-3.7,3.8h-0.8v0.9h13v-0.9h-1.1c-2.6,0-3.7-0.7-3.7-3.4V37.1z"/><path d="M184.7,24.8c1.5-2.5,0.6-3.3-2.3-3.3v-0.9h10.3v0.9c-3.1,0.2-4.4,1.5-5.7,3.6L179.4,38v6.9c0,2.4,0.9,3.4,3.7,3.4h0.6v0.9H171v-0.9h0.9c2.9,0,3.7-1.1,3.7-3.3v-6.5l-8.2-12.7c-2.2-3.5-3.3-4.2-6.3-4.3v-0.9h12.2v0.9c-3.6,0-3.8,0.9-2.5,3l7.4,11.3L184.7,24.8z"/><path d="M212.8,49.2h-20.5v-0.9h1.5c2.1,0,2.9-0.7,2.9-3V25c0-2.4-0.7-3.4-3.6-3.4h-0.6v-0.9H206v0.9h-1.7c-3,0-3.8,0.3-3.8,3.2v21.1c0,1.2,0.5,1.7,1.8,1.7h6.7c2.7,0,3.5-1.1,6.4-5.1h0.8L212.8,49.2z"/><path d="M233.8,34.5h-7.9l3.9-10.6L233.8,34.5z M234.6,36.5l3.1,8.3c0.2,0.5,0.5,1.1,0.5,1.9c0,1.3-1,1.6-3.6,1.6h-1.2v0.9H246v-0.9c-2.3,0-3.3-0.5-4.2-2.9L232.2,20h-4l0.4,1l-8.4,22.8c-1.5,4-2,4.5-5,4.5v0.9h10.6v-0.9h-0.7c-2.5,0-3.7-0.5-3.7-1.7c0-0.6,0.6-2,0.9-2.9l2.7-7.2H234.6z"/><path d="M275.7,49.5L252,24.6v19.6c0,3.3,0.7,4,4.6,4v0.9H246v-0.9h0.2c2.8,0,3.8-1,3.8-3.1V22.7c-1.1-0.7-2.2-1.1-3.9-1.1v-0.9h7.2l21.6,22.5V24.9c0-2.8-0.8-3.3-4.5-3.4v-0.9h10.7v0.9c-3.4,0-4.2,0.6-4.2,2.4v25.6H275.7z"/><path d="M289.7,21.3c0.6,0,1.8-0.2,3.7-0.2c6.4,0,9.7,1.6,11.8,3.7c2.7,2.7,3.7,6.5,3.7,9.8c0,4.7-2.1,8.2-3.8,9.9c-2.8,2.8-5.4,3.7-11.6,3.7c-3.6,0-3.8-0.6-3.8-2.5V21.3z M285.9,44.9c0,2.7-1.1,3.3-3.6,3.3h-0.8v0.9h14.7c11.6,0,17-8.3,17-15.2c0-7.6-5.3-13.7-17.5-13.7c-2.4,0-5.2,0-7.7,0.1c-2.5,0.1-4.8,0.2-6.5,0.3v0.8h0.9c2.7,0,3.5,0.7,3.5,3.7V44.9z"/></g><g><path d="M75.5,2.3l0.3,0c1.6,0.1,1.9,0.3,1.9,2.4V10c0,3.8-2.7,4.6-4.9,4.6c-3.1,0-4.9-1.6-4.9-4.6V3.7c0-1.1,0.3-1.4,1.5-1.4h0.5v-1h-6.5v1l0.3,0c1.5,0,1.7,0.2,1.7,1.4v6.6c0,3.7,2.7,6,6.9,6c5.2,0,7-3.3,7-6.1V4.1c0-1.3,0.4-1.8,1.8-1.8l0.3,0v-1h-5.9V2.3z"/><path d="M100.4,2.3l0.3,0c1.8,0,1.9,0.3,1.9,1.4V12L92.3,1.3h-4v1l0.3,0c0.7,0,1.2,0.2,1.6,0.4v11.1c0,0.8-0.2,1.2-1.6,1.2h-0.4v1h5.9v-1h-0.3c-1.8,0-2-0.3-2-1.7v-9l11.2,11.8l0.1,0.1h1v-13c0-0.6,0-0.9,1.8-0.9h0.3v-1h-5.9V2.3z"/><path d="M113.4,2.3l0.3,0c1.2,0.1,1.4,0.3,1.4,1.3v9.7c0,1.4-0.2,1.6-1.4,1.7l-0.3,0v1h6.1v-1h-0.3c-1.4,0-1.6-0.3-1.6-1.5V3.9c0-1.4,0.3-1.5,1.6-1.5h0.3v-1h-6.1V2.3z"/><path d="M137.1,2.3h0.3c1.8,0,1.8,0.4,1.8,0.7c0,0.3-0.1,0.7-0.4,1.3l-3.3,8.7l-3.8-9.5c-0.2-0.5-0.1-0.6-0.1-0.7c0.2-0.3,0.8-0.4,2-0.5l0.3,0v-1H127v1h0.3c1.2,0,1.4,0.2,2,1.6l5,12.5h1.5l4.8-12.3c0.5-1.3,1-1.8,2.1-1.8h0.3v-1h-5.9V2.3z"/><path d="M161.8,12.3c-0.6,2-1,2.4-2.3,2.4h-3.5c-0.7,0-0.9-0.1-0.9-1V9.1h3.6c0.7,0,1.1,0,1.3,1.5l0,0.3h1V6h-1l0,0.3c-0.1,1.3-0.5,1.4-1,1.4H155v-5h4.5c0.6,0,1.1,0.2,1.4,2.1l0,0.3h1l-0.2-3.8h-11.5v1h0.8c1.3,0,1.5,0.4,1.5,1.5v9.6c0,1.2-0.2,1.6-1.8,1.6h-0.9v1h12.7l0.4-4h-1L161.8,12.3z"/><path d="M185.1,13.1l-1.8-1.8c-0.8-0.8-1.5-1.5-2.2-2c1.7-0.7,2.7-2.1,2.7-3.8c0-2.7-2.4-4.3-6.4-4.3c-1.5,0-1.9,0-2.9,0.1l-0.6,0c-0.8,0.1-1.8,0.1-2.2,0.1h-0.3v1h0.8c1.2,0,1.4,0.3,1.4,1.5v9.6c0,1.4-0.4,1.6-1.5,1.6h-0.7v1h7v-1h-0.8c-1.2,0-1.5-0.3-1.5-1.4v-3.5c0.2,0,0.5,0,0.9,0c0.5,0,0.8,0,1.2,0l0.2,0c0.6,0.4,1.4,1.1,2.2,1.9l1.5,1.5c1.9,1.9,3,2.8,6.3,2.8c0.3,0,0.6,0,1,0l0.3,0v-1l-0.3,0C187.8,15.2,186.5,14.5,185.1,13.1z M176,2.1c0.3,0,0.5,0,0.8,0c2.9,0,4.2,1.1,4.2,3.5c0,2.4-1.3,3.5-3.9,3.5l-0.6,0c-0.2,0-0.4,0-0.5,0V2.1z"/><path d="M199.8,7.2c-1.6-1-3.1-2-3.1-3.3c0-1.1,0.9-1.8,2.2-1.8c1.5,0,2.8,1,3.4,2.5l0.1,0.2h0.9l-0.5-3.5h-0.8L202,1.4c-0.1,0.1-0.1,0.1-0.2,0.1c-0.3,0-0.5-0.1-0.8-0.2c-0.5-0.2-1.1-0.4-2.3-0.4c-2.5,0-4.3,1.5-4.3,3.6c0,2.2,2.1,3.6,4,4.8c1.7,1.1,3.2,2,3.2,3.4c0,1.6-1.4,2.4-2.8,2.4c-1.7,0-3.1-1.2-3.5-3l-0.1-0.2h-1l0.6,4.1h0.8l0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.4,0.1,0.6,0.2c0.7,0.2,1.7,0.5,2.5,0.5c2.8,0,4.9-1.8,4.9-4.2C204,9.8,201.8,8.5,199.8,7.2z"/><path d="M212.9,2.3l0.3,0c1.2,0.1,1.4,0.3,1.4,1.3v9.7c0,1.4-0.2,1.6-1.4,1.7l-0.3,0v1h6.1v-1h-0.3c-1.4,0-1.6-0.3-1.6-1.5V3.9c0-1.4,0.3-1.5,1.6-1.5h0.3v-1h-6.1V2.3z"/><path d="M240.8,1l0,0.2c0,0-0.1,0.1-0.4,0.1h-11c-0.1,0-0.3,0-0.4-0.1l0-0.3h-1l-0.4,4.3h1l0-0.2c0.4-2.1,0.8-2.3,1.4-2.3h3.7v11c0,1-0.2,1.4-1.5,1.4H231v1h7.8v-1h-1.1c-1.3,0-1.5-0.4-1.5-1.4v-11h3.7c0.6,0,1,0.2,1.4,2.3l0,0.2h1L241.8,1H240.8z"/><path d="M259.7,2.3h0.3c0.9,0,1.1,0.2,1.2,0.3c0,0.1,0.1,0.3-0.3,0.9l-3,5.1l-3.4-5.2c-0.4-0.6-0.4-0.7-0.3-0.8c0-0.1,0.2-0.2,1.3-0.2h0.3v-1h-6.6v1l0.3,0c1.3,0,1.8,0.2,2.9,2l4,6.3v3.1c0,0.9-0.2,1.3-1.5,1.3h-0.7v1h6.9v-1h-0.6c-1.3,0-1.5-0.4-1.5-1.4v-3.3l3.8-6.3c0.6-1,1.2-1.5,2.6-1.7l0.3,0v-1h-5.7V2.3z"/><path d="M286.4,1c-5,0-8.6,3.4-8.6,8c0,4.2,3.7,7.4,8.5,7.4c4.8,0,8.4-3.5,8.4-8.1C294.7,4.2,291.1,1,286.4,1z M285.8,2.1c3.6,0,6.2,2.8,6.2,6.9c0,3-1.6,6.2-5.2,6.2c-3.6,0-6.3-3-6.3-7C280.5,5.8,281.9,2.1,285.8,2.1z"/><path d="M307.9,2.7c1.2,0,1.6,0.4,1.6,1.6l0,0.3h1V1.3h-10.8v1l0.3,0c1.3,0,1.4,0.4,1.4,1.8v8.9c0,1.8-0.2,1.9-1.4,1.9l-0.3,0v1h6.1v-1h-0.3c-1.6,0-1.7-0.4-1.7-1.5V8.9h3.9c0.9,0,1.3,0.2,1.3,1.4l0,0.3h1V6h-1l0,0.3c-0.1,1-0.5,1.2-1,1.2h-4.2V2.7H307.9z"/></g><g><g><radialGradient id="SVGID_1_" cx="26.4871" cy="25.3962" r="25.2868" gradientUnits="userSpaceOnUse"><stop  offset="0" style="stop-color:#FFFFFF"/><stop  offset="0.5149" style="stop-color:#FDFDFD"/><stop  offset="0.7003" style="stop-color:#F6F6F6"/><stop  offset="0.8325" style="stop-color:#EBEBEB"/><stop  offset="0.9387" style="stop-color:#DADADA"/><stop  offset="1" style="stop-color:#CCCCCC"/></radialGradient><path class="st0" d="M26.5,50.7c-13.9,0-25.3-11.3-25.3-25.3c0-13.9,11.3-25.3,25.3-25.3c13.9,0,25.3,11.3,25.3,25.3C51.8,39.3,40.4,50.7,26.5,50.7z"/></g><g><path class="st1" d="M26.5,50.7c-13.9,0-25.3-11.3-25.3-25.3c0-13.9,11.3-25.3,25.3-25.3c13.9,0,25.3,11.3,25.3,25.3C51.8,39.3,40.4,50.7,26.5,50.7z M26.5,0.4c-13.8,0-25,11.2-25,25s11.2,25,25,25c13.8,0,25-11.2,25-25S40.2,0.4,26.5,0.4z"/></g><path class="st2" d="M51.6,24.8c0,0.1-0.4,0.5-0.9,0.8c0,0,0,0,0,0c-0.6,0.4-1.6,0.7-2.7,1c-1.2,0.3-2.6,0.6-4.2,0.8c-1.6,0.2-3.4,0.4-5.3,0.6c0,0,0,0,0,0c-2.4,0.2-4,0.3-5.9,0.4c-2.1,0.1-4.2,0.1-6.4,0.1c0,0.3,0,0.6,0,0.8c0,2,0,3.8,0,5.6c0.1,9.6,0.1,9.6,0.4,15.5c13.9,0,25.1-11.2,25.1-25.1C51.6,25.4,51.6,25,51.6,24.8z"/><g><path d="M26.1,29.4c0,2,0,3.8,0,5.6c4,3.8,4,3.8,5.7,5.5c0.4-3.2,0.7-7,0.7-11.2c0-0.3,0-0.6,0-0.8c-2.5,0.1-4.2,0.1-6.4,0.1C26.1,28.9,26.1,29.1,26.1,29.4z"/><path d="M35.3,44.8c-0.9-1.4-1.7-2.4-3.5-4.3c-0.9,6.1-2.4,9.9-4.3,10c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6-0.1C31.4,50.2,33.6,48.2,35.3,44.8z"/><path d="M38.1,34.5c0,0-1.4,7.5-2.8,10.3c0.8,1.5,0.8,2.1,0.5,3.1c2.4-1.9,4.4-4.6,5.8-8.1C40.8,38,40.2,37,38.1,34.5z"/><path d="M31,50.1c0.5-0.1,0.5-0.1,1.5-0.3l0.6-0.2c1.9-0.6,2.2-0.9,2.8-1.7c-1.7,1.2-3.4,2-5.4,2.3L31,50.1z"/><path d="M42.1,44c3.6-4.1,5.8-9.9,5.8-16.5c0-0.3,0-0.6,0-0.8c-1.2,0.3-2.6,0.6-4.2,0.8c0,0.3,0,0.6,0,0.8c0,4.3-0.7,8.2-2.1,11.5C42.5,41.7,42.5,42.5,42.1,44z"/><path d="M38.5,28c-2.4,0.2-4,0.3-5.9,0.4c3.4,3.6,4.2,4.4,5.6,6.1c0.2-1.8,0.3-3.7,0.3-5.6C38.5,28.6,38.5,28.3,38.5,28z"/></g><path d="M21,1.6c1.4-0.6,2.7-1.2,5.5-1.3l0,0C24.6,0.4,22.7,0.9,21,1.6"/><g><path class="st3" d="M43.3,27.4c-1.3-0.2-2.4-2.4-1.8-4.6c-1.8,1.3-3.9-1.3-3.6-3.8c0.2-1.3,1-2.4,2.5-1.9c-0.6-2-1.3-4-2.2-5.8c-1.3,0.2-2.7,0.3-4.2,0.4c1.3,2,0,3.9-1.8,3.6c-1.4-0.2-2.6-1.6-2.3-3.3c-1.1,0.8-3.4,0.5-3.6-1.9c-0.1,5.1-0.1,11.6-0.1,18.4c6.7,0.1,14.5-0.6,17.6-1.1c0,0,0,0,0,0C43.6,27.5,43.4,27.5,43.3,27.4z"/></g><g><path class="st3" d="M10.3,32.5c1.9-0.7,4.2,2.5,3.4,4.7c-0.4,1-1.4,1.3-2.4,0.7c0.6,1.9,1.3,3.6,2.1,5.1c1.3,0.2,2.8,0.3,4.4,0.5c-1.3-1.6-0.3-2.9,1.5-2.8c1.5,0.1,3.5,1.3,3,3c1.3-0.6,3.6-0.1,3.9,1.6c-0.1-3.8-0.1-9.3-0.1-15.8c0-0.3,0-0.5,0-0.8c-2.1,0-4.3-0.1-6.4-0.2c-4.5-0.2-7.6-0.4-11.4-1.1c0,0,0,0,0,0C10.2,28,10.8,30.9,10.3,32.5z"/></g><path class="st3" d="M38.4,9.3L38.4,9.3L38.4,9.3C38.4,9.3,38.4,9.3,38.4,9.3L38.4,9.3C38.4,9.3,38.4,9.3,38.4,9.3c0.3,0,0.5-0.1,0.7-0.1c1.4-0.3,4.7-1,4.7-2c0,0,1.3,1.3,2.2,3.1c0.1,0.2,0.2,0.4,0.3,0.7c0.1,0.3,0.2,0.7,0.2,0.9c0,0.5-0.4,0.6-0.7,0.4c0,0-0.1,0-0.1,0c-1.3-0.6-1.7-1.8-2-2.3c-0.7,0.2-1.7,0.7-2.6,0.9c-0.1,0-0.3,0.1-0.4,0.1c1.1,1.8,2.1,3.8,2.8,5.9c1.3-1.3,3.2,1.1,3.3,3.4c0.1,1.4-0.6,2.6-1.8,2.1c1,1.9,0.7,4.6-1.2,5.2C43.4,21.4,42.4,15.9,38.4,9.3L38.4,9.3L38.4,9.3"/><path class="st3" d="M38.4,9.4L38.4,9.4L38.4,9.4L38.4,9.4L38.4,9.4c-3.2-4.9-5.7-6.7-9-7.9c-0.6-0.3-2.8-1.1-3-1.1l0,0l0,0c0.6,0.8,1.7,1.3,2,1.4c-0.1,0.3,0,0.9,1,1.7c0.2,0.1,0.3,0.2,0.5,0.3c1.6,0.9,2,0.2,2.1-0.1c0,0,0,0,0,0c0.5,0.4,1.5,1.1,2.5,2.4c0.6,0.7,1.2,1.4,1.6,2c-1,0.1-2.3,0.2-3.7,0.3c-0.1-1.6-1.2-2.4-2-2.7C29,5,28.5,6.9,29.2,8.2c-1.3-0.7-2.7-0.1-3,1.9C31.2,10.1,34.6,9.9,38.4,9.4L38.4,9.4L38.4,9.4"/><path class="st3" d="M38.7,4.8c0,0,0-0.1,0-0.2c0-0.1,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0.3-0.1,1-0.2,3.1,1.2c-4.4-3.4-9-4.8-13-5.2c-0.6-0.1-1.6-0.1-1.6-0.1c1.3,0.1,2.1,0.4,2.3,0.5C29.8,0.9,30,1,30,1c0,0,0,0,0,0c0.3,0,0.5,0.1,0.9,0.2c0.4,0.1,1,0.4,1.6,0.60.9-0.2,2.2-0.3,2.8-0.5C41,7.1,39.1,5.6,38.7,4.8z"/><path class="st3" d="M13.1,44.3C11,44,9.7,43.6,8.9,43.2c-0.1-0.1-0.2-0.1-0.2-0.1c0,0-1.2-1.2-2.3-2.6c-0.8-1-1.4-2.1-1.5-2.2c0,0,0.2,0,0.3,0c1.1,0.4,2.9,3.5,2.9,3.5c0.7,0.3,1.6,0.5,2.7,0.7c-1-1.6-1.9-3.3-2.6-5.2c-1.6,0.8-3.6-3.3-2.9-5.1c0.1-0.4,0.5-1.1,1.6-0.3c-0.8-1.8-0.6-4.6,1.3-4.6C8.3,33.4,9.2,38.7,13.1,44.3"/><path class="st3" d="M26.2,45.6c-0.2,0.9-1.4,1.7-3.2,1c0.8,1.1,0.1,2-1.3,1.7c-1.1-0.2-2.4-1.1-2.5-2c-1.4-0.1-2.6-0.2-3.7-0.4c1.1,1.2,2.2,2.2,3.5,3c0.2-0.1,0.4,0,1.1,0.2c1,0.3,1.9,0.8,2.8,1.1c0,0-0.2,0-0.2,0c-0.7-0.1-0.9-0.2-1.3-0.2c-1.9-0.4-5.1-1.4-8.3-5.7h0h0l0,0c3.9,0.6,7.7,0.9,13.1,0.9C26.2,45.4,26.2,45.5,26.2,45.6"/><path class="st2" d="M26.4,0.3C13,0.3,1.6,11.3,1.4,24.9l0,0c0,0,0.1,0.3,0.7,0.6v0v0c0.5,0.3,1.3,0.7,2.3,1c1.3,0.3,2.6,0.6,3.9,0.8l0,0c3.8,0.6,6.9,0.9,11.4,1.1c2.1,0.1,4.3,0.2,6.4,0.2c0-1.3,0-8.6,0-15.6c0-0.9,0-1.9,0-2.8C26.3,5.6,26.3,0.9,26.4,0.3L26.4,0.3z"/><path d="M38.5,47.5c-1.4,0.8-1.7,0.8-3.6,1.6c-0.5,0.2-1,0.3-1.6,0.5c3.4-0.9,8-4.7,8.8-5.6c-0.4,0.9-0.7,1.5-1.7,2.3C40.1,46.5,38.9,47.2,38.5,47.5z"/><path d="M4.4,26.5c-1-0.3-1.8-0.6-2.3-1C2.3,16.5,7.4,8.4,14.7,4c-1.7,1.5-2.5,2.5-3.4,4.6C7.2,13.3,4.6,19.7,4.4,26.5"/><path d="M14.8,4c1.8-1.3,2.9-2.3,5.8-3c2-0.5,3.8-0.7,5.9-0.7l0,0C22.2,0.4,18.2,1.9,14.8,4"/><path d="M13.4,28c-1.8-0.2-3.6-0.4-5.1-0.7c0.1-4.6,1.1-8.9,2.7-12.8c0.6,2.5,1.2,3.9,3,6.9C13.6,23.6,13.4,25.8,13.4,28"/><path d="M26.2,10.1c0,2.8,0,5.6-0.1,7.8c0,2.2,0,3.8,0,4.1c-2.5-2.6-3.8-4-5.6-6.3c1.2-7.8,3.4-14,5.9-15.4l0,0l0,0C26.3,1,26.3,5.4,26.2,10.1z"/><g><path d="M17.4,9.8c-1.6,3.3-2.8,7.3-3.4,11.6c1.5,2.3,2.5,3.6,5.5,7c0-4.5,0.4-8.8,1-12.8C18.7,13.1,18.1,11.9,17.4,9.8z"/></g><path class="st4" d="M50.6,25.6c0,0.3,0,0.6,0,0.8c0,8.9-4.3,16.3-11.1,20.4L39.4,47c3.2-2,7.2-5.3,9.8-10.7c2.7-5.4,2.4-11.4,2.4-11.4C51.5,25.1,51.1,25.4,50.6,25.6z"/><g><path d="M21,1.6c-3.7,1.4-7,3.9-9.6,7c-0.7,2.3-0.7,3.6-0.4,6c1.6-3.8,3.9-7.1,6.6-9.6C18.4,3.5,18.9,2.7,21,1.6z"/></g><path d="M17.4,9.9c-0.5-2.1-0.5-3.1,0.2-4.9c2.6-2.4,5.6-4.2,8.9-4.7C22.9,1.2,19.7,4.9,17.4,9.9"/></g></svg>
`;

const icons: { [key: string]: string } = {
  youtube: `<svg title="youtube icon" aria-hidden="true" class="youtube-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="350" height="350" viewBox="0 0 350 350" xml:space="preserve"><defs></defs><g id="icon" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)" ><path d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z M 36 58.5 v -27 L 59.382 45 L 36 58.5 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>`,
  facebook: `<svg title="facebook icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.27 470.51"><path d="M271.52,154.17V113.63a89.17,89.17,0,0,1,.85-14.13,27.43,27.43,0,0,1,3.86-9.85q3-4.86,9.7-6.71t17.86-1.86h40.53V0h-64.8q-56.25,0-80.81,26.69t-24.55,78.66v48.82H125.62v81.09h48.54V470.51h97.36V235.26h64.81l8.56-81.09Z" transform="translate(-125.62)"></path></svg>`,
  twitter: `<svg title="twitter icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449.96 365.44"><path d="M450,85.66a184.2,184.2,0,0,1-53.11,14.28q30-18,40.55-50.82a181.21,181.21,0,0,1-58.53,22.26q-27.42-29.11-67.39-29.12-38.25,0-65.24,27t-27,65.23a102.63,102.63,0,0,0,2.28,21.13,257,257,0,0,1-106.07-28.4A261.53,261.53,0,0,1,31.4,59.1a90.39,90.39,0,0,0-12.56,46.54,89.83,89.83,0,0,0,11.14,44,92.08,92.08,0,0,0,30,32.83,91.52,91.52,0,0,1-41.69-11.71v1.14q0,33.4,21,58.68a90.75,90.75,0,0,0,53,31.83A95.64,95.64,0,0,1,68,265.52a118.37,118.37,0,0,1-17.42-1.42,92.44,92.44,0,0,0,86.23,63.95Q86.51,367.44,22.27,367.44A195.31,195.31,0,0,1,0,366.3q64.25,41.4,141.61,41.4,49.11,0,92.21-15.56t73.67-41.69a278.82,278.82,0,0,0,52.67-60.09,268,268,0,0,0,33-71A262.06,262.06,0,0,0,404,145.32q0-8-.29-12A193.22,193.22,0,0,0,450,85.66Z" transform="translate(0 -42.26)"></path></svg>`,
  instagram: `<svg title="instagram icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.59-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z" transform="translate(0)"></path></svg>`,
  vimeo: `<svg title="vimeo icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"/></svg>`,
};

const template = document.createElement('template');

template.innerHTML = `
  <style>
  
    :host {
      display: block !important;
      background-color: ${Colors.offWhite} !important;
      position: relative !important;
      min-width: 320px;
      font-family: ${SourceSans};
    }

    :host svg {
      width: 100%;
      height: 100%;
      fill: ${Colors.grayDark};
      transition: fill ${ANIMATION_OUT_SPEED}ms;
      -webkit-transition: fill ${ANIMATION_OUT_SPEED}ms;
      -o-transition: fill ${ANIMATION_OUT_SPEED}ms;
    }


    :host .${SOCIAL_LINKS_CLASS} a:hover svg,
    :host .${SOCIAL_LINKS_CLASS} a:hover svg path, 
    :host .${SOCIAL_LINKS_CLASS} a:focus svg,
    :host .${SOCIAL_LINKS_CLASS} a:focus svg path {
      fill: ${Colors.redDark} !important;
    }

    :host .${LOCK_CLASS} {
      padding: 0 20px;
    }

    @media (max-width: ${Breakpoints.smallMobileMax}px) {
      :host .${CONTAINER_CLASS} {
        padding: 30px 0;
      }
    }

    @media (min-width: ${Breakpoints.mediumMobileMin}px) {
      :host .${CONTAINER_CLASS} {
        padding: 20px 0;
      }
    }

    @media (min-width: ${Breakpoints.socialIconsTransitionPoint}px) {
      :host .${CONTAINER_CLASS} .${LOCK_CLASS} {
        display: flex;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .${CONTAINER_CLASS} .${LOCK_CLASS} {
        justify-content: space-between;
        max-width: ${Breakpoints.tabletMax}px;
      }
    }

    @media (min-width: ${
      Breakpoints.socialIconsTransitionPoint
    }px) and (max-width: ${Breakpoints.tabletMax}px) {
      :host .${LOGO_CONTACT_WRAPPER_CLASS} {
        padding-right: 60px;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .${LOGO_CONTACT_WRAPPER_CLASS} {
        display: flex;
        justify-content: space-between;
        width: 66%;
      }
    }

    :host .${LOGO_CLASS} {
      min-width: 280px;
      display: flex;
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host .${LOGO_CLASS} {
        margin-bottom: 20px;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .${LOGO_CLASS} {
        justify-content: center;
      }
    }

    :host .${LOGO_CLASS} svg {
      width: 80%;
      max-width: 280px;
    }

    :host .${LOGO_CLASS}:hover svg, 
    :host .${LOGO_CLASS}:focus svg {
      fill: inherit;
    }

    :host .${CONTACT_CLASS} {
      color: ${Colors.grayDark};
    }

    @media (max-width: ${Breakpoints.socialIconsTransitionPoint - 1}px) {
      :host .${CONTACT_CLASS} {
        margin-bottom: 20px;
      }
    }

    :host .${SOCIAL_LINKS_CLASS} {
      display: flex;
      align-items: center;
    }

    @media (min-width: ${Breakpoints.tabletMin}px) {
      :host .${SOCIAL_LINKS_CLASS} {
        justify-content: center;
      }
    }

    :host .${SOCIAL_LINKS_CLASS} a {
      height: 20px;
      width: 20px;
      display: block;
      margin-left: 25px;
    }

    :host .${SOCIAL_LINKS_CLASS} a:first-child {
      margin-left: 0;
    }

    :host .${UTILITY_CONTAINER_CLASS} {
      background-color: ${Colors.grayLight};
      padding: 10px 0;
    }

    :host .${UTILITY_CONTAINER_CLASS} .${LOCK_CLASS} {
      display: block;
      visibility: hidden;
    }

    :host .${UTILITY_CONTAINER_CLASS}[data-layout="grid"] .${LOCK_CLASS} {
      display: grid;
      grid-gap: 20px;
      visibility: visible;
    }

    @media (min-width: ${Breakpoints.mediumMobileMin}px) {
      :host .${UTILITY_CONTAINER_CLASS}[data-layout="grid"] .${LOCK_CLASS} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (min-width: ${Breakpoints.largeMobileMax}px) {
      :host .${UTILITY_CONTAINER_CLASS}[data-layout="grid"] .${LOCK_CLASS} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    :host .${UTILITY_CONTAINER_CLASS}[data-layout="row"] .${LOCK_CLASS} {
      display: flex;
      align-items: center;
      visibility: visible;
    }

    @media (min-width: ${Breakpoints.socialIconsTransitionPoint}px) {
      :host .${UTILITY_CONTAINER_CLASS}[data-layout="row"] .${LOCK_CLASS} {
        justify-content: center;
      }
    }

    :host .${UTILITY_CONTAINER_CLASS} a,
    :host .${UTILITY_CONTAINER_CLASS} p {
      color: ${Colors.grayDark};
      text-transform: uppercase;
      letter-spacing: .5px;
      font-size: 13px;
      transition: color ${ANIMATION_OUT_SPEED}ms;
      position: relative;
      white-space: nowrap;
      margin-top: 0;
      margin-bottom: 0;
      line-height: 1em;
      display: inline-block;
    }

    :host .${UTILITY_CONTAINER_CLASS}[data-layout="row"] a,
    :host .${UTILITY_CONTAINER_CLASS}[data-layout="row"] p {
      margin-left: 40px;
      position: relative;
    }

    :host .${UTILITY_CONTAINER_CLASS} .${LOCK_CLASS} > div:first-of-type a {
      margin-left: 0;
    }

    :host .${UTILITY_CONTAINER_CLASS} a:hover,
    :host .${UTILITY_CONTAINER_CLASS} a:focus {
      text-decoration: underline;
      color: ${Colors.redDark};
    }

    :host .${UTILITY_CONTAINER_CLASS}[data-layout="row"] span {
      position: absolute;
      left: -20px;
      background-color: ${Colors.red};
      height: 12px;
      width: 1px;
      transform: rotate(10deg);
      display: block;
      top: 2px;
    }

    @media (max-width: ${Breakpoints.smallMobileMax}px) {
      ::slotted(div[slot="contact"]) {
        padding: 10px 0 !important;
      }
    }

    @media (max-width: ${Breakpoints.largeMobileMax}px) {
      ::slotted(div[slot="contact"]) {
        padding-top: 10px !important;
      }
    }

  </style>
`;

const makeLinkElement = ({ name, url }: { name: string; url: string }) => {
  const tag = document.createElement('a');

  tag.setAttribute('href', url);
  tag.setAttribute('target', '_blank');
  tag.setAttribute('rel', 'noopener noreferrer');
  tag.innerHTML = `${name}`;

  return tag;
};

const makeLogo = () => {
  const link = document.createElement('a');

  link.setAttribute('rel', 'noopener noreferrer');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'https://umd.edu');
  link.classList.add(LOGO_CLASS);

  link.innerHTML = logoSvg;

  return link;
};

const makeSocial = ({ socialLinks }: { socialLinks: SocialLinksType }) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add(SOCIAL_LINKS_CLASS);

  const makeAnchor = (social: SocialLinkType) => {
    const icon = icons[social['name']];
    const link = makeLinkElement({ name: icon, url: social['href'] });

    link.setAttribute('aria-label', `${social['name']} website`);

    wrapper.appendChild(link);
  };

  socialLinks.forEach((link) => makeAnchor(link));

  return wrapper;
};

const makeContainer = (args: any) => {
  const container = document.createElement('div');
  const lock = document.createElement('div');
  const contactSlot = document.createElement('slot');
  const contactWrapper = document.createElement('div');
  const logoContactWrapper = document.createElement('div');
  const logo = makeLogo();
  const social = makeSocial({ ...args });

  contactSlot.setAttribute('name', 'contact');
  contactWrapper.classList.add(CONTACT_CLASS);

  lock.classList.add(LOCK_CLASS);
  container.classList.add(CONTAINER_CLASS);
  logoContactWrapper.classList.add(LOGO_CONTACT_WRAPPER_CLASS);

  contactWrapper.appendChild(contactSlot);

  logoContactWrapper.appendChild(logo);
  logoContactWrapper.appendChild(contactWrapper);
  lock.appendChild(logoContactWrapper);
  lock.appendChild(social);

  container.appendChild(lock);

  return container;
};

const makeUtilityLinks = ({
  addedLinks,
}: {
  addedLinks: Array<HTMLElement>;
}) => {
  const container = document.createElement('div');
  const lock = document.createElement('div');
  const privacyLink = makeLinkElement({
    name: 'Privacy Notice',
    url: 'https://www.umd.edu/privacy-notice',
  });
  const accessibilityLink = makeLinkElement({
    name: 'Web Accessibility',
    url: 'https://www.umd.edu/web-accessibility',
  });
  const copyRight = document.createElement('p');
  const privacyIncludeSlash =
    Array.isArray(addedLinks) && addedLinks.length > 0 ? true : false;

  const wrapElement = (element: HTMLElement, withSlash = true) => {
    const wrapper = document.createElement('div');
    const span = document.createElement('span');

    if (withSlash) {
      element.appendChild(span);
    }

    wrapper.appendChild(element);

    return wrapper;
  };

  lock.classList.add(LOCK_CLASS);
  container.classList.add(UTILITY_CONTAINER_CLASS);

  addedLinks.forEach((link, i) => {
    if (i > 0) {
      lock.appendChild(wrapElement(link));
    } else {
      lock.appendChild(wrapElement(link, false));
    }
  });

  copyRight.innerHTML = `&copy;${new Date().getFullYear()}`;

  lock.appendChild(wrapElement(privacyLink, privacyIncludeSlash));
  lock.appendChild(wrapElement(accessibilityLink));
  lock.appendChild(wrapElement(copyRight));

  container.appendChild(lock);

  return container;
};

const makeMarkup: (args: any) => Promise<HTMLElement> = (args) => {
  return new Promise((resolve) => {
    const wrapper = document.createElement('div');
    const main = makeContainer({ ...args });
    const utility = makeUtilityLinks({ ...args });

    wrapper.appendChild(main);
    wrapper.appendChild(utility);

    resolve(wrapper);
  });
};

const debounce = function <T extends Function>(cb: T, wait = 50) {
  let h = 0;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
};

export default class FooterSmall extends HTMLElement {
  _shadow: ShadowRoot;

  _paddingAmount = '20';
  _socialLinks = [] as SocialLinksType;

  constructor() {
    super();

    this._shadow = this.attachShadow({ mode: 'open' });
    this._shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['padding', 'youtube', 'facebook', 'twitter', 'instagram', 'vimeo'];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ) {
    if (name !== 'padding' && newValue) {
      const currentIndex = this._socialLinks.findIndex(
        (obj) => name === obj.name,
      );

      if (currentIndex >= 0) {
        this._socialLinks[currentIndex].href === newValue;
      } else {
        this._socialLinks.push({
          href: newValue,
          name,
        });
      }
    }
  }

  async connectedCallback() {
    const addedLinks = Array.from(
      this._shadow.host.querySelectorAll('div[slot="links"] a'),
    );
    const markup = await makeMarkup({
      socialLinks: this._socialLinks,
      addedLinks,
    });

    this._shadow.appendChild(markup);

    window.addEventListener(
      'resize',
      debounce(() => this.eventResize()),
    );

    setTimeout(() => {
      this.sizeUtility();
    }, 300);
  }

  sizeUtility() {
    const container = this._shadow.querySelector(
      `.${UTILITY_CONTAINER_CLASS}`,
    ) as HTMLElement;
    const links = Array.from(
      container.querySelectorAll(`a, p`),
    ) as Array<HTMLElement>;
    const size = links.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.offsetWidth;
    }, links.length * 40 + 40);

    if (window.innerWidth > size) {
      container.setAttribute('data-layout', 'row');
    } else {
      container.setAttribute('data-layout', 'grid');
    }
  }

  eventResize() {
    this.sizeUtility();
  }
}

if (!window.customElements.get(ELEMENT_NAME)) {
  window.FooterSmall = FooterSmall;
  window.customElements.define(ELEMENT_NAME, FooterSmall);
}
