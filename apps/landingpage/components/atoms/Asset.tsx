import React, { ImgHTMLAttributes } from 'react'

const icons = {
  search: { alt: 'search', src: '/search.svg' },
  list: { alt: 'list', src: '/list.svg' },
  exit: { alt: 'exit', src: '/exit.svg' },
  shield: { alt: 'shield', src: '/shield.svg' },
  email: { alt: 'email', src: '/ic-email.svg' },
  phone: { alt: 'phone', src: '/ic-phone.svg' },
  facebook: { alt: 'facebook', src: '/ic-facebook.svg' },
  twitter: { alt: 'twitter', src: '/ic-twitter.svg' },
  instagram: { alt: 'instagram', src: '/ic-instagram.svg' },
  youtube: { alt: 'youtube', src: '/ic-youtube.svg' },
  success: { alt: 'success', src: '/success.svg' },
  error: { alt: 'error', src: '/error.svg' },
  warning: { alt: 'warning', src: '/warning.svg' },
  calendarGreen: { alt: 'calendar-green', src: '/calendar-green.svg' },
  camionGreen: { alt: 'camion-green', src: '/camion-green.svg' },
  closeGreen: { alt: 'close-green', src: '/close-green.svg' },
  goBack: { alt: 'go-back', src: '/go-back.svg' },
  arrowUp: { alt: 'arrow-up', src: '/arrow-up.svg' },
  promotion: { alt: 'icon-descuento', src: '/icon-descuento.svg' },
  iconUser: { alt: 'User', src: '/contact.svg' },
  iconPay: { alt: 'Payment', src: '/paymentIcon.svg' },
  info: { alt: 'Info', src: '/info.svg' },
  edit: { alt: 'List', src: '/edit.svg' },
}

const logos = {
  unimarcBW: { alt: 'unimarc-logo-bw', src: '/unimarc-logo-bw.svg' },
  unimarc: { alt: 'unimarc-logo', src: '/unimarc-logo.svg' },
  clubAhorro: { alt: 'club-ahorro-logo', src: '/club-ahorro-logo.svg' },
  webpay: { alt: 'webpay-logo', src: '/webpay.jpg' },
  logo: { alt: 'logo-despachos', src: '/logo-despachos.svg' },
  camion: { alt: 'camion', src: '/camion.svg' },
  stepOne: { alt: 'Step One', src: '/step1.svg' },
  stepTwo: { alt: 'Step Two', src: '/step2.svg' },
  stepThree: { alt: 'Step Three', src: '/step3.svg' },
  stepFour: { alt: 'Step Four', src: '/step4.svg' },
  successStep: { alt: 'Success', src: '/success-step-by-step.svg' }
}

export function Icon(props: { type: keyof typeof icons } & ImgHTMLAttributes<{}>) {
  const { type, ...restProps } = props
  const { alt, src } = icons[type]

  return <img {...restProps} src={src} alt={alt} />
}

export function Logo(props: { type: keyof typeof logos } & ImgHTMLAttributes<{}>) {
  const { type, ...restProps } = props
  const { alt, src } = logos[type]

  return <img {...restProps} src={src} alt={alt} />
}
