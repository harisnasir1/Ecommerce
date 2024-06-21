
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const stripe = require('stripe')(process.env.stipe_sk);
const dotenv=require("dotenv")
const Orders=require("./Models/Orders")
const app = express();
dotenv.config();
const corsOptions = {
  origin: '*', // Replace with your actual frontend domain
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const userRoutes=require("./routes/userRoutes");
const ProductRoutes=require("./routes/ProductRoutes");
const  cartRoutes=require("./routes/CartRoutes")

function parseJson(req, res, next) {
  if (req.path.startsWith('/api')) {
    express.json()(req, res, next);
  } else {
    next();
  }
}

app.use(parseJson);
app.use("/api/auth",userRoutes);
app.use("/api/products",ProductRoutes);
//app.use("api/order",orderroutes);
app.use("/api/Cart",cartRoutes);

//4242 4242 4242 4242

const endpointSecret = "whsec_9230fa03395fe8aeb4a81429980de8b541422e2d16d4d5c945e1ad680858ad0d";

app.post('/webhook', express.raw({ type: 'application/json' }), async(request, response) => {
 // console.log("webhook");
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const paymentIntentSucceeded = event.data.object;
      //console.log(paymentIntentSucceeded)
      const orderid=paymentIntentSucceeded.metadata.orderId;
      const paid=paymentIntentSucceeded.payment_status;
      if(orderid && paid==='paid')
        {
          console.log("it is finalyy working ",orderid);
     const re=    await Orders.findByIdAndUpdate(orderid,{
            paid:true,
          });
         // console.log("it is finalyy working ",re);

        }
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      //console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});


// Replace with your MongoDB URI

mongoose.connect(process.env.MONGO_URL)
  .then(() => {console.log('MongoDB connected')
  app.listen(5000, function () {
    app.get('/', (req, res) => {
      res.send('Server is up and running!');
    });
  });
  })
  .catch(err => console.log('MongoDB connection error:', err));

  module.exports = app;