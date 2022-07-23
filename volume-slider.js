


const volume = document.querySelector('.volume');
    const volumeRange = document.querySelector('.volume-range');
    const volumeContainer = document.querySelector('.volume-container');
    const volumeBtn = document.querySelector('.volume-button');

     volumeRange.addEventListener("click", volumeClick    );
        function volumeClick(event) {
             let x = event.offsetX;
             volume.style.width = (Math.floor(x) + 10) + 'px';
         }



        let mouseIsDown = false;

        volumeContainer.addEventListener("mouseup", up);
        volumeBtn.addEventListener("mousedown", down);
        volumeContainer.addEventListener("mousemove", volumeSlide, true);

        function down(){ 
            mouseIsDown = true; 
        }
        
        function up(){ 
            mouseIsDown = false; 
        }
				
    		const volumeRangeWidth = volumeRange.getBoundingClientRect().width; // This will be the volume limit (100%)
        
        function volumeSlide(event) {
            if (mouseIsDown) {
                let x = event.offsetX;
                if (event.target.className == "volume-container") {
                	x = Math.floor(x);
                  if (x < 0) x = 0; // check if it's too low
                  if (x > volumeRangeWidth) x = volumeRangeWidth; // check if it's too high
                  volume.style.width = (x+10) + 'px';
                }
                	
            }
        }