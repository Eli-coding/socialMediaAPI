const { Schema, Types } = require("mongoose");

const reactionInfo = new Schema ({

reactionId:{
type: Schema.Types.ObjectId, 
default: ()=> new Types.ObjectId(),

},
reactionBody:{
    type:String,
    required: true,
    maxlength:280
},
username:{
 type:String,
 required: true,

},
createdAt:{
    type:Date,
    default: Date.now,
    get: (currentTime)=> new Intl.DateTimeFormat('en-US').format(currentTime)
}
})

module.exports = reactionInfo;