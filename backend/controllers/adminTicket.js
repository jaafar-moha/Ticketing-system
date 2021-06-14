const Ticket = require('../models/tecket')
const Assign = require('../models/assign')
const User = require('../models/user')

exports.getTicket= async (req,res)=>{
    try{
     const ticket= await Ticket.find()
     res.json(ticket)
    }catch (err){
     return res.status(500).json({msg:err.message})
    }
}

exports.getOneTicket = (req, res) => {
    const { id } = req.params
    Ticket.findById(id).then(data => {
         return res.json(data)
    })
}

exports.deleteTicket= (req,res)=>{
    Ticket.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('Ticket deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.assignTicket = (req, res) => {
    const {  ticket_id, technicien_id} = req.body
    
    new Assign({
       
        ticket_id: ticket_id,
        technicien_id: technicien_id
    })
    .save()
    .then(() => {
         Ticket.findByIdAndUpdate(ticket_id,{status:'assigned'}).then(() => {
              res.json({message: 'Ticket is assigned'})
         })
    })

}