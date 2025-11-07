const crypto = require('crypto')
function generateCSRFToken() {
  return crypto.randomBytes(32).toString('hex')
}

function csrfProtection(req, res, next) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return next()
  }
  
  next()
}
function getCSRFToken(req, res) {
  const token = generateCSRFToken()
  res.cookie('csrfToken', token, {
    httpOnly: false, 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60
  })
  res.json({ csrfToken: token })
}

module.exports = {
  csrfProtection,
  getCSRFToken
}

