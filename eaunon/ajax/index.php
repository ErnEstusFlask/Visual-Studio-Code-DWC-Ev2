<?php
$usuario=isset($_GET['DNI'])?$_GET['DNI']:$_POST['DNI'];

$array=new stdClass();

if($el_usuario=="44898517X"){
    $array->$Nombre="Ernesto";
    $array->Apellido1="Auñón";
    $array->Apellido2="Bernabeu";
  $json=json_decode($array);
  echo $json;
} else if($el_usuario=="53602969C"){
    $array->$Nombre="Hector ";
    $array->Apellido1="Santos";
    $array->Apellido2="Sanroque";
  $json=json_decode($array);
  echo $json;
}
?>