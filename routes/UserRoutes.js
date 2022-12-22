const express=require('express')
const { PostFormData, mailingService, sendRegisteringMail } = require('../controllers/FornDummy')

const router=express.Router()

router.post('/',PostFormData)
router.post('/v1',mailingService)
router.get('/:id/verify',sendRegisteringMail)

module.exports=router