let AWS = require('aws-sdk');
let _auth = require('./Authorizer');
let google = require('googleapis').google;
const storage = google.storage('v1');
exports.handler = function (event, context, callback) {
	storage.objects.delete({
		bucket: "test_sigma_cloud_storage",
		object: "Image1.png"
	})
		.then(response => {
			console.log(response.data);           // successful response
			/*
				response.data = {}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}