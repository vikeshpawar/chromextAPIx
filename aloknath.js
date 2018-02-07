//document.getElementById('email').value = 'Ma nigga ma nigga';
//setTimeout(function(){ alert(":SDf");document.getElementById('u_0_2').click(); }, 3000);
//document.getElementById("Mobility").selectedIndex = 12;

//Login into AgentPortal Stage

setTimeout(function(){
	

document.getElementById('un').value = 'vpawar_cc';
document.getElementById('pw').value = 'H^Fw0&j8';
document.getElementsByTagName('button')[0].click();
console.log("Login Completed");
},2000)


setTimeout(function(){
	
	window.location.href += "&version=v2"
	console.log("append v2 and Load Completed");
},5000)
//window.location.href += "&version=v2";

// TestdataDebug panel for Education


setTimeout(function(){
	
document.getElementById('test_data_selector').selectedIndex=4;
document.getElementsByName('IgnoreTimeRangeEvaluation')[0].selectedIndex=1;
document.getElementsByName('SourceDataCaptureKey')[0].value='0';
document.getElementsByName('PhoneProgramKey')[0].selectedIndex=24;
document.getElementsByClassName('green')[0].click();
console.log("LeadLoad Completed");
},3500)


//Filling up the AgentPortal form for edu

setTimeout(function(){
document.getElementsByName("FN")[0].value = 'Vikesh' ;
document.getElementsByName("LN")[0].value = 'Pawar' ;
document.getElementsByName("InterestedInEducation")[0].selectedIndex=1;

//Goals PANEL
//$('#cc-panel-Service #ProgramsOfInterestType > u').click()
//document.getElementById("ui-id-218").click();
document.getElementsByName("DegreeStartTimeframe")[0].selectedIndex=1;
document.getElementsByName("EducationLevel")[0].selectedIndex=8;
document.getElementsByName("HighSchoolGradYear")[0].selectedIndex=5;
document.getElementsByName("DegreeOfInterest")[5].click();//bachelor Degree
document.getElementsByName("DegreeOfInterest")[6].click();//Master's Degree

//About PANEL
document.getElementsByName("Gender")[0].selectedIndex=1;
document.getElementsByName("Age")[0].selectedIndex=9;
document.getElementsByName("S1")[0].value='12the Lane, Test Street';
document.getElementsByName("PC")[0].value='94404';
document.getElementsByName("HP")[0].value='6505787758';
document.getElementsByName("EM")[0].value='vikesh@test.com';
document.getElementsByName("ComputerAccess")[0].selectedIndex=1;
window.scrollTo(0, 1500);

document.getElementsByClassName("process green")[0].click();
},3500)
