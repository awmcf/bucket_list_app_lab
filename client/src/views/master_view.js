const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');
const FormView = require('./form_view.js');

const MasterView = function (container){
  this.container = container;
};

MasterView.prototype.bindEvents = function(){
  PubSub.subscribe('BucketList:buckets-loaded',(evt)=>{
    this.render(evt.detail);
  });
};

MasterView.prototype.render = function(buckets){
    this.container.innerHTML = '';
    const bucketView = new BucketView(this.container);
    buckets.forEach((bucket)=> bucketView.render(bucket));

};

module.exports = MasterView;
