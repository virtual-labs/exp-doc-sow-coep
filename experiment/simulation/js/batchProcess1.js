resultJson = {};
wrongAttempts = {};
timerMasterJson = {};
var cntValidate = 0;


$("#boilerConnect").click(function() {
	$("#counter").prop("hidden",false);
	$("#headingDiv").prop("hidden",false);
	
	htm = `
	
	 <!-- Main Content (10 columns) -->
        <div class="col-12">
            <div id="diagram">
        
	
	<div class="col-sm-12 mt-2" style="display:flex;">
	<div id="dropdownLabel" style="width: 20%;padding-left: 130px;"><label for="myDropdown" style="font-size:16px; font-weight: 600;">Choose a role you are working:</label></div>
 <select id="myDropdown"  style="width: 30%;" >
   <option value="">-- Select --</option>
   <option value="1">Consultant</option>
   <option value="2">Contractor</option>
   <option value="3">Customer - Project Division</option>
   <option value="4">Customer - Plant operation (Maintenance)</option>
 </select>
</div>


	
	<div class="col-sm-12 mt-2" style="display:flex;">
	<div id="dropdownLabel" style="width: 20%;padding-left: 130px;"><label for="myDropdown" style="font-size:16px; font-weight: 600;">Choose a Plant:</label></div>
 	<select id="myDropdown1"  style="width: 30%;">
   <option value="">-- Select --</option>
   <option value="batch">Batch Process and Bottle filling pilot plant</option>
   <option value="boiler">Boiler and Heat Exchanger</option>
   <option value="spray">Spray Dryer</option>
   <option value="column">Distillation Column</option>
   
 </select>
</div>

<div id = "statement">
</div>

<div class="form-group row">
  <label for="username" class="col-sm-2 col-form-label">Project objective:</label>
  <div class="col-sm-4">
    <input type="text" class="form-control" id="object" name="username" ">
  </div>
</div>

<button type="button" class="btn btn-primary"  id="next"  style="margin:10px;" >Next Level</button> 

</div>
</div>`;

$("#main-div").html(htm);

   function handleSelection() {
      const dropdown = document.getElementById("myDropdown");
      const selectedValue = dropdown.value;
      console.log("Selected Value:", selectedValue);
    }
  
  var state = 'You are working as a “consulting Automation Engineer” in a consultants firm. The firm has recently received a contract to design, develop, and support in commissioning of “Batch Process and Bottle Filling Pilot Plant”. As per your job profile you are required to develop pre engineering and post engineering documents and support during commissioning. ';
	$("#statement").html(state);
	
	
	$("#next").click(function () {
		boilerSchema();
		
		});
});