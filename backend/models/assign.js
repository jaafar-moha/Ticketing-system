const mongoose = require('mongoose')
const assignSchema = new mongoose.Schema({
 
    ticket_id: {type:mongoose.Schema.Types.ObjectId, ref: 'Ticket'},
    
    technicien_id_: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    
    date: {type: Date, 
        default: Date.now}
})
module.exports = mongoose.model('Assign',assignSchema)
