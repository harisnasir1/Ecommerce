const express = require("express");
const bodyParser = require('body-parser');
const {getcartproduct,getcartProperties,addCart,getcarts,getImg,getallcarts,update_satus}=require('../controllers/cartController')
const router = express.Router();

router.post("/getcartproduct",getcartproduct);
router.post("/getcartProperties",getcartProperties);
router.post("/addCart",addCart);
router.post("/getcarts",getcarts);
router.post("/getImg",getImg);
router.post("/update_satus",update_satus);

router.get("/getallcarts",getallcarts);




//modern-pepped-glow-lavish
//acct_1PPkVx2KHSQiU4J9
//webhook signing secret is whsec_9230fa03395fe8aeb4a81429980de8b541422e2d16d4d5c945e1ad680858ad0d
module.exports=router;