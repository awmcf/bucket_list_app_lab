const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucket = this.createBucket(evt.target);
  console.dir(newBucket);
  PubSub.publish('FormView:bucket-submitted', newBucket);
  evt.target.reset();

};

FormView.prototype.createBucket = function (form) {
console.log(form.activity);
  const newBucket = {
    activity: form.activity.value,
    location: form.location.value,
    cost: form.cost.value
  };
  console.log(newBucket);

  return newBucket;

};

module.exports = FormView;
