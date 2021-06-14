const express = require('express');
const router = express.Router();

const {register,login,signout,getAllUsers}=require('../controllers/userController')
const {creatTicket,readTicket,updateTicket,deleteTicket }=require('../controllers/userTicketController')

const {getTicket,assignTicket,getTecketAssigned,getOneTicket,getCloseTicket,getRefusedTicket}=require('../controllers/adminTicket')
const {getAssignedTicket ,resolvedTicket,refuseTicket}=require('../controllers/techTicket')


const {auth}=require('../middlewares/auth')


router.post('/register', register)
router.post('/login',login)
router.get('/signout',signout)
router.get('/allUser', getAllUsers);

router.post('/creatTicket', auth('user'),creatTicket)
router.get('/readTicket/:id',readTicket)
router.post('/updateTicket/:id',updateTicket)
router.delete('/deleteTicket/:id',deleteTicket)

// admin
router.get('/getTicket',getTicket)
router.get('/getOneTicket/:id',getOneTicket)
router.post('/assignTicket',assignTicket)


//technicien
router.get('/getAssignedTicket',auth('technicien'),getAssignedTicket)



module.exports= router;
