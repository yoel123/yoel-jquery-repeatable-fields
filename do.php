<?php

echo "form results:<br>";
print_r($_POST['repeat_txt']);

echo "<br><br>loop array:<br>";

foreach($_POST['repeat_txt'] as $item)
{
	echo "<br>". $item;
}


?>