const middleware = {}

middleware['authguard'] = require('..\\middleware\\authguard.js')
middleware['authguard'] = middleware['authguard'].default || middleware['authguard']

middleware['checkpath'] = require('..\\middleware\\checkpath.js')
middleware['checkpath'] = middleware['checkpath'].default || middleware['checkpath']

export default middleware
