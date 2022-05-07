const { Schema, model } = require("mongoose");
const reactionM = require ("./Reactions")

const thoughtsInfo = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },

  createdAt: {
    type:Date, 
    default: Date.now,
    get: (currentTime)=> new Intl.DateTimeFormat('en-US').format(currentTime)
  },
  username: {
    type: String,
    required: true,
  },

  reactions: [reactionM]
},
{
  toJSON: {
    virtuals: true

}

});

thoughtsInfo.virtual("reactionCount").get(function(){
  return this.reactions.length });

const Thought = model('Thought', thoughtsInfo);
module.exports = Thought; 