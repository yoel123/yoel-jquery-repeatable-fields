/*
	name:y_reapeat_field
	description:creates a repeatable input action.
	in simple clones everything inside a selector to selectors parent
	once trigger selector is clicked
	input:
	-reapeat_selector: everything inside this element is copied to its parent
	-reapeat_triget: when clicked it will do the action (copying elements)
	output: none
*/
function y_reapeat_field(reapeat_selector,reapeat_triget)
{
	parent = $(reapeat_selector).parent();
	content = $(reapeat_selector).html();
	$( reapeat_triget ).on( "click", function() {
		parent.append(content);
	});
}//end y_reapeat_field