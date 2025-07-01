var schValidate = 0;
function boilerSchema(){
	$("#validate").prop("hidden",true);
	$("#validate1").prop("hidden",false);
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
			   <p class="heading-text text-center" style="color: white; font-size: 20px; font-weight: 800;">Utilities</p>
		    </div>
              <div class="container-fluid mt-3">
                <div class="row">
          
               
                   <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="project">
                            <img src="images/project.png" alt="project" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="solu">
                            <img src="images/soluArct.png" alt="solu" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="engg">
                            <img src="images/engg.png" alt="engg" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="opera">
                            <img src="images/busOper.png" alt="opera" draggable="false" style="width: 50%;">
                        </div>
                    </div>  
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="auto">
                            <img src="images/engAuto.png" alt="auto" draggable="false" style="width: 52%;">
                        </div>
                    </div> 
                    
                     <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="pro">
                            <img src="images/pro.png" alt="pro" draggable="false" style="width: 50%;">
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
                        <div class="component" draggable="true" data-type="buss">
                            <img src="images/buss.png" alt="buss" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                       <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="fina">
                            <img src="images/fina.png" alt="fina" draggable="false" style="width: 30%;">
                        </div>
                    </div>
                    
                       <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="auto">
                            <img src="images/auto.png" alt="auto" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                       <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="infra">
                            <img src="images/infra.png" alt="infra" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="sales">
                            <img src="images/sales.png" alt="infra" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="mang">
                            <img src="images/mang.png" alt="infra" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="tran">
                            <img src="images/tran.png" alt="infra" draggable="false" style="width: 30%;">
                        </div>
                    </div>
                    
                      <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="resear">
                            <img src="images/resear.png" alt="infra" draggable="false" style="width: 50%;">
                        </div>
                    </div>
                     
                        <div class="col-12 mt-3">
                        <div class="component" draggable="true" data-type="legal">
                            <img src="images/legal.png" alt="legal" draggable="false" style="width: 30%;">
                        </div>
                    </div>
                    
                      <div class="col-12 mt-3">
                      <div class="component" draggable="true" data-type="control">
                            <img src="images/autoControl.png" alt="control" draggable="false" style="width: 30%;">
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
	
//	var n1 = ;
		
	  // Table configuration
  const rows = 10;
  const cols = 4;
  const cellWidth = 160;
  const cellHeight = 60;
  const startX = 150;
  const startY = 50;

  // Table headers (optional)
  const headers = ["Consultant", "Contractor", "Client (Project)", "Client (Maintenance)"];
  const data = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
    
  ];

  // Draw header row
  for (let c = 0; c < cols; c++) {
    paper.rect(startX + c * cellWidth, startY, cellWidth, cellHeight).attr({ fill: "#dfefff", stroke: "#000" });
    paper.text(startX + c * cellWidth + cellWidth / 2, startY + cellHeight / 2, headers[c]).attr({ "font-size": 15, "font-weight": "bold" });
  }

  // Draw data rows
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols; c++) {
      paper.rect(startX + c * cellWidth, startY + (r + 1) * cellHeight, cellWidth, cellHeight).attr({ fill: "#ffffff", stroke: "#000" });
      paper.text(startX + c * cellWidth + cellWidth / 2, startY + (r + 1) * cellHeight + cellHeight / 2, data[r][c]);
    }
  }	
		
	
			// Function to validate if the drop coordinates are close enough to predefined points
	function isValidDrop(dropX, dropY) {
		return predefinedPaths1.some(path =>
			Math.abs(path.x - dropX) <= 3 && Math.abs(path.y - dropY) <= 3
		);
	}
	
		// Drop zones
	const dropZones = [
		{ x: (x + 70), y: (y + 40), width: 120, height: 40, type: "project", occupied: false },
		{ x: (x + 230), y: (y + 40), width: 120, height: 40, type: "project", occupied: false },
		{ x: (x + 390), y: (y + 40), width: 120, height: 40, type: "project", occupied: false },
		{ x: (x + 550), y: (y + 40), width: 120, height: 40, type: "project", occupied: false },
		{ x: (x + 70), y: (y + 95), width: 120, height: 40, type: "solu", occupied: false },
		{ x: (x + 230), y: (y + 95), width: 120, height: 40, type: "engg", occupied: false },
		{ x: (x + 390), y: (y + 95), width: 120, height: 40, type: "opera", occupied: false },
		{ x: (x + 550), y: (y + 95), width: 120, height: 40, type: "auto", occupied: false },
		{ x: (x + 70), y: (y + 160), width: 120, height: 40, type: "engg", occupied: false },
		{ x: (x + 230), y: (y + 160), width: 120, height: 40, type: "pro", occupied: false },
		{ x: (x + 390), y: (y + 160), width: 120, height: 40, type: "IT", occupied: false },
		{ x: (x + 550), y: (y + 160), width: 120, height: 40, type: "QA", occupied: false },
		{ x: (x + 70), y: (y + 225), width: 120, height: 40, type: "buss", occupied: false },
		{ x: (x + 230), y: (y + 225), width: 120, height: 40, type: "fina", occupied: false },
		{ x: (x + 390), y: (y + 225), width: 120, height: 40, type: "auto", occupied: false },
		{ x: (x + 550), y: (y + 225), width: 120, height: 40, type: "infra", occupied: false },
		{ x: (x + 70), y: (y + 280), width: 120, height: 40, type: "sales", occupied: false },
		{ x: (x + 230), y: (y + 280), width: 120, height: 40, type: "control", occupied: false },
		{ x: (x + 70), y: (y + 340), width: 120, height: 40, type: "mang", occupied: false },
		{ x: (x + 230), y: (y + 340), width: 120, height: 40, type: "QA", occupied: false },
		{ x: (x + 70), y: (y + 400), width: 120, height: 40, type: "tran", occupied: false },
		{ x: (x + 70), y: (y + 460), width: 120, height: 40, type: "resear", occupied: false },
		{ x: (x + 70), y: (y + 520), width: 120, height: 40, type: "legal", occupied: false },
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
	
	document.getElementById("validate1").addEventListener("click", () => {
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
}