const breakpoints = {
  smallPhone: {
    min: 'min-width: 0',
    max: 'max-width: 320px'
  },
  phonePortrait: {
    min: 'min-width: 321px',
    max: 'max-width: 414px'
  },
  phoneLandscape: {
    min: 'min-width: 415px',
    max: 'max-width: 667px'
  },
  tabletPortrait: {
    min: 'min-width: 668px',
    max: 'max-width: 768px'
  },
  tabletLandscape: {
    min: 'min-width: 769px',
    max: 'max-width: 1024px'
  },
  desktop: {
    min: 'min-width: 1025px',
    max: 'max-width: 1366px'
  },
  desktopWide: {
    min: 'min-width: 1367px',
    max: 'max-width: 1680px'
  },
  desktopHD: {
    min: 'min-width: 1681px',
    max: 'max-width: 1920px'
  },
  desktopMega: {
    min: 'min-width: 1921px',
    max: 'max-width: 2560px'
  }
}

export const isDesktop = () => {
  return window.matchMedia(`(${breakpoints.desktop.min})`).matches
}

export default breakpoints
