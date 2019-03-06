


const BucketView = function(container){
  this.container = container;
};

BucketView.prototype.render = function(bucket){
  
  const bucketContainer = document.createElement('div');

  const activity = document.createElement('p');
  activity.textContent = bucket.activity;

  const location = document.createElement('p');
  location.textContent = bucket.location;

  const cost = document.createElement('p');
  cost.textContent = bucket.cost;

  const spacer = document.createElement('br');

  bucketContainer.appendChild(activity);
  bucketContainer.appendChild(location);
  bucketContainer.appendChild(cost);
  bucketContainer.appendChild(spacer);

  this.container.appendChild(bucketContainer);


};

module.exports = BucketView;
