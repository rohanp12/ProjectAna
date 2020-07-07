
var input = "Order a burger"

function postData(input) {
    $.ajax({
      type: "POST",
      url: "/TStoPythonInterfacer.py",
      data: { param: input},
      success: callbackFunc
    });
}

function callbackFunc(response) {
  input = response;
}
postData(input)

console.log(input)
