function ValidateForm()
{
    var name = document.forms.myForm.Name.value;
    var email = document.forms.myForm.Email.value;
    var dob = document.forms.myForm.Date.value;
    var isChecked1 = document.myForm.Individual.checked;
    var isChecked2 = document.myForm.Organization.checked;
    var select = document.myForm.Interests.value;
    console.log(select)

    var regName = /\d+$/g; 
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.

    // if (name == "" || regName.test(name)) {
    //     window.alert("Please enter your name properly.");
    //     name.focus();
    //     return false;
    // }
    // if (email == "" || !regEmail.test(email)) {
    //     window.alert("Please enter a valid e-mail address.");
    //     email.focus();
    //     return false;
    // }
    // if (dob == null || dob == "") {
    //     window.alert("Please select a valid DOB");
    //     email.focus();
    //     return false;
    // }
    // if(!isChecked1 && !isChecked2){
    //     window.alert("Please select 1 checkbox!")
    //     return false;
    // }
    // if(isChecked1 && isChecked2){
    //     window.alert("Please select only 1 checkbox!")
    //     return false;
    // }
    if (!select) {
        alert("Please select a valid course");
        select.focus();
        return false;
    }

}