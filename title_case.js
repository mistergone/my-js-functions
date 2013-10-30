
/* 	So you want to title case some set of strings, and JavaScript has no concept of
	style guides, prepositions, etc. Here's a handy function. BONUS: You can easily
	decide what things will be skipped by adding or removing entries from the
	'lowercasewords' array. Entries in the array will remain all lowercase.
	(The list below is for a specific project, and may not apply to you.) */


function title_case( str ) {
    var lowercasewords = ["a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to", "with"];
    return str.replace(/\w\S*/g, function(word, pos) {
        if (pos != 0 && lowercasewords.indexOf(word.toLowerCase()) != -1) {
            return word.toLowerCase();    
        }
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
