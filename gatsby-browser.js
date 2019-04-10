require('whatwg-fetch')

exports.onClientEntry = () => {
  require.ensure(['@sentry/browser'], function(require) {
    const Sentry = require('@sentry/browser')
    Sentry.init({
      dsn: process.env.GATSBY_SENTRY_DSN_URL,
      environment: process.env.NODE_ENV,
      enabled: () => process.env.NODE_ENV === 'production',
    })
    window.Sentry = Sentry
  })
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  const sendPageView = () => {
    if (typeof rdt === 'function') {
      rdt('track', 'PageVisit')
    }
  }

  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(sendPageView)
    })
  } else {
    setTimeout(sendPageView, 32)
  }
}
