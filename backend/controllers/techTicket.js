const Assign = require ('../models/assign')
const Ticket = require('../models/tecket')

exports.getAssignedTicket = (req, res, next) => {

    Assign.find({technicien_id: req.body.technicien_id_})
    .populate('ticket_id user_id')
    .then(data => {
         return res.json(data)
    })
    
}

