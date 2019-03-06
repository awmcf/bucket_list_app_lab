const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const BucketList = function (){
  this.url = 'http://localhost:3000/api/buckets';
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function(){
  PubSub.subscribe('FormView:bucket-submitted',(evt)=>{
    console.log('inside bind events');
    this.postBucket(evt.detail);

  });
};

BucketList.prototype.getData = function(){
  this.request.get()
  .then((buckets)=>{
    PubSub.publish('BucketList:buckets-loaded',buckets)
  })
  .catch(console.error);
};

BucketList.prototype.postBucket = function(bucket){
  console.log('post bucket');
  this.request.post()
  .then((buckets)=>{
    PubSub.publish('BucketList:buckets-loaded',buckets);
  })
  .catch(console.error);
};

module.exports = BucketList
