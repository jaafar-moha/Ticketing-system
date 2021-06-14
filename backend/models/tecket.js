const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId, ref: "User"},

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    priority:{ type: String, 
         required: true, 
         enum: ["urgent", "pas urgent", " trés urgent"]
        },

    status:{ 
        type:String,
        ennum:['waiting', 'assigned', 're-waiting', 're-assigned', 'resolved'], 
        default: 'waiting'
                // en attente, affecter(re), cloturé
       
    },
    date: {type: Date, 
        default: Date.now}


})
const Ticket = mongoose.model('Ticket',ticketSchema)
module.exports = Ticket