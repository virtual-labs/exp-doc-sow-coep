resultJson = {};
wrongAttempts = {};
timerMasterJson = {};
var cntValidate = 0;


$("#boilerConnect").click(function() {
	$("#headingDiv").prop("hidden", false);
		$("#counter").prop("hidden",false);
	htm = `
	<div class="row">
	<div class="col-2"></div>
	
	<!-- Main Content (8 columns) -->
    <div class="col-8 mt-4" style="border:1px solid grey; border-radius:20px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
    <div id="diagram">
        	
   <div class="col-sm-12 mt-3" style="display:flex;">
   <div id="dropdownLabel" style=""><label for="myDropdown" style="font-size:16px; font-weight: 600;">Choose a role you are working:</label></div>
   <select id="myDropdown"  style="margin-left:10px; padding:5px;" >
   <option value="">-- Select --</option>
   <option value="1">Consultant</option>
   <option value="2">Contractor</option>
   <option value="3">Customer - Project Division</option>
   <option value="4">Customer - Plant operation (Maintenance)</option>
   </select>
   </div>
	
   <div class="col-sm-12 mt-3" style="display:flex;">
   <div id="dropdownLabel" style=""><label for="myDropdown" style="font-size:16px; font-weight: 600;">Choose a Plant:</label></div>
   <select id="myDropdown1"  style="margin-left:10px; padding:5px;">
   <option value="">-- Select --</option>
   <option value="batch">Batch Process and Bottle filling pilot plant</option>
   <option value="boiler">Boiler and Heat Exchanger</option>
   <option value="spray">Spray Dryer</option>
   <option value="column">Distillation Column</option>
   </select>
   </div>

<div class="mt-3" id = "statement" style="padding:10px;border-radius:20px; box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1); font-size:18px;">
</div>

<div class="form-group row mt-3">
  <label for="username" class="col-2 col-form-label" style="font-size:16px; font-weight: 600;">Project objectives:</label>
  <div class="col-8">
    <textarea type="text" class="form-control" id="object" name="username" maxlength="1500" rows="5"></textarea>
  </div>
</div>

<div class="text-center">
<button type="button" class="btn btn-primary"  id="next"  style="margin:10px;" >Next Level</button> 
</div>

</div>
</div>
<div class="col-2"></div>
</div>
`;

	$("#main-div").html(htm);

	function handleSelection() {
		const dropdown = document.getElementById("myDropdown");
		const selectedValue = dropdown.value;
		console.log("Selected Value:", selectedValue);
	}

	$('#myDropdown1').on('change', function () {
    var selectedValue = $(this).val();
    var state = "";

    switch (selectedValue) {
      case 'batch':
        state = 'You are working as a “consulting Automation Engineer” in a consultants firm. The firm has recently received a contract to design, develop, and support in commissioning of “Batch Process and Bottle Filling Pilot Plant”. As per your job profile you are required to develop pre engineering and post engineering documents and support during commissioning.';
        break;
      case 'boiler':
        state = 'You are working as an “Engineer-Instrumentation” in a contractor’s firm. The firm has recently received a contract to commission a “Boiler and Heat Exchanger pilot plant”. As per your job profile you are required to complete the installation, loop checking, of field and control system components, and complete commissioning.';
        break;
      case 'spray':
        state = 'You are working as an “Instrumentation Engineer” in a clients’ firm in project division. The firm has recently decided to erect a new plant of “Spray Dryer”.  As per your job profile you are required to check whether the designed control system is technically correct and as per your requirement, whether the pre engineering documents are in order, and whether commissioning is successful as per your requirement.';
        break;
      case 'column':
        state = 'You are working as an “Instrumentation Engineer” in a clients’ firm in maintenance division. The firm has recently commissioned a new plant of “Spray Dryer”.  As per your job profile you are required to the documents are “as built”, in case of minor fault identify the fault and rectify it by using consumables from your firm. If it is a major problem replace the instrument or control system component through your firm.';
        break;
      default:
        state = '';
    }

    $('#statement').html(state);
  });


	$("#next").click(function() {
		boilerSchema();

	});
});