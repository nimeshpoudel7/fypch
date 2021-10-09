const express =require('express');
//roputer expresdss funbctiopn
const router= express.Router();

//register route
router.get('/register',(req,res)=>{
  //sendinng response
  res.send('register user')
})
//exporting
module.exports=router;
