var express = require('express')
var router = express.Router()
var expertDomain = require('../domain/expert')

router.post('/signup',async function(req,res){
  var expSignup= await expertDomain.insertExpert(req.body)
  console.log("signup occured!!!")
  console.log(expSignup)
  res.send(expSignup)
})
router.get('/all',async function(req,res){
  var getExperts=await expertDomain.getExperts();
  res.send(getExperts);
})
router.get('/all/page/:page',async function(req,res){
  var getExpertsOfPage=await expertDomain.getExpertsByPage(req.query);
  res.send(getExpertsOfPage);
})
router.get('/filter', async function(req, res){
  var getFilteredExperts = await expertDomain.getFilteredExperts(req.query.category, req.query.subject, req.query.city, req.query.name);
  res.send(getFilteredExperts);
})
router.get('/:id',async function(req,res){
  console.log("server 2");
  var getExpert=await expertDomain.getExpertById(req.params.id);
  res.send(getExpert);
})
router.put('/change-status',async function(req,res){
  var expertChangeStatus=await expertDomain.changeStatus(req.body);
  res.send(expertChangeStatus);
})
router.put('/put-expert',async function(req,res){
  console.log("HHHHHHHHHHHH")
  var expertUpdate=await expertDomain.putExpert(req.body);
  res.send(expertUpdate);
})

module.exports = router