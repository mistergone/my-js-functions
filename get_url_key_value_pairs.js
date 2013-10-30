function get_url_key_value_pairs() {
	var data = {};
	var keyvals = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
	$.each( keyvals , function(i, val) {
		var parts = val.split("=");
		var key = parts[0];
		var value = parts[1];
		data[key] = value;
	});
	return data;
}