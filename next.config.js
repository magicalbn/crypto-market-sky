const withPWA = require('next-pwa')

module.exports = withPWA({
  // other next config
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true 
  }
})