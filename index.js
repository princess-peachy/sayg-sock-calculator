const formInput = document.getElementById("calcInputs");
formInput.addEventListener("submit", sockCalculator);

function sockCalculator(e) {
 // Prevent page reload
 e.preventDefault();

 // Get Inputs
 const tension = document.getElementById("tension").value;
 const st_in = document.getElementById("st_in").value;
 const rows_in = document.getElementById("rows_in").value;
 const foot_circ = document.getElementById("foot_circ").value;
 const cuff_length = document.getElementById("cuff_length").value;
 const cuff_to_heel = document.getElementById("cuff_to_heel").value;
 const heel_to_toe = document.getElementById("heel_to_toe").value;
 const ease = .9

 // Calculate Outputs
 const cast_on_sts = Math.floor(.5 * (foot_circ-.5) * ease * st_in); // .5 in is subtracted from foot_circ for seam allowance
 const cuff_rows = cuff_length * rows_in * 2;
 const ankle_rows = cuff_to_heel * rows_in;
 const center_sts = Math.ceil(cast_on_sts * .37)
 const rib_tension = tension - 2;

 // Calculate sole_rows
 const short_rows = cast_on_sts - center_sts;
 const heel_to_toe_rows = (heel_to_toe-.5) * rows_in;
 const sole_rows = Math.floor(heel_to_toe_rows - (short_rows * 2));

 //Update HTML
 document.getElementById("main_tension").textContent = tension;
 document.getElementById("rib_tension").textContent = rib_tension.toString();
 document.getElementById("cast_on_sts").textContent = cast_on_sts.toString();
 document.getElementById("cuff_rows").textContent = cuff_rows.toString();
 document.getElementById("ankle_rows").textContent = ankle_rows.toString();
 document.getElementById("heel_center_sts").textContent = center_sts.toString();
 document.getElementById("toe_center_sts").textContent = center_sts.toString();
 document.getElementById("sole_rows").textContent = sole_rows.toString();
}