const { default: axios } = require('axios');
const { verify } = require('jsonwebtoken');
const slugify = require("slugify");

exports.verifyRecaptcha = async (req, res, next) => {
  // IF walang token. then return status 400
  console.log(req.body.token)
  if(!req.body.token) {
    return res.status(400).json({error: 'Token is missing'});
  }

	try {
    // i-verify kung related parehas ang secret at token
    const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=?${req.body.token}`;

    const response = await axios.post(googleVerifyURL);
    const {success}= response.data;
    // IF maylaman si success. magresponse ng {success: true}
    if(success) {
      return res.json({success: true});
    } else {
      // ELSE magreturn ng status 400 na Invalid Captcha
      return res.status(400).json({error: 'Invalid Captcha'})
    }

	} catch(e) {
    // magreturn ng status 400 Captcha Error try again
    return res.status(400).json({error: 'Captcha Error. Try again.'})
  }
};

exports.hello = async (req, res) => {
  try {
    console.log(req.body)
    return res.json({message: 'Hello World'})
  } catch(err) {
    return res.status(400).json({error: 'Bazz Hi'})
  }
}
