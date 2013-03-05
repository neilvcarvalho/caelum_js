function soma_string(string) {
	matches = string.match(/\d+/g);
	sum = 0;
	for (var i=0;i<matches.length;i++) {
		sum += parseInt(matches[i]);
	}
	return sum;
}