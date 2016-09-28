<?php 
//$sels=array();
$sels=$_GET['sels'];
//$sels1=json_decode($_GET['sels']);
//print_r($_GET['sels']);
//$sels = $_REQUEST['sels'];
$scores=array(0,0,0,0,0,0);
$response=array();
switch(end($sels[0])){
	case 1:
		$scores[2]+=15;
		$scores[4]+=15;
		break;
	case 2:
		$scores[3]+=15;
		$scores[5]+=15;
		break;
	case 3:
		$scores[0]+=15;
		$scores[1]+=15;
		break;
}
switch(end($sels[1])){
	case 1:
		$scores[5]+=30;
		break;
	case 2:
		$scores[0]+=30;
		$scores[2]+=30;
		$scores[3]+=30;
		break;
	case 3:
		$scores[1]+=30;
		break;
	case 4:
		$scores[4]+=30;
		break;
}

#3 late
switch(end($sels[2])){
	case 1 :$scores[2]+=30; break;
	case 2 :$scores[5]+=30; break;
	case 3 :$scores[3]+=30; break;
	case 4 :$scores[1]+=30; break;
	case 5 :$scores[4]+=30; break;
	case 6 :$scores[0]+=30; break;
}
#4
switch(end($sels[3])){
	case 1 :$scores[4]+=30; break;
	case 2 :$scores[0]+=30; break;
	case 3 :$scores[2]+=30; break;
	case 4 :$scores[1]+=30; $scores[3]+=30; break;
	case 5 :$scores[5]+=30; break;
}
#5
switch(end($sels[4])){
	case 1 :$scores[0]+=30; break;
	case 2 :$scores[2]+=30; break;
	case 3 :$scores[4]+=30; break;
	case 4 :$scores[1]+=30; break;
	case 5 :$scores[3]+=30; break;
	case 6 :$scores[5]+=30; break;

}
#6
switch(end($sels[5])){
	case 1 :$scores[4]+=30; break;
	case 2 :$scores[2]+=30; break;
	case 3 :$scores[0]+=30; break;
	case 4 :$scores[1]+=30; break;
	case 5 :$scores[5]+=30; break;
	case 6 :$scores[3]+=30; break;

}
#7
switch(end($sels[6])){
	case 1 :$scores[2]+=30; break;
	case 2 :$scores[1]+=30; break;
	case 3 :$scores[0]+=30; break;
	case 4 :$scores[5]+=30; break;
	case 5 :$scores[3]+=30; break;
	case 6 :$scores[4]+=30; break;
}
#8
foreach($sels[7] as $item){
	switch($item){
	case 1 :$scores[2]+=30; break;
	case 2 :$scores[0]+=30; break;
	case 3 :$scores[4]+=30; break;
	case 4 :$scores[3]+=30; break;
	case 5 :$scores[5]+=30; break;
	case 6 :$scores[1]+=30; break;
	}
}


#9
foreach($sels[8] as $item){
	switch($item){
	case 1 :$scores[0]+=30; break;
	case 2 :$scores[5]+=30; break;
	case 3 :$scores[1]+=30; break;
	case 4 :$scores[2]+=30; break;
	case 5 :$scores[3]+=30; break;
	case 6 :$scores[4]+=30; break;
	}
}

#10
foreach($sels[9] as $item){
	switch($item){
	case 1 :$scores[1]+=30; break;
	case 2 :$scores[0]+=30; break;
	case 3 :$scores[4]+=30; break;
	case 4 :$scores[2]+=30; break;
	case 5 :$scores[5]+=30; break;
	case 6 :$scores[3]+=30; break;
	}
}


#11
foreach($sels[10] as $item){
	switch($item){
	case 1 :$scores[1]+=30; break;
	case 2 :$scores[0]+=30; break;
	case 3 :$scores[2]+=30; break;
	case 4 :$scores[5]+=30; break;
	case 5 :$scores[3]+=30; break;
	case 6 :$scores[4]+=30; break;
	}
}
$response['score1']=$scores[0];
$response['score2']=$scores[1];
$response['score3']=$scores[2];
$response['score4']=$scores[3];
$response['score5']=$scores[4];
$response['score6']=$scores[5];
echo json_encode($response);


?>


