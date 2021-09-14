function result() {
	var eng=document.getElementById('english').value;
		var math=document.getElementById('math').value;
			var chem=document.getElementById('chem').value;
				var bio=document.getElementById('bio').value;
					var fren=document.getElementById('fren').value;
						var total=document.getElementById('total').value;
							var total=parseFloat(eng)+parseFloat(math)+parseFloat(chem)+parseFloat(bio)+parseFloat(fren);
								document.getElementById('total').innerHTML=total;
									var average=(total/5);
										document.getElementById('average').innerHTML=average;

if (average>50){document.getElementById('remarks').innerHTML='You passed!';
	document.getElementById('emoji').innerHTML='<img src="icon/pass.png"  height="90">'
	 }
		else{document.getElementById('remarks').innerHTML='You failed!';
		document.getElementById('emoji').innerHTML='<img src="icon/fail.png"  height="90">'};
		}
	
	
	function out(){

	var eng=document.getElementById('english').value;

	if(eng<40){document.getElementById('enggrade').value='F';
	document.getElementById('enggrade').style='color:red'}
		else if(eng>40 && eng<=45){document.getElementById('enggrade').value='E'}
			else if(eng>45 && eng<50){document.getElementById('enggrade').value='D'}
				else if(eng>50 && eng<=60){document.getElementById('enggrade').value='C'}
					else if(eng>60 && eng<=69){document.getElementById('enggrade').value='B'}
						 else{document.getElementById('enggrade').value='A'};
					}
					

	function outm(){

		var math=document.getElementById('math').value;

		if(math<40){document.getElementById('mathgrade').value='F';
		document.getElementById('mathgrade').style='color:red'}
			else if(math>40 && math<=45){document.getElementById('mathgrade').value='E'}
				else if(math>45 && math<50){document.getElementById('mathgrade').value='D'}
					else if(math>50 && math<=60){document.getElementById('mathgrade').value='C'}
						else if(math>60 && math<=69){document.getElementById('mathgrade').value='B'}
							 else{document.getElementById('mathgrade').value='A'};
						}


	function outc(){

		var chem=document.getElementById('chem').value;

		if(chem<40){document.getElementById('chemgrade').value='F';
		document.getElementById('chemgrade').style='color:red'}
			else if(chem>40 && chem<=45){document.getElementById('chemgrade').value='E'}
				else if(chem>45 && chem<50){document.getElementById('chemgrade').value='D'}
					else if(chem>50 && chem<=60){document.getElementById('chemgrade').value='C'}
						else if(chem>60 && chem<=69){document.getElementById('chemgrade').value='B'}
							 else{document.getElementById('chemgrade').value='A'};
						}


	function outb(){

		var bio=document.getElementById('bio').value;

		if(bio<40){document.getElementById('biograde').value='F';
		document.getElementById('biograde').style='color:red'}
			else if(bio>40 && bio<=45){document.getElementById('biograde').value='E'}
				else if(bio>45 && bio<50){document.getElementById('biograde').value='D'}
					else if(bio>50 && bio<=60){document.getElementById('biograde').value='C'}
						else if(bio>60 && bio<=69){document.getElementById('biograde').value='B'}
							 else{document.getElementById('biograde').value='A'};
						}


	function outf(){

		var fren=document.getElementById('fren').value;

		if(fren<40){document.getElementById('frengrade').value='F';
		document.getElementById('frengrade').style='color:red'}
			else if(fren>40 && fren<=45){document.getElementById('frengrade').value='E'}
				else if(fren>45 && fren<50){document.getElementById('frengrade').value='D'}
					else if(fren>50 && fren<=60){document.getElementById('frengrade').value='C'}
						else if(fren>60 && fren<=69){document.getElementById('frengrade').value='B'}
							 else{document.getElementById('frengrade').value='A'};
						}

