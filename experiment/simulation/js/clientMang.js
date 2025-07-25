var schValidate = 0;
function clientMang(){
	$("#next3").prop("hidden",true);
	$("#next4").prop("hidden",false);
	$("#main-div","#diagram").html('');
	$("#headingDiv").prop("hidden",false)
	timerMasterJson.connection=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	
		htm = `
	
	 <div class="container-fluid">
	 
    <div class="row" id="result-div">
        <!-- Left Sidebar (2 columns) -->
        <div class="col-2" style="border:2px solid black;" >
			<div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 20px; font-weight: 800;">Organisation</p>
		    </div>
              <div class="container-fluid mt-3">
                <div class="row">
          
               
                   <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="project">
                            <img src="images/project.png" alt="project" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="imp">
                            <img src="images/proImp.png" alt="solu" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="engg">
                            <img src="images/engg.png" alt="engg" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="auto">
                            <img src="images/engAuto.png" alt="auto" draggable="false" style="width: 52%;">
                        </div>
                    </div>
                    
                                   
                  
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="infra">
                            <img src="images/infra.png" alt="pro" draggable="false" style="width: 50%;">
                        </div>
                    </div>  
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="IT">
                            <img src="images/IT.png" alt="out" draggable="false" style="width: 20%;">
                        </div>
                    </div>
                    
                       <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="QA">
                            <img src="images/QA.png" alt="QA" draggable="false" style="width: 30%;">
                        </div>
                    </div>
                    
                       <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="data">
                            <img src="images/data.png" alt="buss" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                                  

                    
                       <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="soft">
                            <img src="images/softDev.png" alt="soft" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                  
                     
                        <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="legal">
                            <img src="images/legal.png" alt="legal" draggable="false" style="width: 30%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="tran">
                            <img src="images/tran.png" alt="infra" draggable="false" style="width: 30%;">
                        </div>
                    </div>
                     
                   
                    
                       
                  
                </div>
            </div>
                   
        </div>

        <!-- Main Content (10 columns) -->
        <div class="col-10" style="border:2px solid black;">
            <div id="diagram"></div>
        </div>
    </div>
</div>

`;


$("#main-div").html(htm);


	var virtualWidth = 1200;
	var virtualHeight = 700;

	// Create Raphael canvas that fills the container
	const paper = Raphael("diagram", "100%", "100%");

	// Set viewBox for responsive scaling
	paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
	paper.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");


	
	
		// Drop zones
//	const dropZones = [
//		{ x: (x - 70), y: (y + 200), width: 100, height: 105, type: "tank", occupied: false },
//		{ x: (x + 100), y: (y + 300), width: 70, height: 70, type: "pump", occupied: false },
//	];



	// Set viewBox for responsive scaling
	paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
	paper.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");

	let placedElements = [];
	var wrongCnt = 0;
	var wrongAttempts = 0;

	var x = 100, y = 80;
	var dropTolerance = 20; // User-defined tolerance for dropping near a rectangle
	
	
	const boxWidth = 80;
    const boxHeight = 30;

        // Draw a rectangle node with label
        function drawNode(x, y) {
            const rect = paper.rect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight)
                .attr({ fill: "#fff", stroke: "#fff", "stroke-width": 2, rx: 5, ry: 5 });
//            const text = paper.text(x, y, label).attr({ "font-size": 12 });
            return { rect, x, y };
        }
		
		
		const text = paper.text(x+300, y-50, "Identify various departments which are essential to complete the project as per your role - Client (Management)").attr({ "font-size": 15 });
        // Draw orthogonal (boxy) connector between two nodes
        function connect(from, to) {
            const midY = (from.y + to.y) / 2;
            const path = [
                `M${from.x},${from.y + boxHeight / 2}`,
                `L${from.x},${midY}`,
                `L${to.x},${midY}`,
                `L${to.x},${to.y - boxHeight / 2}`
            ].join('');
            paper.path(path).attr({ stroke: "#333", "stroke-width": 2 });
        }

        // Tree structure with rectangles
        const root = drawNode(500, 100);
        const child1 = drawNode(300, 200);
        const child2 = drawNode(550, 200);
        const child3 = drawNode(750, 200);
//		const child4 = drawNode(400, 200);
        const grandchild1 = drawNode(200, 300);
        const grandchild2 = drawNode(300, 300);
        const grandchild3 = drawNode(400, 300);
        const grandchild4 = drawNode(550, 300);

        // Connections
        connect(root, child1);
        connect(root, child2);
        connect(root, child3);
//        connect(root, child4);
        connect(child1, grandchild1);
        connect(child1, grandchild2);
         connect(child1, grandchild3);
        connect(child2, grandchild4);
//        connect(grandchild1, grandchild2);
//        connect(grandchild2, grandchild3);
//        connect(grandchild2, grandchild4);

		
	
			// Function to validate if the drop coordinates are close enough to predefined points
	function isValidDrop(dropX, dropY) {
		return predefinedPaths1.some(path =>
			Math.abs(path.x - dropX) <= 3 && Math.abs(path.y - dropY) <= 3
		);
	}
	
		// Drop zones
	const dropZones = [
		{ x: (x + 340), y: (y - 5 ), width: 120, height: 40, type: "project", occupied: false },

		{ x: (x + 40), y: (y + 210), width: 100, height: 30, type: "infra", occupied: false },
		{ x: (x + 150), y: (y + 210), width: 100, height: 30, type: "tran", occupied: false },
		{ x: (x + 270), y: (y + 210), width: 100, height: 30, type: "data", occupied: false },
		{ x: (x + 150), y: (y + 105), width: 120, height: 30, type: "auto", occupied: false },

		{ x: (x + 580), y: (y + 105), width: 100, height: 30, type: "legal", occupied: false },

		{ x: (x + 400), y: (y + 105), width: 120, height: 30, type: "imp", occupied: false },
		{ x: (x + 420), y: (y + 205), width: 70, height: 30, type: "QA", occupied: false },
		
	];

	// Draw drop zones
	dropZones.forEach(zone => {
		paper.rect(zone.x, zone.y, zone.width, zone.height).attr({
			fill: "rgba(0, 0, 0, 0.1)",
			stroke: "#cccfcd",
			"stroke-width": 1, opacity: 0.5
		});
	});
	
	
	
	function getSVGCoordinates(e) {
		let svgRect = paper.canvas.getBoundingClientRect();
		let scaleX = virtualWidth / svgRect.width;
		let scaleY = virtualHeight / svgRect.height;

		let svgX = (e.clientX - svgRect.left) * scaleX;
		let svgY = (e.clientY - svgRect.top) * scaleY;

		console.log(`SVG Coordinates: x=${svgX}, y=${svgY}`); // Debugging log

		return { x: svgX, y: svgY };
	}
	
	
		// Handle dragging of components
	document.querySelectorAll(".component").forEach(component => {
		component.addEventListener("dragstart", (e) => {
			e.dataTransfer.setData("imgSrc", component.querySelector("img")?.src || ""); // Allow both images & paths
			e.dataTransfer.setData("type", component.getAttribute("data-type"));
		});
	});

	document.getElementById("diagram").addEventListener("dragover", (e) => {
		e.preventDefault();
	});
	
	document.getElementById("diagram").addEventListener("drop", (e) => {
		e.preventDefault();
		const imgSrc = e.dataTransfer.getData("imgSrc");
		const draggedType = e.dataTransfer.getData("type");

		let dropPoint = getSVGCoordinates(e);
		
		
				// 🔹 Handle image drop with tolerance
		let validDrop = dropZones.find(zone =>
			dropPoint.x >= (zone.x - dropTolerance) &&
			dropPoint.x <= (zone.x + zone.width + dropTolerance) &&
			dropPoint.y >= (zone.y - dropTolerance) &&
			dropPoint.y <= (zone.y + zone.height + dropTolerance) &&
			!zone.occupied
		);

		if (validDrop) {
			let imgElement = paper.image(imgSrc, validDrop.x, validDrop.y, validDrop.width, validDrop.height).attr({ cursor: "pointer" });
			imgElement.data("type", draggedType);

			imgElement.click(() => {
				imgElement.remove();
				validDrop.occupied = false;
				wrongCnt++;
			});

			validDrop.occupied = true;
			placedElements.push(imgElement);
		}
	});
	
	document.getElementById("validate3").addEventListener("click", () => {
		schValidate++;
		console.log(wrongCnt);
		console.log(wrongAttempts);

		let validImages = dropZones.every(zone =>
			placedElements.some(el => el.attrs &&
				el.attrs.x === zone.x && el.attrs.y === zone.y &&
				el.data("type") === zone.type)
		);
		
		resultJson.incorrect = wrongAttempts;
		if (validImages ) {
			Swal.fire({
				icon: 'success',
				title: 'All elements are placed correctly!',
				text: `Correct elements count: ${placedElements.length}`,
				confirmButtonText: 'OK'
			});
//			$("#btnNext").prop("hidden", false);
//			$("#counter").prop("hidden", true);
			resultJson.schemaCount = schValidate;


			//$('img').each(function() {
			//    $(this).attr('crossorigin', 'anonymous');
			//});
//			indexsheet();
			spray();

			console.log("correct : " + placedElements.length);
//			console.log(resultJson);
		} else {
			if (wrongAttempts < 3) {
				wrongAttempts++;
				Swal.fire({
					icon: 'error',
					title: 'Some elements are missing or misplaced!',
					text: `Wrong attempts: ${wrongAttempts}`,
					confirmButtonText: 'Try Again'

				});
				//				console.log(masterjson);

			} else {
				Swal.fire({
					title: 'Appropriate connections',
					html: `<div>
                <img src='images/schemaBoiler.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
           </div>`,
					width: '80%', // Increases the width of the modal
					confirmButtonText: 'Try Again'
				});
				//				console.log(masterjson);
			}
		}
	});
	
	document.getElementById("next4").addEventListener("click", () => {
		$("#validate3,#next4").prop("hidden",true);
		$("#counter").prop("hidden",true);
	/* var	htm = `<div>
                <img src='images/image.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px; margin-bottom : 60px;'>
           </div>`; */
		   
	var	htm = `<div class="row" style="display:flex; margin-bottom: 50px;">
	            <div class="col-6">
				<img src='images/Consultant.JPG' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; height:100%; width:100%'>
				</div>
				<div class="col-6">
				<img src='images/Contractor.JPG' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; height:100%; width:100%'>
				</div>
				<div class="col-6">
				<img src='images/Client.JPG' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; height:100%; width:100%'>
				</div>
				<div class="col-6">
				<img src='images/ClientMgmt.JPG' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; height:100%; width:100%'>	 
           </div>
		   </div>`;	   
           
           $("#main-div").html(htm);
		
		});
}