function lyrics(n){
	var str = "";
	function output(n) {
		var each_line = n+ " bottles of beer on the wall, " +n+ " bottles of beer.\n Take one down and pass it around, " +(n-1)+ " bottles of beer on the wall.\n\n";
		if (each_line.startsWith("1 bottles") || each_line.startsWith("2 bottles")) {
			each_line = each_line.replace(/1 bottles/g, "1 bottle");
			each_line = each_line.replace(/0 bottles/g, "no more bottles");
		}
		return each_line;
	}

	for (var i = n; i > 0; i--) {
		str = str + output(i);
		}
	str = str + "No more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, "+n+ " bottles of beer on the wall.\n\n";
	console.log(str);
}
lyrics(99);