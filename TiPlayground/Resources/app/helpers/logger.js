var logger = {
	logit:true,
	info: function(message) {
		if (this.logit) {
			 Ti.API.info(message);
		}
	},
	warn: function(message) {
		if (this.logit) {
			 Ti.API.warn(message);
		}
	},
	error: function(message) {
		if (this.logit) {
			Ti.API.error(message);
		}
	}
};