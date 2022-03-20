const User= require('./../model/userModel')
const queryString= require('query-string')
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51KemHASFF896983LN9fDp2tbyW1CtDD0iVLCD6KNWVdTkgVaMDlFiJaOpyEK02NnNzHj9MZDaz8A964sIuhQH4K100TLBxguce');

exports.createStripeAcc= async (req,res)=>{

  const user = await User.findById(req.user._id).exec();
  if (!user.stripe_account_id) {
    const account = await stripe.accounts.create({
      type: "standard",
    }); // account creation
    console.log("from stripe account");
    user.stripe_account_id = account.id;
    user.save();
  }
  //login link 
  let accountLink = await stripe.accountLinks.create({
    account: user.stripe_account_id,
    refresh_url:process.env.STRIPE_REDIRECT_URL,
    return_url:process.env.STRIPE_REDIRECT_URL,
    type: "account_onboarding",
  });
  accountLink = Object.assign(accountLink, {
    "stripe_user[email]": user.email || undefined,
  });
  let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;
  console.log("LOGIN LINK: ", link);
  res.status(200).send(link);

}

