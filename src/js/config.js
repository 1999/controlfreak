var config = {
	GA_STAT_ID: "UA-20919085-7", // Google Analytics

	get ID() {
		var id;

		try {
			id = chrome.runtime.id;
		} catch (e) {
			id = chrome.i18n.getMessage("@@extension_id");
		}

		delete this.ID;
		return this.ID = id;
	},

	get VERSION() {
		var version;

		try {
			version = chrome.runtime.getManifest().version;
		} catch (e) {
			version = chrome.app.getDetails().version;
		}

		delete this.VERSION;
		return this.VERSION = version;
	},

	get DEBUG() {
		return (chrome.runtime.getManifest().debug === true);
	},

	LIBS: {
		"AngularJS": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/angularjs/%version%/angular.min.js",
				versions: ["1.4.2", "1.3.17", "1.2.12", "1.1.4", "1.0.6"]
			}
		},
		"Backbone": {
			CloudFlare: {
				placeholder: "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/%version%/backbone-min.js",
				versions: ["1.2.3", "1.1.2", "1.0.0", "0.9.10"]
			}
		},
		"Bootstrap (CSS)": {
			Yandex: {
				placeholder: "http://yandex.st/bootstrap/%version%/css/bootstrap.min.css",
				versions: ["3.1.1", "2.3.2", "2.2.2"]
			}
		},
		"Bootstrap (Javascript)": {
			Yandex: {
				placeholder: "http://yandex.st/bootstrap/%version%/js/bootstrap.min.js",
				versions: ["3.1.1", "2.3.2", "2.2.2"]
			}
		},
		"Dojo": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/dojo/%version%/dojo/dojo.js",
				versions: ["1.9.1", "1.9.0", "1.8.4", "1.7.4", "1.6.1", "1.5.2"]
			},
			Yandex: {
				placeholder: "http://yandex.st/dojo/%version%/dojo/dojo.js",
				versions: ["1.9.1", "1.9.0", "1.8.4", "1.7.4", "1.6.1", "1.5.2"]
			}
		},
		"Ext Core": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/ext-core/%version%/ext-core.js",
				versions: ["3.1.0", "3.0.0"]
			},
			Yandex: {
				placeholder: "http://yandex.st/ext-core/%version%/ext-core.min.js",
				versions: ["3.1.0", "3.0.0"]
			}
		},
		"Highlight.js": {
			Yandex: {
				placeholder: "http://yandex.st/highlightjs/%version%/highlight.min.js",
				versions: ["8.0", "7.3", "6.2"]
			}
		},
		"jQuery": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/jquery/%version%/jquery.min.js",
				versions: ["2.1.0", "2.0.2", "1.11.3", "1.10.1", "1.9.1", "1.8.3", "1.7.2", "1.6.4", "1.5.2", "1.4.4"]
			},
			Yandex: {
				placeholder: "http://yandex.st/jquery/%version%/jquery.min.js",
				versions: ["2.1.0", "2.0.2", "1.11.2", "1.10.1", "1.9.1", "1.8.3", "1.7.2", "1.6.4", "1.5.2", "1.4.4"]
			}
		},
		"jQuery UI": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/jqueryui/%version%/jquery-ui.min.js",
				versions: ["1.11.4", "1.10.4", "1.10.3", "1.9.2", "1.8.23"]
			},
			Yandex: {
				placeholder: "http://yandex.st/jquery-ui/%version%/jquery-ui.min.js",
				versions: ["1.11.2", "1.10.4", "1.10.3", "1.9.2", "1.8.23"]
			}
		},
		"Knockout": {
			Microsoft: {
				placeholder: "http://ajax.aspnetcdn.com/ajax/knockout/knockout-%version%.js",
				versions: ["3.0.0", "2.2.1", "2.1.0"]
			}
		},
		"Mochikit": {
			Yandex: {
				placeholder: "http://yandex.st/mochikit/%version%/mochikit.min.js",
				versions: ["1.4.2", "1.3.1"]
			}
		},
		"Modernizr": {
			Yandex: {
				placeholder: "http://yandex.st/modernizr/%version%/modernizr.min.js",
				versions: ["2.7.1", "2.6.2"]
			}
		},
		"MooTools": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/mootools/%version%/mootools-yui-compressed.js",
				versions: ["1.4.5", "1.3.1", "1.2.4"]
			},
			Yandex: {
				placeholder: "http://yandex.st/mootools/%version%/mootools.min.js",
				versions: ["1.3.1", "1.2.4"]
			}
		},
		"Prototype": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/prototype/%version%/prototype.js",
				versions: ["1.7.1.0", "1.6.1.0"]
			},
			Yandex: {
				placeholder: "http://yandex.st/prototype/%version%/prototype.min.js",
				versions: ["1.7.0.0", "1.6.1.0"]
			}
		},
		"Pure": {
			Yandex: {
				placeholder: "http://yandex.st/pure/%version%/pure.min.js",
				versions: ["2.48", "2.25", "1.35"]
			}
		},
		"Raphael": {
			Yandex: {
				placeholder: "http://yandex.st/raphael/%version%/raphael.min.js",
				versions: ["2.1.0", "2.0.1", "1.5.2"]
			}
		},
		"script.aculo.us": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/scriptaculous/%version%/scriptaculous.js",
				versions: ["1.9.0", "1.8.3"]
			},
			Yandex: {
				placeholder: "http://yandex.st/scriptaculous/%version%/min/scriptaculous.js",
				versions: ["1.9.0", "1.8.3"]
			}
		},
		"socket.io": {
			CloudFlare: {
				placeholder: "http://cdnjs.cloudflare.com/ajax/libs/socket.io/%version%/socket.io.min.js",
				versions: ["1.3.6", "0.9.16", "0.9.10"]
			}
		},
		"SWFObject": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/swfobject/%version%/swfobject.js",
				versions: ["2.2", "2.1"]
			},
			Yandex: {
				placeholder: "http://yandex.st/swfobject/%version%/swfobject.min.js",
				versions: ["2.2", "2.1"]
			}
		},
		"Underscore.js": {
			Yandex: {
				placeholder: "http://yandex.st/underscore/%version%/underscore-min.js",
				versions: ["1.6.0", "1.5.1", "1.5.2"]
			}
		},
		"Web Font Loader": {
			Google: {
				placeholder: "http://ajax.googleapis.com/ajax/libs/webfont/%version%/webfont.js",
				versions: ["1.5.18", "1.5.2", "1.4.6", "1.3.0"]
			}
		},
		"YUI Library (YUI)": {
			Yandex: {
				placeholder: "http://yandex.st/yui/%version%/yui/yui-min.js",
				versions: ["3.8.1", "3.7.3", "3.6.0"]
			}
		}
	}
};
