<?php

session_start();

if(!empty($_POST['login']) && !empty($_POST['haslo']))

{

	if($_POST['login']=='login' && $_POST['haslo']=='haslo')

	{

	$_SESSION['zalogowany']=$_POST['login'];

	echo 'zalogowany';

	}

	else

	{

	echo 'HASLO i LOGIN BLEDNE!!!';

	}


}


?>