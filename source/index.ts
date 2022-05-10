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
const LOGO_CONTAINER_CLASS = 'umd-footer-logo-container';
const LOGO_CLASS = 'umd-footer-logo';
const CONTACT_CLASS = 'umd-footer-contact';
const SOCIAL_LINKS_CLASS = 'umd-footer-social-links';
const UTILITY_CONTAINER_CLASS = 'umd-footer-utility-container';
const LOGO_CONTACT_WRAPPER_CLASS = 'umd-footer-logo-contact-wrapper';

const ANIMATION_OUT_SPEED = 400;

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 630.56 74.35"><defs><style>.c{fill:url(#b);}.d{fill:#fff;}.e{fill:#d1d3d4;}.f,.g{fill:#e31933;}.h{fill:#231f20;}.g,.i,.j{mix-blend-mode:multiply;}.i{fill:#ffd200;}.k{isolation:isolate;}</style><radialGradient id="b" cx="20.38" cy="-31.84" fx="20.38" fy="-31.84" r="38.05" gradientTransform="translate(17.26 68.29) scale(.98)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".53" stop-color="#fdfdfd"/><stop offset=".71" stop-color="#f6f6f6"/><stop offset=".85" stop-color="#eaebeb"/><stop offset=".96" stop-color="#d9dbdc"/><stop offset="1" stop-color="#d1d3d4"/></radialGradient></defs><g class="k"><g id="a"><g><g><g><path d="M115.97,70.22l-16.32-34.16h-.13l-1.75,28.82c-.19,3.27,2.26,3.97,5.14,4.1v1.24h-13.34v-1.24c4.67,0,5.25-1.02,5.57-6.85l1.54-24.92c.26-4.23,.13-5.38-3.84-5.64v-1.15h9.7l15.43,32.28,15.36-32.28h9.41v1.15c-3.14,.26-4.35,.32-4.22,2.5l2.05,29.02c.38,5.89,.9,5.89,5.57,5.89v1.24h-16.45v-1.24c3.01,0,5.95-.83,5.7-4.23l-1.86-28.7h-.13l-15.94,34.16h-1.47Z"/><path d="M171.82,49.71h-11.07l5.44-14.82,5.63,14.82Zm1.09,2.85l4.29,11.63c.26,.64,.7,1.6,.7,2.62,0,1.79-1.34,2.17-4.99,2.17h-1.66v1.24h17.61v-1.24c-3.2,0-4.55-.64-5.83-4.03l-13.38-35.45h-5.57l.58,1.4-11.65,31.74c-2.05,5.56-2.75,6.26-6.91,6.33v1.24h14.79v-1.24h-1.02c-3.52,0-5.19-.64-5.19-2.36,0-.89,.83-2.81,1.28-4.03l3.71-10.03h13.25Z"/><path d="M200.32,31.23c1.16-.13,1.99-.13,3.22-.13,9.91,0,12.61,4.61,12.61,10.56,0,7.68-4.7,10.69-11.84,10.69-1.48,0-2.45,.07-3.99-.13V31.23Zm0,22.22c1.03,.06,1.87,.13,3.28,.13,1.74,0,2.77-.07,4.38-.13,1.54,1.02,3.8,2.87,6.63,5.66l4.21,4.2c5.67,5.69,8.55,8.11,19.75,7.6v-1.15c-4.93-.32-8.83-2.68-12.61-6.44l-5.05-5.03c-2.98-2.99-4.89-4.78-7.27-6.66,5.24-1.54,8.48-5.57,8.48-10.37,0-6.53-5.27-11.41-17.16-11.41-4.18,0-5.46,.07-8.07,.2-2.61,.12-6.52,.38-8.05,.38v1.24h1.41c3.71,0,4.8,1.15,4.8,5.12v26.9c0,4.26-1.34,5.28-5.12,5.28h-1.09v1.24h18.11v-1.24h-1.48c-3.6,0-5.15-.95-5.15-4.77v-10.75Z"/><path d="M260.49,36.28c2.04-3.51,.83-4.6-3.26-4.6v-1.24h14.43v1.24c-4.34,.32-6.19,2.04-7.98,5.05l-10.61,17.95v9.58c0,3.39,1.21,4.73,5.11,4.73h.83v1.24h-17.62v-1.24h1.23c4,0,5.17-1.47,5.17-4.6v-9.01l-11.45-17.76c-3.13-4.92-4.59-5.81-8.74-5.94v-1.24h17.03v1.24c-5.03,0-5.35,1.21-3.42,4.15l10.28,15.78,9.01-15.33Z"/><path d="M299.73,70.22h-28.58v-1.24h2.11c2.95,0,4.03-.96,4.03-4.22v-28.29c0-3.39-1.02-4.8-5.06-4.8h-.9v-1.24h18.85v1.24h-2.37c-4.16,0-5.25,.45-5.25,4.41v29.48c0,1.73,.7,2.37,2.56,2.37h9.41c3.78,0,4.93-1.47,8.96-7.07h1.15l-4.93,9.35Z"/><path d="M328.91,49.71h-11.08l5.44-14.82,5.63,14.82Zm1.09,2.85l4.29,11.63c.26,.64,.7,1.6,.7,2.62,0,1.79-1.34,2.17-4.99,2.17h-1.66v1.24h17.61v-1.24c-3.2,0-4.55-.64-5.83-4.03l-13.38-35.45h-5.57l.58,1.4-11.65,31.74c-2.05,5.56-2.75,6.26-6.91,6.33v1.24h14.79v-1.24h-1.02c-3.52,0-5.19-.64-5.19-2.36,0-.89,.83-2.81,1.28-4.03l3.71-10.03h13.25Z"/><path d="M387.46,70.69l-33.1-34.67v27.4c0,4.6,1.02,5.56,6.45,5.56v1.24h-14.83v-1.24h.26c3.97,0,5.25-1.34,5.25-4.28v-31.42c-1.47-1.02-3.14-1.53-5.38-1.6v-1.24h10.03l30.1,31.43v-25.45c0-3.9-1.15-4.6-6.26-4.73v-1.24h14.96v1.24c-4.8,0-5.83,.83-5.83,3.33v35.69h-1.66Z"/><path d="M406.87,31.36c.77-.06,2.5-.26,5.13-.26,8.97,0,13.52,2.24,16.47,5.17,3.78,3.77,5.13,9.01,5.13,13.73,0,6.58-2.95,11.5-5.32,13.8-3.97,3.96-7.56,5.17-16.15,5.17-5.06,0-5.26-.89-5.26-3.51V31.36Zm-5.28,32.96c0,3.7-1.6,4.66-5.06,4.66h-1.09v1.24h20.46c16.21,0,23.65-11.59,23.65-21.23,0-10.54-7.44-19.13-24.36-19.13-3.33,0-7.24,.07-10.75,.2-3.5,.12-6.64,.25-9.01,.38v1.14h1.28c3.78,0,4.87,1.03,4.87,5.19v27.56Z"/><path d="M116.21,3.82v.57c-2.07,.03-2.81,.86-2.81,2.84V15.57c0,3.83-2.44,7.93-9.13,7.93-5.89,0-8.92-3.36-8.92-7.78V6.71c0-1.97-.56-2.28-2.66-2.31v-.57h7.94v.57h-.28c-1.7,0-2.44,.46-2.44,2.25V15.23c0,4.16,2.44,6.66,7.03,6.66,3.48,0,7.03-1.45,7.03-6.7v-7.19c0-2.96-.46-3.49-3.02-3.61v-.57h7.26Z"/><path d="M146.33,23.27l-15.95-16.77v13.27c0,2.23,.49,2.69,3.11,2.69v.57h-7.14v-.57h.12c1.91,0,2.53-.65,2.53-2.07V5.17c-.71-.5-1.51-.74-2.59-.77v-.57h4.83l14.51,15.17V6.69c0-1.89-.55-2.23-3.02-2.29v-.57h7.21v.57c-2.32,0-2.81,.4-2.81,1.61V23.27h-.8Z"/><path d="M169.87,23.04h-7.51v-.57c1.91-.09,2.32-.59,2.32-2.66V6.62c0-1.67-.59-2.13-2.32-2.23v-.57h7.51v.57c-1.95,0-2.63,.43-2.63,2.51v13.12c0,1.83,.49,2.44,2.63,2.44v.57Z"/><path d="M190.57,23.5l-6.7-16.69c-.77-1.94-1.14-2.41-3.03-2.41v-.57h8.5v.57c-2.84,.06-3.52,.71-2.93,2.13l5.55,13.82,4.87-12.74c.34-.86,.52-1.48,.52-1.91,0-.93-.77-1.3-2.87-1.3v-.57h7.16v.57c-1.61,0-2.44,.74-3.18,2.65l-6.36,16.45h-1.54Z"/><path d="M225.89,16.08h-.57c-.25-2.2-.84-2.45-2.11-2.45h-5.24v6.61c0,1.43,.53,1.71,1.67,1.71h4.77c2.15,0,2.8-.84,3.57-3.51h.56l-.49,4.6h-16.42v-.57h.86c2.47,0,2.9-.68,2.9-2.54V6.87c0-1.73-.4-2.48-2.47-2.48h-.68v-.57h14.85l.25,4.28h-.56c-.4-2.64-1.17-3.19-2.27-3.19h-6.54v7.63h5.55c1.11,0,1.64-.53,1.8-2.33h.57v5.87Z"/><path d="M246.52,4.17c.55-.06,.96-.06,1.54-.06,4.75,0,6.04,2.23,6.04,5.1,0,3.71-2.25,5.16-5.67,5.16-.71,0-1.17,.03-1.91-.06V4.17Zm0,10.72c.49,.03,.89,.06,1.57,.06,.83,0,1.33-.03,2.1-.06,.74,.5,1.82,1.4,3.17,2.76l2.04,2.05c2.76,2.74,4.14,3.92,9.55,3.68v-.56c-2.38-.16-4.26-1.3-6.08-3.13l-2.44-2.45c-1.46-1.46-2.39-2.32-3.53-3.2,2.53-.74,4.12-2.69,4.12-5.01,0-3.15-2.57-5.49-8.28-5.49-2,0-2.62,.03-3.89,.09-1.27,.07-3.15,.2-3.89,.2v.57h.68c1.79,0,2.32,.56,2.32,2.47v13.02c0,2.08-.65,2.58-2.47,2.58h-.53v.57h8.74v-.57h-.71c-1.73,0-2.47-.47-2.47-2.33v-5.25Z"/><path d="M273.31,18.3c.64,2.74,2.79,4.34,5.19,4.34,2.06,0,4.25-1.2,4.25-3.63,0-4.43-9.86-5.79-9.86-11.18,0-2.55,2.32-4.47,5.46-4.47,2.58,0,3.11,.77,4.19,.77,.25,0,.37-.06,.55-.32h.49l.52,3.92h-.52c-.86-2.22-2.83-3.63-4.95-3.63s-3.45,1.17-3.45,2.89c0,4.37,9.87,5.54,9.87,11.21,0,3.02-2.66,5.28-6.26,5.28-1.69,0-3.85-.85-4.27-.85-.28,0-.49,.16-.61,.4h-.52l-.64-4.74h.58Z"/><path d="M306.73,23.04h-7.51v-.57c1.92-.09,2.32-.59,2.32-2.66V6.62c0-1.67-.59-2.13-2.32-2.23v-.57h7.51v.57c-1.95,0-2.63,.43-2.63,2.51v13.12c0,1.83,.49,2.44,2.63,2.44v.57Z"/><path d="M328.67,20.2c0,1.67,.56,2.26,2.44,2.26h1.14v.57h-9.73v-.57h1.14c1.88,0,2.44-.59,2.44-2.26V4.91h-5.37c-1.24,0-1.79,.71-2.25,3.44h-.56l.49-4.99h.59c.03,.18,.15,.3,.34,.37,.18,.06,.4,.09,.62,.09h14.86c.43,0,.9-.09,.96-.46h.59l.49,4.99h-.56c-.46-2.72-1.02-3.44-2.25-3.44h-5.37v15.29Z"/><path d="M362.43,6.62c.99-1.7,.41-2.23-1.59-2.23v-.57h6.99v.57c-2.1,.16-2.99,.99-3.85,2.44l-5.16,8.69v4.64c0,1.64,.59,2.29,2.49,2.29h.41v.57h-8.48v-.57h.58c1.89,0,2.44-.71,2.44-2.23v-4.36l-5.45-8.6c-1.52-2.38-2.23-2.82-4.24-2.88v-.57h8.2v.57c-2.38,0-2.53,.59-1.61,2.01l4.9,7.64,4.38-7.42Z"/><path d="M410.87,13.91c0,4.39-2.41,8.84-7.45,8.84s-8.9-4.08-8.9-9.86c0-3.71,2.16-8.78,7.61-8.78,5.1,0,8.75,4.05,8.75,9.8Zm2.91-1.02c0-5.57-5.02-9.52-10.86-9.52-6.59,0-11.32,4.33-11.32,10.48,0,5.78,5.11,9.65,11.17,9.65s11.02-4.36,11.02-10.6Z"/><path d="M434.67,15.64h-.52c-.06-1.8-.71-2.36-2.2-2.36h-5.72v6.79c0,1.74,.37,2.39,2.69,2.39v.57h-7.52v-.57c1.91-.12,2.25-.53,2.25-3.04V7.31c0-1.98-.15-2.88-2.32-2.91v-.57h13.84v3.63h-.52c-.03-1.8-.65-2.54-2.56-2.54h-5.87v7.28h6.13c1.14,0,1.7-.65,1.8-1.98h.52v5.43Z"/><rect x="394.76" y="30.39" width=".73" height="1.19"/></g><g><path class="c" d="M37.18,74.35C16.68,74.35,0,57.68,0,37.18,0,16.68,16.68,0,37.18,0c20.5,0,37.18,16.68,37.18,37.18,0,20.5-16.68,37.18-37.18,37.18Z"/><path class="e" d="M37.18,74.35C16.68,74.35,0,57.68,0,37.18,0,16.68,16.68,0,37.18,0c20.5,0,37.18,16.68,37.18,37.18,0,20.5-16.68,37.18-37.18,37.18Zm0-73.86c-20.23,0-36.69,16.46-36.69,36.68,0,20.23,16.46,36.68,36.69,36.68,20.23,0,36.68-16.46,36.68-36.68,0-20.23-16.46-36.68-36.68-36.68Z"/><path class="i" d="M74.1,36.36c0,.16-.65,.72-1.36,1.14l-.05,.03c-.95,.52-2.3,1-3.98,1.45-1.72,.45-3.85,.87-6.19,1.22-2.34,.36-4.95,.63-7.76,.88,0,0,0,0,0,0-3.59,.32-5.86,.46-8.72,.6-3.04,.13-6.21,.19-9.42,.19,0,.41,0,.82,0,1.22,0,2.88,.01,5.64,.03,8.22q.07,14.18,.52,22.8c20.4,0,36.93-16.53,36.93-36.93,0,0,0-.54,0-.82Z"/><g><path class="h" d="M36.63,43.09c0,2.88,.01,5.64,.03,8.22q5.92,5.61,8.38,8.08c.65-4.69,1.02-10.29,1.01-16.49,0-.41,0-.82,0-1.22-3.74,.15-6.21,.19-9.42,.19,0,.41,0,.82,0,1.22Z"/><path class="h" d="M50.18,65.7c-1.29-2.11-2.47-3.48-5.14-6.29-1.26,8.99-3.5,14.53-6.25,14.65,.23-.01,.59-.03,.83-.05,.29-.02,.65-.05,.95-.07,3.82-.34,7.11-3.27,9.63-8.24Z"/><path class="h" d="M54.32,50.63c0-.05-2.13,11.09-4.14,15.07,1.16,2.23,1.21,3.12,.74,4.58,3.59-2.72,6.54-6.83,8.58-11.91-1.31-2.66-2.19-4.07-5.18-7.75Z"/><path class="h" d="M43.75,73.53c.8-.14,.76-.16,2.25-.49l.89-.26c2.73-.85,3.21-1.27,4.05-2.54-2.43,1.83-5.04,2.95-7.94,3.41l.76-.12Z"/><path class="h" d="M60.16,64.47c5.32-6.03,8.58-14.55,8.56-24.27,0-.41,0-.82-.02-1.22-1.72,.45-3.85,.87-6.19,1.22,.03,.41,.05,.83,.05,1.24,.01,6.32-1.06,12.07-3.02,16.92,1.1,2.82,1.12,4,.61,6.12Z"/><path class="h" d="M54.77,41.07c-3.59,.32-5.86,.46-8.72,.6,5.06,5.26,6.14,6.49,8.28,8.95,.3-2.61,.46-5.39,.46-8.28,0-.41,0-.85-.01-1.27Z"/></g><path class="h" d="M29.08,2.15c2.06-.83,4.04-1.7,8.02-1.92h0c-2.7,.24-5.52,1-8.02,1.92"/><g class="j"><path class="f" d="M61.91,40.19c-1.92-.25-3.53-3.51-2.69-6.81-2.7,1.87-5.75-1.97-5.3-5.53,.23-1.88,1.47-3.56,3.62-2.78-.87-3.01-1.97-5.85-3.25-8.47-1.91,.24-4,.44-6.23,.6,1.97,2.98,.04,5.76-2.72,5.31-2-.32-3.86-2.41-3.34-4.91-1.62,1.12-4.94,.68-5.25-2.86-.09,7.51-.13,17.12-.12,27.11,9.81,.1,21.32-.95,25.89-1.67,0,0,0,.02,0,0-.19,.01-.44,.02-.62,0Z"/></g><g class="j"><path class="f" d="M13.32,47.61c2.75-1.06,6.2,3.69,4.99,6.86-.56,1.46-2,1.87-3.51,.99,.82,2.77,1.88,5.3,3.14,7.54,1.94,.27,4.12,.5,6.51,.68-1.92-2.36-.38-4.29,2.18-4.16,2.19,.11,5.1,1.94,4.48,4.43,1.97-.89,5.31-.16,5.72,2.41-.1-5.54-.16-13.67-.18-23.27,0-.42,0-.81,0-1.22-3.12,0-6.27-.11-9.42-.24-6.68-.28-11.22-.66-16.8-1.61,0,.02,0-.02,0,0,2.86,.97,3.65,5.23,2.91,7.59Z"/></g><path class="g" d="M54.67,13.58h.05c.36-.07,.7-.13,1.02-.18,2.11-.39,6.91-1.54,6.91-2.94,0,0,1.88,1.89,3.26,4.51,.16,.29,.27,.55,.42,.96,.17,.46,.27,1,.25,1.26-.06,.8-.57,.81-1.1,.58-.06-.02-.11-.04-.17-.07-1.9-.85-2.52-2.59-2.89-3.31-.96,.31-2.56,1-3.89,1.26-.15,.03-.44,.1-.6,.13,1.56,2.57,3.05,5.65,4.12,8.62,1.86-1.91,4.77,1.63,4.91,5.06,.08,2.01-.82,3.8-2.66,3.16,1.47,2.72,1,6.72-1.79,7.6-.46-8.96-1.98-16.91-7.89-26.6h0"/><path class="g" d="M54.64,13.6h0c-4.7-7.18-8.42-9.8-13.19-11.68-.95-.38-4.18-1.64-4.35-1.69l.02,.03h0c.84,1.23,2.53,1.96,2.89,2.07-.1,.45-.03,1.34,1.53,2.47,.24,.17,.48,.31,.7,.42,2.4,1.26,2.93,.28,3.04-.11,.01-.01,.03-.02,.04-.03,.73,.54,2.16,1.69,3.74,3.47,.91,1.09,1.76,2.04,2.41,2.99-1.48,.19-3.45,.36-5.4,.5-.11-2.35-1.81-3.53-2.88-3.93-2.34-.87-3.11,1.88-2.1,3.82-1.85-1-4.04-.11-4.35,2.82,7.31-.04,12.33-.37,17.89-1.16h0"/><path class="g" d="M55.1,6.91s-.04-.16-.02-.26c.02-.1,.11-.18,.11-.18,0,0,.04-.1,.18-.18,.38-.22,1.49-.33,4.58,1.81C53.54,3.07,46.65,1,40.8,.42c-.83-.1-2.36-.16-2.36-.16,1.86,.16,3.12,.66,3.42,.77,.24,.08,.43,.21,.54,.31h.02c.37,.04,.79,.11,1.32,.26,.57,.17,1.52,.52,2.37,.92,.85,.4,2.11,1.3,2.12,1.8-.19,.12-.25,.15-.83,0,2.19,1.56,5.32,4.49,7.17,6.65,1.27-.24,3.17-.51,4.04-.81-.06,.06-2.89-2.06-3.52-3.26Z"/><path class="g" d="M17.55,65.04c-3.17-.57-4.99-1.05-6.2-1.67-.2-.1-.27-.11-.32-.12-.03,0-1.8-1.82-3.36-3.85-1.13-1.47-2.09-3.13-2.19-3.29,.01,.02,.26,0,.41,.05,1.66,.55,4.25,5.08,4.28,5.13,1.03,.38,2.36,.74,3.97,1.07-1.52-2.28-2.79-4.85-3.76-7.65-2.3,1.16-5.24-4.92-4.31-7.49,.19-.52,.8-1.61,2.36-.43-1.18-2.71-.86-6.78,1.98-6.78,.06,8.98,1.29,16.71,7.14,25.03"/><path class="g" d="M36.76,66.88c-.32,1.28-2.11,2.5-4.65,1.47,1.19,1.57,.16,2.92-1.93,2.54-1.62-.29-3.55-1.6-3.7-2.91-2.01-.15-3.84-.35-5.47-.57,1.55,1.8,3.28,3.27,5.14,4.36,.22-.09,.57-.07,1.68,.32,1.42,.5,2.77,1.16,4.18,1.66l-.3-.04c-1.07-.16-1.33-.22-1.93-.34-2.72-.54-7.46-2.09-12.22-8.32h0c5.74,.89,11.32,1.27,19.27,1.32-.02,.15-.02,.37-.06,.52"/><path class="i" d="M37.1,.23c-19.8,0-36.47,16.17-36.85,36.23v.03c.03,.06,.21,.43,.99,.92h0c.78,.49,1.93,1.01,3.45,1.4,1.88,.48,3.85,.88,5.68,1.19h.04c5.59,.96,10.13,1.34,16.8,1.62,3.14,.13,6.3,.25,9.42,.24,0-1.89-.01-12.61,.07-22.97,.01-1.34,.03-2.74,.05-4.14,.08-6.75,.22-13.62,.35-14.52h0Z"/><path class="h" d="M54.79,69.65c-2.09,1.17-2.49,1.2-5.3,2.36-.78,.32-1.51,.51-2.31,.74,4.98-1.34,11.79-6.92,12.99-8.28-.61,1.34-1.06,2.23-2.53,3.42-.41,.33-2.17,1.38-2.85,1.76Z"/><path class="h" d="M4.69,38.81c-1.54-.38-2.67-.91-3.45-1.4,.41-13.36,7.83-25.22,18.65-31.71-2.56,2.27-3.69,3.62-4.98,6.69-6.07,6.97-9.94,16.34-10.22,26.42"/><path class="h" d="M19.93,5.68c2.71-1.95,4.25-3.38,8.55-4.41,3.01-.72,5.65-1.04,8.63-1.04h0c-6.22,.27-12.08,2.4-17.18,5.45"/><path class="h" d="M17.95,41.03c-2.7-.26-5.25-.62-7.55-1.02,.15-6.7,1.55-13.12,3.98-18.8,.94,3.73,1.73,5.74,4.37,10.17-.47,3.13-.75,6.36-.8,9.65"/><path class="h" d="M36.75,14.75c-.05,4.07-.07,8.25-.08,11.47-.02,3.2-.03,5.51-.03,5.96-3.63-3.81-5.58-5.95-8.23-9.32C30.19,11.38,33.41,2.31,37.1,.23h0c-.13,1.09-.27,7.61-.35,14.52Z"/><path class="h" d="M23.79,14.31c-2.32,4.9-4.06,10.76-5.01,17.06,2.26,3.36,3.65,5.32,8.15,10.24,.05-6.6,.59-13.01,1.48-18.77-2.7-3.68-3.56-5.43-4.62-8.53Z"/><path class="h" d="M72.69,37.53c.01,.41,.02,.81,.02,1.22,.02,13.06-6.35,23.92-16.33,29.93l-.26,.2c4.69-2.88,10.61-7.75,14.38-15.8,4.04-7.94,3.6-16.72,3.6-16.72-.2,.36-.79,.81-1.41,1.17Z"/><path class="h" d="M29.08,2.15c-5.39,2.11-10.24,5.73-14.17,10.24-1.07,3.36-1.07,5.23-.53,8.82,2.4-5.6,5.74-10.45,9.7-14.07,1.22-2.11,1.98-3.38,5-4.98Z"/><path class="h" d="M23.78,14.34c-.67-3.02-.72-4.55,.29-7.18C27.92,3.61,32.37,.97,37.1,.23c-5.18,1.39-9.88,6.83-13.33,14.11"/></g></g><g><polygon class="h" points="616.8 33.91 621.6 3.61 476.75 3.61 470.82 41.01 509.13 41.01 504.45 70.54 624.75 70.54 630.56 33.91 616.8 33.91"/><g><polygon class="d" points="493.07 15.19 493.84 10.44 484.34 10.44 484.33 10.44 480.69 33.4 485.63 33.4 487.12 23.96 490.64 23.96 491.44 19.08 487.91 19.08 488.54 15.19 493.07 15.19"/><polygon class="d" points="496.72 10.45 496.73 10.45 496.73 10.44 496.72 10.45"/><polygon class="d" points="503.15 24 503.92 19.12 500.31 19.12 500.93 15.2 505.4 15.2 506.14 10.45 496.73 10.45 493.1 33.4 502.69 33.4 503.46 28.56 498.8 28.56 499.51 24 503.15 24"/><path class="d" d="M526.28,24.01h.63c.71-.01,.86,.33,.71,1.17l-1.01,6.51c-.15,.93,0,1.48,.15,1.72h4.9l.03-.15c-.13-.37-.22-.8-.06-1.7l1.18-7.4c.28-1.85-.73-2.78-1.48-3.14,1.2-.41,2.19-1.44,2.5-3.48l.49-3.03c.43-2.65-1.18-4.04-3.42-4.04h-7.4l-3.64,22.96h4.94l1.48-9.41Zm1.53-9.61h.68c.62,0,.8,.34,.68,1.05l-.49,3.12c-.09,.8-.41,1.12-.99,1.12h-.71l.84-5.27h-.01Z"/><path class="d" d="M517.38,33.4l.47-22.96h-6.11l-6.47,22.96h4.38l.84-3.36h2.28l-.15,3.36h4.76Zm-5.77-7.89l1.72-6.97-.34,6.97h-1.38Z"/><polygon class="d" points="517.29 41.05 513.65 64.01 518.59 64.01 520.07 54.57 523.6 54.57 524.4 49.69 520.87 49.69 521.49 45.8 526.03 45.8 526.8 41.05 517.3 41.05 517.29 41.05"/><polygon class="d" points="604.97 33.41 606.33 24.62 611.88 10.45 607.32 10.45 604.91 18.07 604.89 10.45 600.07 10.45 601.4 24.68 600.01 33.41 604.97 33.41"/><polygon class="d" points="597.57 28.53 593.51 28.53 596.37 10.45 591.43 10.45 587.79 33.41 596.8 33.41 597.57 28.53"/><path class="d" d="M578.69,33.7h1.13c3.64,.01,5.37-1.96,5.96-5.58l.19-1.18c.37-2.28-.41-4.07-2.47-6.69l-1.57-1.98c-.77-1.08-.95-1.51-.8-2.5l.09-.71c.09-.62,.24-.95,.8-.95,.62,0,.77,.37,.68,.99l-.37,2.37h4.73l.41-2.56c.47-2.9-.86-4.78-4.56-4.78h-1.12c-3.42,0-5.09,1.61-5.59,4.69l-.15,.95c-.37,2.28,.22,4.07,2.07,6.41l1.48,1.91c.95,1.23,1.2,1.82,.99,3.12l-.13,.77c-.15,.92-.43,1.36-1.01,1.36-.62,0-.8-.43-.68-1.27l.49-3.18h-4.84l-.56,3.46c-.52,3.42,1.44,5.33,4.84,5.33Z"/><polygon class="d" points="544.2 28.53 540.13 28.53 543 10.45 538.06 10.45 534.42 33.41 543.43 33.41 544.2 28.53"/><path class="d" d="M564.2,33.7h1.13c3.64,.01,5.37-1.96,5.96-5.58l.19-1.18c.37-2.28-.41-4.07-2.47-6.69l-1.57-1.98c-.77-1.08-.95-1.51-.8-2.5l.09-.71c.09-.62,.24-.95,.8-.95,.62,0,.77,.37,.68,.99l-.37,2.37h4.73l.41-2.56c.47-2.9-.86-4.78-4.56-4.78h-1.12c-3.42,0-5.09,1.61-5.59,4.69l-.15,.95c-.37,2.28,.22,4.07,2.07,6.41l1.48,1.91c.95,1.23,1.2,1.82,.99,3.12l-.13,.77c-.15,.92-.43,1.36-1.01,1.36-.62,0-.8-.43-.68-1.27l.49-3.18h-4.84l-.56,3.46c-.52,3.42,1.44,5.33,4.84,5.33Z"/><path class="d" d="M537.68,41.01h-4.78c-2.5,.73-3.6,2.96-4.11,6.2l-1.7,10.71c-.62,4.11,1.33,6.41,5.21,6.41h.92c3.4,0,5.31-2.28,5.96-6.26l1.72-10.86c.48-3.2-.6-5.46-3.22-6.2Zm-3.74,17.5c-.09,.58-.34,1.08-1.01,1.08s-.86-.49-.77-1.12l1.85-11.78c.15-.86,.37-1.29,1.05-1.29s.9,.47,.77,1.29l-1.89,11.82Z"/><path class="d" d="M575.89,64h4.38l.84-3.36h2.28l-.15,3.36h4.76l.47-22.96h-6.11l-6.48,22.96Zm7.73-7.9h-1.38l1.72-6.97-.34,6.97Z"/><polygon class="d" points="558.6 15.21 559.33 10.46 549.93 10.46 546.29 33.41 555.88 33.41 556.66 28.57 551.99 28.57 552.7 24.01 556.34 24.01 557.11 19.13 553.5 19.13 554.12 15.21 558.6 15.21"/><polygon class="d" points="573.41 41.04 570.38 55.26 571.15 41.04 566.54 41.04 563.3 54.95 564.25 41.04 559.26 41.04 558.79 64 564.53 64 567.21 51.53 566.5 64 572.12 64 578.29 41.04 573.41 41.04"/><path class="d" d="M616.68,41.05h-6.75l-3.64,22.96h7.67c2.93,0,4.26-1.72,4.82-5.37l1.98-12.41c.58-3.67-1.23-5.18-4.07-5.18Zm-2.91,17.12c-.19,1.08-.37,1.42-1.18,1.42h-.71l2.28-14.28h.75c.65,0,.8,.47,.68,1.29l-1.82,11.57Z"/><path class="d" d="M602.14,41.06h-7.4l-3.64,22.96h4.94l1.48-9.41h.63c.71-.01,.86,.33,.71,1.16l-1.01,6.51c-.15,.93,0,1.48,.15,1.72h4.9l.03-.15c-.13-.37-.22-.8-.06-1.7l1.18-7.4c.28-1.85-.73-2.78-1.48-3.14,1.2-.4,2.19-1.44,2.5-3.48l.49-3.03c.43-2.65-1.18-4.04-3.42-4.04Zm-2.2,8.11c-.09,.8-.41,1.11-.99,1.11h-.71l.84-5.27h.67c.62-.01,.8,.33,.68,1.04l-.49,3.12Z"/><path class="d" d="M552.68,41.05h-7.4l-3.64,22.96h4.94l1.48-9.42h.63c.71-.01,.86,.33,.71,1.17l-1.01,6.51c-.15,.92,0,1.48,.15,1.72h4.9l.02-.15c-.13-.37-.22-.8-.06-1.7l1.18-7.4c.28-1.85-.74-2.77-1.48-3.14,1.2-.41,2.19-1.44,2.5-3.48l.49-3.03c.43-2.65-1.18-4.04-3.42-4.04Zm-2.2,8.11c-.09,.8-.41,1.12-.99,1.12h-.71l.84-5.27h.67c.62-.01,.8,.33,.68,1.04l-.49,3.12Z"/><polygon class="d" points="549.92 10.46 549.93 10.46 549.93 10.45 549.92 10.46"/></g></g></g></g></g></svg>
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
        padding-right: 10px;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .${LOGO_CONTACT_WRAPPER_CLASS} {
        display: flex;
        align-items: center;
        width: 75%;
      }
    }

    @media (min-width: ${Breakpoints.desktopMin}px) {
      :host .${LOGO_CONTACT_WRAPPER_CLASS} > div {
        width: 50%;
        padding-right: 20px;
      }
    }

    :host .${LOGO_CONTAINER_CLASS} {
      display: flex;
      position: relative;
    }

    @media (max-width: ${Breakpoints.tabletMax}px) {
      :host .${LOGO_CONTAINER_CLASS} {
        margin-bottom: 20px;
        max-width: 600px;
      }
    }

    :host .${LOGO_CONTAINER_CLASS} svg {
      display: block;
    }

    :host .${LOGO_CONTAINER_CLASS}:hover svg, 
    :host .${LOGO_CONTAINER_CLASS}:focus svg {
      fill: inherit;
    }

    :host .${LOGO_CLASS} {
      width: 90%;
      max-width: 300px;
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

    @media (max-width: ${Breakpoints.largeMobileMax}px) {
      :host .${SOCIAL_LINKS_CLASS} {
        margin-top: 30px;
      }
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
  const container = document.createElement('div');
  const logoLink = document.createElement('a');

  logoLink.setAttribute('rel', 'noopener noreferrer');
  logoLink.setAttribute('target', '_blank');
  logoLink.setAttribute('href', 'https://umd.edu');
  logoLink.classList.add(LOGO_CLASS);

  container.classList.add(LOGO_CONTAINER_CLASS);

  logoLink.innerHTML = logoSvg;

  container.appendChild(logoLink);

  return container;
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
  const feedbackLink = makeLinkElement({
    name: 'Feedback',
    url:
      'https://form.asana.com/?hash=f91df217c75378193f344df2348a7506fbd1288579ff8f54892bc6c5fff0c1fc&id=1126975427269659',
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
  lock.appendChild(wrapElement(feedbackLink));
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
