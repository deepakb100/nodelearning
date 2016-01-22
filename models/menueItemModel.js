var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var menueItemModel=new Schema({
  MenuItemId:{type:String},
  MenuItemNumber:{type:Number},
  VenueId:{type:String},
  Name:{type:String},
  IsInactive:{type:Boolean}
}, { collection : 'MenueItem' });

module.exports=mongoose.model('MenueItem',menueItemModel);
