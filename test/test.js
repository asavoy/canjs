steal('can/util', function() {
	var viewCheck = /(\.mustache|\.stache|\.ejs|extensionless)$/;

	can.test = {
		fixture: function (path) {
			if (typeof steal !== 'undefined') {
				if(steal.idToUri) {
					return steal.config('root').toString() + '/' + path;
				} else {
					return steal.joinURIs(System.baseURL, path);
				}
			}

			if (window.require && require.toUrl && !viewCheck.test(path)) {
				return require.toUrl(path);
			}
			return path;
		},
		path: function (path) {
			if (typeof steal !== 'undefined') {
				if(steal.idToUri) {
					return ""+steal.idToUri(steal.id("can/"+path).toString());
				} else {
					return steal.joinURIs(System.baseURL, path);
				}
			}

			if (window.require && require.toUrl && !viewCheck.test(path)) {
				return require.toUrl(path);
			}
			return path;
		}
	};
});
