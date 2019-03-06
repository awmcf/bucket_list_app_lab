const FormView = require('./views/form_view.js');
const MasterView = require('./views/master_view.js')
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("hello");
  const bucketForm = document.querySelector('form#submit-bucket');
  const formView = new FormView(bucketForm);
  formView.bindEvents();

  const bucketListContainer = document.querySelector('#bucket-list');
  const masterView = new MasterView(bucketListContainer);
  masterView.bindEvents();

  const bucketList = new BucketList();
  bucketList.bindEvents();
  bucketList.getData();

});
