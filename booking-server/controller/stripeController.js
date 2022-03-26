const User= require('./../model/userModel')
const queryString= require('query-string')
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51KemHASFF896983LN9fDp2tbyW1CtDD0iVLCD6KNWVdTkgVaMDlFiJaOpyEK02NnNzHj9MZDaz8A964sIuhQH4K100TLBxguce');
// sk_test_51KeoHDSGPgKI86BHSk4nvbDDw8ZMlXvmuSuQDLzvZp5NGQqAIQUN3nA2ixAJJsTB7in2Yg7uy6YMBCQZosZvLt0f004EHPV6KG

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

// const updateDelayDays = async (accountId) => {
//   const account = await stripe.accounts.update(accountId, {
//     settings: {
//       payouts: {
//         schedule: {
//           delay_days: 7,
//         },
//       },
//     },
//   });
//   return account
// }

exports.getAccStatus=async(req,res)=>{
  const user = await User.findById(req.user._id).exec();
  console.log("..................", user)
  const account = await stripe.accounts.retrieve(user.stripe_account_id);
  console.log("USER ACCOUNT RETRIEVE", account);
  // const updatedAccount = await updateDelayDays(account.id);
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      stripe_seller: account,
    },
    { new: true }
  )
    .select("-password")
    .exec();
  console.log(updatedUser);
  res.json(updatedUser);
}

exports.getAccBalance= async(req,res)=>{
  const user = await User.findById(req.user._id).exec();
  try{
    const balance = await stripe.balance.retrieve({
      stripeAccount: user.stripe_account_id,
    })
    // console.log("BALANCE ===>", balance);
    res.json(balance)
  }catch(err){
    console.log("Error", err)
  }
}

// exports.payoutSetting = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).exec()
//     if(user.stripe_seller.settings.type==="standard"){
//       res.send("Stripe payouts settings not available in Indian region")
//     }
//     const loginLink = await stripe.accounts.createLoginLink(
//       user.stripe_account_id,
//       {
//         redirect_url: process.env.STRIPE_SETTING_REDIRECT_URL,
//       }
//     )
//     console.log("LOGIN LINK FOR PAYOUT SETTING", loginLink);
//     res.json(loginLink)
//   } catch (err) {
//     console.log("STRIPE PAYOUT SETTING ERR ", err)
//   }
// }




