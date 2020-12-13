function toggleBold() {var range, sel;
    if (window.getSelection) {
        // Non-IE case
        sel = window.getSelection();
        if (sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        document.execCommand("bold", false, null);
        document.designMode = "off";
    } else if (document.selection && document.selection.createRange &&
            document.selection.type != "None") {
        // IE case
        range = document.selection.createRange();
        range.execCommand("bold", false, null);
    }
}
function toggleItalic() {var range, sel;
    if (window.getSelection) {
        // Non-IE case
        sel = window.getSelection();
        if (sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        document.execCommand("italic", false, null);
        document.designMode = "off";
    } else if (document.selection && document.selection.createRange &&
            document.selection.type != "None") {
        // IE case
        range = document.selection.createRange();
        range.execCommand("italic", false, null);
    }
}
function toggleUnderline() {var range, sel;
    if (window.getSelection) {
        // Non-IE case
        sel = window.getSelection();
        if (sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        document.execCommand("underline", false, null);
        document.designMode = "off";
    } else if (document.selection && document.selection.createRange &&
            document.selection.type != "None") {
        // IE case
        range = document.selection.createRange();
        range.execCommand("underline", false, null);
    }
}

function validateForm() {
  var formEl = document.forms.myForm;
var formData = new FormData(formEl);
var name = formData.get('fname');
var age = formData.get('age');
var address = formData.get('address');
var sub = formData.get('sub');
var mov = formData.get('mov');
var sing = formData.get('sing');
var gender = formData.get('gender');
var pass = formData.get('pwd');

if(name=="")
{
    alert("Name must be filled out");
return false;
    }
else if(age=="")
{
    alert("age must be a number");
return false;
    }
else if(address=="")
{
    alert("address must be filled out");
return false;
    }
    else if(sub=="")
{
    alert("Favourite subject must be filled out");
return false;
    }
        else if(mov=="")
{
    alert("Favourite Movie must be filled out");
return false;
    }
           else if(sing=="")
{
    alert("Favourite Singer must be filled out");
return false;
    }
else if(gender==null)
{
alert("Please select Gender");
return false;
    } 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(pass.match(decimal)) 
{ 
alert('ok');
return true;
}
else
{ 
alert('password should have atleast one uppercase character,atleast two lowercase charater,one number and one special character');
return false;
}
} 
 
