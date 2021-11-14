<?php
ini_set('display_errors', 'On');
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>

<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"
lang="en">
<link rel="stylesheet" type="text/css" href="Loginstyle.css">

<script type="text/javascript">
</script>
<head>
<title></title>
</head>
<body>
  <div id="PageTitle">Login Page</div>
<p class="errorzone">
<?php
  if($em != ""){echo $em;}
 ?>
</p>
<form action="input.php" method="post">
  <div id="data">
      <label>Login</label>
      <input type="text" name="Login">

      <label>Password</label>
      <input type="Password" name="Password"><br>
  </div><br>



  <div id="buttons">
    <input type="submit" value="Clear" name="Submit" alt="clear">
    <input type="submit" value="Submit" name="Submit" alt="submit">
  </div>
</form>

</body>
</html>
