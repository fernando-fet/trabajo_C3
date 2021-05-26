const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('holitassss');
});

module.exports= router;

