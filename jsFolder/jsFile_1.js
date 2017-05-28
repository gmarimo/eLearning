

//begin jquery 

 $("#menu-toggle").click( function (e) { //sidebar display/hide
        e.preventDefault();
        $("#main_wrapper").toggleClass("menuDisplayed");
         });


//jquery library ends





// beginning the progress bar under lecture section
function play_video(){
	window.open('videos/tut1.mp4','_blank', 'width=400 height=300,left=400,top=200');
}

function progressBar(){ //moving the progress bar
        var myBar = document.getElementById('percentageProgress');
        var width = 1;
        var id = setInterval(frame, 10);

        function frame(){
        	if(width >= 100){
        		clearInterval(id);
        	}else{
        		width++;
        		myBar.style.width = width + '%';
        		myBar.innerHTML = width * 1 + '%';
        	}
        }
}
//progress bar section ends here


