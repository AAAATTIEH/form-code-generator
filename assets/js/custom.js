Number.prototype.countDecimals = function() {

  if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
  return this.toString().split(".")[1].length || 0;
}

var slidersJSFunctions = [];
var defaultConfiguration = {
  "text": {
    "type": "text",
    "label": "",
    "placeholder": "",
    "sublabel": "",
    "readonly": false,
    "disabled": false
  },
  "textarea": {
    "type": "textarea",
    "label": "",
    "placeholder": "",
    "sublabel": "",
    "readonly": false,
    "disabled": false
  },
  "inputgroup": {
    "type": "inputgroup",
    "label": "",
    "placeholder": "",
    "sublabel": "",
    "right": "",
    "left": ""
  },
  "number": {
    "type": "number",
    "label": "",
    "placeholder": "",
    "value": "",
    "sublabel": "",
    "readonly": false,
    "disabled": false
  },
  "color": {
    "options": [],
    "type": "number",
    "label": "",
    "sublabel": "",
    "readonly": false,
    "disabled": false,
    "value": "#ffffff"
  },
  "select": {
    "options": [{
      value: "",
      option: ""
    }],
    "type": "number",
    "label": "",
    "sublabel": "",
    "bootstrap": ""
  },
  "radio": {
    "options": [{
      value: "",
      option: ""
    }],
    "type": "number",
    "label": "",
    "sublabel": "",
    "orientation": "horizontal"
  },
  "checkbox": {
    "options": [{
      value: "",
      option: ""
    }],
    "type": "number",
    "label": "",
    "sublabel": "",
    "orientation": "horizontal"
  },
  "switch": {
    "label": "",
    "sublabel": ""
  },
  "range": {
    "label": "",
    "sublabel": "",
    "min": 0,
    "max": 150,
    "step": 1,
    "limits": "one",
    "value 1": 25,
    "value 2": 75
  }
}
var componentConfiguration = [defaultConfiguration.text];
var script = "";
var KTnoUiSliderDemos;
var activeComponent = 1;
var rangeValue2 = '<div class="form-group row">' +
  '<label class="col-3 col-form-label">Value 2</label>' +
  '<div class="col-9">' +
  '<input type="number" class="form-control" placeholder="Enter Value 2" aria-describedby="basic-addon1">' +
  '</div>' +
  '</div>';
var options = {
  "indent_size": 4,
  "unformatted": "",
  "html": {
    "end_with_newline": true,
    "unformatted": "",
    "js": {
      "indent_size": 2
    },
    "css": {
      "indent_size": 2
    }
  },
  "css": {
    "indent_size": 1
  },
  "js": {
    "preserve-newlines": true
  }
}

changeType(componentConfiguration[0]);
readFormData(document.querySelector("#controlForm"))

function changeTitle(value) {
  var title = document.querySelector("#formTitle");
  formTitle.innerHTML = value;
}

function getText(config) {
  var readonly = config.readonly ? 'checked="checked"' : '';
  var disabled = config.disabled ? 'checked="checked"' : '';
  var html = '<div id="text" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Placeholder</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.placeholder + '" class="form-control" placeholder="Enter Placeholder" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Readonly</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + readonly + '>' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Disabled</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + disabled + '>' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '</div>';
  return html;
}
function getTextarea(config) {

  var readonly = config.readonly ? 'checked="checked"' : '';
  var disabled = config.disabled ? 'checked="checked"' : '';
  var html = '<div id="textarea" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Placeholder</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.placeholder + '" class="form-control" placeholder="Enter Placeholder" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Readonly</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + readonly + '>' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Disabled</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + disabled + '>' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '</div>';
  return html;
}
function getInputGroup(config) {
  var html = '<div id="textarea" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Placeholder</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.placeholder + '" class="form-control" placeholder="Enter Placeholder" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Left</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.left + '" class="form-control" placeholder="Enter Left Text" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Right</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.right + '" class="form-control" placeholder="Enter Right Text" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '</div>';
  return html;
}
function getNumber(config) {
  var readonly = config.readonly ? 'checked="checked"' : '';
  var disabled = config.disabled ? 'checked="checked"' : '';
  var html = '<div id="number" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Placeholder</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.placeholder + '" class="form-control" placeholder="Enter Placeholder" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Value</label>' +
    '<div class="col-9">' +
    '<input type="number" value="' + config.value + '" class="form-control" placeholder="Enter Number" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Readonly</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + readonly + '>' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Disabled</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + disabled + '>' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '</div>';
  return html;
}
function getColor(config) {
  var readonly = config.readonly ? 'checked="checked"' : '';
  var disabled = config.disabled ? 'checked="checked"' : '';
  var html = '<div id="color" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Value</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.value + '" class="form-control" placeholder="Enter Color" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Readonly</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + readonly + ' >' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Disabled</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + disabled + ' >' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '</div> ';
  return html;
}
function getSelect(config) {
  var bootstrap = config["bootstrap"] ? 'checked="checked"' : '';
  var html = '<div id="select" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Bootstrap</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox" ' + bootstrap + ' >' +
    '<span></span>' +
    '</label>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '<div id="componentOptions">';
  for (var i = 0; i < config.options.length; i++) {
    html += '<div class="form-group row" id="option' + (i + 1) + '">' +
      '<label class="col-3 col-form-label">Option ' + (i + 1) + '</label>' +
      '<div class="input-group col-9">' +
      '<input type="text" value="' + config.options[i].option + '" class="form-control" placeholder="Enter Option Title">' +
      '<input type="text" value="' + config.options[i].value + '" class="form-control" placeholder="Enter Option Value">' +
      '<div class="input-group-append">' +
      '<button class="btn btn-brand " type="button" onclick="addOption(1,&quot;Option&quot;)"> <span class="fa fa-plus"></span></button>' +
      '</div>' +
      '<div class="input-group-append">' +
      '<button class="btn btn-danger" type="button" onclick="deleteOption(1,&quot;Option&quot;)"><span class="fa fa-times"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
  }
  html += '</div>' +
    '</div>';
  return html;
}
function getRange(config) {
  var selected1 = "";
  var selected2 = "";
  if (config.limits == "one")
    selected1 = "selected"
  if (config.limits == "two")
    selected2 = "selected";

  var html = '<div id="range" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Min</label>' +
    '<div class="col-9">' +
    '<input type="number" value="' + config.min + '" class="form-control" placeholder="Enter Start" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Max</label>' +
    '<div class="col-9">' +
    '<input type="number" value="' + config.max + '" class="form-control" placeholder="Enter End" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Step</label>' +
    '<div class="col-9">' +
    '<input type="number" value="' + config.step + '" class="form-control" placeholder="Enter Step" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label for="selectType" class=" col-3 col-form-label">Limits</label>' +
    '<select class="form-control col-9" id="rangeLimitsType" onchange="changeRangeLimits()">' +
    '<option ' + selected1 + ' value="one">One Value</option>' +
    '<option ' + selected2 + ' value="two">Two Values</option>' +
    '</select>' +
    '</div>' +
    '<div class="" id="rangeValues">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Value 1</label>' +
    '<div class="col-9">' +
    '<input type="number" value="' + config["value 1"] + '" class="form-control" placeholder="Enter Value 1" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
  return html;
}
function getCheckbox(config) {
  var selected1 = "";
  var selected2 = "";
  if (config.orientation == "horizontal")
    selected1 = "selected"
  if (config.orientation == "vertical")
    selected2 = "selected";
  var html = '<div id="checkbox" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Orientation</label>' +
    '<select class="form-control col-9" id="selectType" onchange="">' +
    '<option ' + selected1 + ' value="horizontal">Horizontal</option>' +
    '<option ' + selected2 + ' value="vertical">Vertical</option>' +
    '</select>' +
    '</div>' +
    '<div id="componentOptions">';
  for (var i = 0; i < config.options.length; i++) {
    html += '<div class="form-group row" id="option' + (i + 1) + '">' +
      '<label class="col-3 col-form-label">Checkbox ' + (i + 1) + '</label>' +
      '<div class="input-group col-9">' +
      '<input type="text" value = "' + config.options[i].option + '" class="form-control" placeholder="Enter Checkbox Label">' +
      '<input type="text" value = "' + config.options[i].value + '" class="form-control" placeholder="Enter Checkbox Value">' +
      '<div class="input-group-append">' +
      '<button class="btn btn-brand " type="button" onclick="addOption(' + (i + 1) + ',&quot;Checkbox&quot;)"> <span class="fa fa-plus"></span></button>' +
      '</div>' +
      '<div class="input-group-append">' +
      '<button class="btn btn-danger" type="button" onclick="deleteOption(' + (i + 1) + ',&quot;Checkbox&quot;)"><span class="fa fa-times"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
  }
  '</div>' +
  '</div>';
  return html;
}
function getRadio(config) {
  var selected1 = "";
  var selected2 = "";
  if (config.orientation == "horizontal")
    selected1 = "selected"
  if (config.orientation == "vertical")
    selected2 = "selected";
  var html = '<div id="radio" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Sublabel" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Orientation</label>' +
    '<select class="form-control col-9" id="selectType" onchange="">' +
    '<option ' + selected1 + ' value="horizontal">Horizontal</option>' +
    '<option ' + selected2 + ' value="vertical">Vertical</option>' +
    '</select>' +
    '</div>' +
    '<div id="componentOptions">';
  for (var i = 0; i < config.options.length; i++) {
    html += '<div class="form-group row" id="option' + (i + 1) + '">' +
      '<label class="col-3 col-form-label">Radio ' + (i + 1) + '</label>' +
      '<div class="input-group col-9">' +
      '<input type="text" value = "' + config.options[i].option + '" class="form-control" placeholder="Enter Radio Label">' +
      '<input type="text" value = "' + config.options[i].value + '" class="form-control" placeholder="Enter Radio Value">' +
      '<div class="input-group-append">' +
      '<button class="btn btn-brand " type="button" onclick="addOption(' + (i + 1) + ',&quot;Radio&quot;)"> <span class="fa fa-plus"></span></button>' +
      '</div>' +
      '<div class="input-group-append">' +
      '<button class="btn btn-danger" type="button" onclick="deleteOption(' + (i + 1) + ',&quot;Radio&quot;)"><span class="fa fa-times"></span></button>' +
      '</div>' +
      '</div>' +
      '</div>';
  }
  '</div>' +
  '</div>';
  return html;
}
function getSwitchEl(config) {
  var html = '<div id="switch" class="input-controls">' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Label</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.label + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">Sublabel</label>' +
    '<div class="col-9">' +
    '<input type="text" value="' + config.sublabel + '" class="form-control" placeholder="Enter Label" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '</div>';
  return html;
}
function getOption(num, name,type) {
  if(type=="footer")
  return '<div class="form-group row" id="optionFooter' + num + '">' +
    '<label class="col-3 col-form-label">' + name + ' ' + num + '</label>' +
    '<div class="input-group col-9">' +
    '<input type="text" class="form-control" placeholder="Enter ' + name + ' Title">' +
    '<div class="input-group-append">' +
    '<button class="btn btn-brand " type="button" onclick = "addOption(' + num + ',&quot;' + name + '&quot,&quot;'+type+'&quot;)"> <span class="fa fa-plus" ></span></button>' +
    '</div>' +
    '<div class="input-group-append">' +
    '<button class="btn btn-danger" type="button" onclick = "deleteOption(' + num + ',&quot;' + name + '&quot,&quot;'+type+'&quot;)"><span class="fa fa-times" ></span></button>' +
    '</div>' +
    '</div>' +
    '</div>';
  return '<div class="form-group row" id="option' + num + '">' +
    '<label class="col-3 col-form-label">' + name + ' ' + num + '</label>' +
    '<div class="input-group col-9">' +
    '<input type="text" class="form-control" placeholder="Enter ' + name + ' Title">' +
    '<input type="text" class="form-control" placeholder="Enter ' + name + ' Value">' +
    '<div class="input-group-append">' +
    '<button class="btn btn-brand " type="button" onclick = "addOption(' + num + ',&quot;' + name + '&quot;)"> <span class="fa fa-plus" ></span></button>' +
    '</div>' +
    '<div class="input-group-append">' +
    '<button class="btn btn-danger" type="button" onclick = "deleteOption(' + num + ',&quot;' + name + '&quot;)"><span class="fa fa-times" ></span></button>' +
    '</div>' +
    '</div>' +
    '</div>';
}
function editOptionsAdd(num, name,type) {
  if(type=="footer"){
    var options = document.getElementById("componentOptionsFooter").children;
    for (var i = num; i < options.length; i++) {
      options[i].setAttribute("id", "optionFooter" + (i + 2));
      options[i].querySelector('label').innerHTML = name + " " + (i + 2);
      options[i].querySelector('.btn-brand').setAttribute("onclick", "addOption(" + (i + 2) + ",'" + name + "','" + type+ "')");
      options[i].querySelector('.btn-danger').setAttribute("onclick", "deleteOption(" + (i + 2) + ",'" + name + "','" + type+ "')");
    }
  }
  else{
    var options = document.getElementById("componentOptions").children;
    for (var i = num; i < options.length; i++) {
      options[i].setAttribute("id", "option" + (i + 2));
      options[i].querySelector('label').innerHTML = name + " " + (i + 2);
      options[i].querySelector('.btn-brand').setAttribute("onclick", "addOption(" + (i + 2) + ",'" + name + "')");
      options[i].querySelector('.btn-danger').setAttribute("onclick", "deleteOption(" + (i + 2) + ",'" + name + "')");
    }
  }

}

function editOptionsDelete(name,type) {
  if(type=="footer"){
    var options = document.getElementById("componentOptionsFooter").children;
    for (var i = 0; i < options.length; i++) {
      options[i].setAttribute("id", "optionFooter" + (i + 1));
      options[i].querySelector('label').innerHTML = name + " " + (i + 1);
      options[i].querySelector('.btn-brand').setAttribute("onclick", "addOption(" + (i + 1) + ",'" + name + "','" + type+ "')");
      options[i].querySelector('.btn-danger').setAttribute("onclick", "deleteOption(" + (i + 1) + ",'" + name + "','" + type+ "')");
    }
  }
  else{
    var options = document.getElementById("componentOptions").children;
    for (var i = 0; i < options.length; i++) {
      options[i].setAttribute("id", "option" + (i + 1));
      options[i].querySelector('label').innerHTML = name + " " + (i + 1);
      options[i].querySelector('.btn-brand').setAttribute("onclick", "addOption(" + (i + 1) + ",'" + name + "')");
      options[i].querySelector('.btn-danger').setAttribute("onclick", "deleteOption(" + (i + 1) + ",'" + name + "')");
    }
  }
}
function addOption(num, name,type) {
  if(type=="footer"){
    editOptionsAdd(num, name,type)
    document.getElementById("optionFooter" + num).insertAdjacentHTML("afterend", getOption(num + 1, name,type));
  }
  else{
    editOptionsAdd(num, name)
    document.getElementById("option" + num).insertAdjacentHTML("afterend", getOption(num + 1, name));
  }
}
function deleteOption(num, name,type) {
if(type=="footer"){
  var options = document.querySelector("#componentOptionsFooter").children
  var element = document.getElementById("optionFooter" + num);
}
else{
  var options = document.querySelector("#componentOptions").children
  var element = document.getElementById("option" + num);
}
if(options.length!=1){
  element.parentElement.removeChild(element);
  editOptionsDelete(name,type);
}
}

function changeType(config) {
  if (!config) {
    value = document.getElementById("selectType").value;
    config = defaultConfiguration[value]
  } else {
    value = config.type;
    document.getElementById("selectType").value = config.type;
  }
  switch (value) {
    case "text":
      document.getElementById("controls").innerHTML = getText(config);
      break;
    case "textarea":
      document.getElementById("controls").innerHTML = getTextarea(config);
      break;
    case "number":
      document.getElementById("controls").innerHTML = getNumber(config);
      break;
    case "color":
      document.getElementById("controls").innerHTML = getColor(config);
      break;
    case "select":
      document.getElementById("controls").innerHTML = getSelect(config);
      break;
    case "range":
      document.getElementById("controls").innerHTML = getRange(config);
      break;
    case "checkbox":
      document.getElementById("controls").innerHTML = getCheckbox(config);
      break;
    case "radio":
      document.getElementById("controls").innerHTML = getRadio(config);
      break;
    case "switch":
      document.getElementById("controls").innerHTML = getSwitchEl(config);
      break;
    case "inputgroup":
      document.getElementById("controls").innerHTML = getInputGroup(config);
      break;
    default:
      document.getElementById("controls").innerHTML = "";

  }
}

function changeRangeLimits() {
  var value = document.getElementById("rangeLimitsType").value;
  var element = document.getElementById("rangeValues")
  if (value == "one") {
    if (element.children.length == 2) {
      element.removeChild(element.children[1]);
    }
  } else {
    if (element.children.length == 1) {
      element.innerHTML += rangeValue2;
    }
  }
}
function createText(formData) {
  var readonly = formData["readonly"] ? " readonly " : ""
  var disabled = formData["disabled"] ? " disabled " : ""
  var html =
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
    '<div class="col-9">' +
    '<input type="text" class="form-control" placeholder="' + formData["placeholder"] + '"' + readonly + disabled + ' aria-describedby="basic-addon1">' +
    '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</div>' +
    '</div>';
  return html;
}
function createTextArea(formData) {
  var readonly = formData["readonly"] ? "readonly" : ""
  var disabled = formData["disabled"] ? "disabled" : ""
  var html =
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label" for="exampleTextarea">' + formData["label"] + '</label>' +
    '<div class="col-9">' +
    '<textarea class="form-control" id="exampleTextarea" rows="3" placeholder="' + formData["placeholder"] + '"' + readonly + disabled + ' aria-describedby="basic-addon1"></textarea>' +
    '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</div>' +
    '</div>'
  return html;
}
function createSelect(formData) {
  var html =
    '<div class="form-group row">' +
    '<label for="selectType" class=" col-3 col-form-label">' + formData["label"] + '</label>' +
    '<div class="col-9">';
  if (formData["bootstrap"])
    html += '<select class="form-control kt-selectpicker" id="selectType">';
  else
    html += '<select class="form-control " id="selectType">';
  for (var i = 0; i < formData["options"].length; i++) {
    html += '<option value="' + formData["options"][i].value + '">' + formData["options"][i].option + '</option>';
  }
  html += '</select>' +
    '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</div>' +
    '</div>';
  return html;
}
function createNumber(formData) {
  var readonly = formData["readonly"] ? " readonly " : ""
  var disabled = formData["disabled"] ? " disabled " : ""
  var html =
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
    '<div class=" col-9">';
  if (formData["value"] != "")
    html += '<input type="number" class="form-control" value="' + formData["value"] + '" placeholder="' + formData["placeholder"] + '"' + readonly + disabled + ' aria-describedby="basic-addon1">'
  else
    html += '<input type="number" class="form-control"  placeholder="' + formData["placeholder"] + '"' + readonly + disabled + ' aria-describedby="basic-addon1">'
  html += '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</div>' +
    '</div>'
  return html;
}
function createColor(formData) {
  var readonly = formData["readonly"] ? " readonly " : ""
  var disabled = formData["disabled"] ? " disabled " : ""
  var html =
    '<div class="form-group row">' +
    '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
    '<div class="col-9">' +
    '<div class=" col-3">' +
    '<input type="color" class="form-control" value="' + formData["value"] + '" ' + readonly + disabled + ' aria-describedby="basic-addon1">' +
    '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</div>' +
    '</div>' +
    '</div>'
  return html;
}
function createInputGroup(formData) {
  var html = '<div class="form-group row">' +
    '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
    '<div class="input-group col-9">'
  if (formData["left"])
    html += '<div class="input-group-prepend">' +
    '<button class="btn btn-success" type="button">' + formData["left"] + '</button>' +
    '</div>';
  html += '<input type="text" class="form-control" placeholder="' + formData["placeholder"] + '">';
  if (formData["right"])
    html += '<div class="input-group-append">' +
    '<button class="btn btn-warning" type="button">' + formData["right"] + '</button>' +
    '</div>';

  html += '</div>' +

    '</div>';
  return html;
}
function createRange(formData) {
  if (formData["limits"] == "two") {
    script = '!function() {' +
      'var e = document.getElementById("kt_nouislider_' + activeComponent + '");' +
      'noUiSlider.create(e, {' +
      'start: [' +
      '' + formData["value 1"] + ', ' + formData["value 2"] + '' +
      '],' +
      'step : ' + formData["step"] + ',' +
      'connect: !0,' +
      'direction: "ltr",' +
      'tooltips: [' +
      'wNumb({decimals: ' + formData["step"].countDecimals() + '}),' +
      'wNumb({decimals: ' + formData["step"].countDecimals() + '})' +
      '],' +
      'range: {' +
      'min: ' + formData["min"] + ',' +
      'max: ' + formData["max"] + '' +
      '}' +
      '});' +
      '}()'
  } else if (formData["limits"] == "one") {
    script =
      '!function() {' +
      'var e = document.getElementById("kt_nouislider_' + activeComponent + '");' +
      'noUiSlider.create(e, {' +
      'start: ' + formData["value 1"] + ',' +
      'step : ' + formData["step"] + ',' +
      'connect: [' +
      '!0,' +
      '!1' +
      '],' +
      'direction: "ltr",' +
      'tooltips: wNumb({decimals: ' + formData["step"].countDecimals() + '}),' +
      'range: {' +
      'min: ' + formData["min"] + ',' +
      'max: ' + formData["max"] + '' +
      '}' +
      '});' +
      '}()';
  }
  if (script)
    slidersJSFunctions[activeComponent] = script;
  runScript()
  var html = '<div class="form-group row" onload="">' +
    '<label class="col-form-label col-3">' + formData["label"] + '</label>' +
    '<div class="col-9">' +
    '<div id="kt_nouislider_' + activeComponent + '" class="kt-nouislider"></div>' +
    '<br>' +
    '<div class="form-text text-muted">' + formData["sublabel"] + '</div>' +
    '</div>' +
    '</div>';
  return html
}
function updateRangeAdd(num) {
  var uiSliders = document.querySelectorAll(".kt-nouislider")
  if (uiSliders) {
    for (var i = 0; i < uiSliders.length; i++) {
      var id = uiSliders[i].id;
      var idNumber = Number(id.slice(14));
      if (idNumber > num)
        uiSliders[i].id = "kt_nouislider_" + (idNumber + 1);
    }
  }
  slidersJSFunctions.splice(num + 1, 0, undefined);
  for (var i = num; i < slidersJSFunctions.length; i++) {
    if (slidersJSFunctions[i]) {
      var number = Number(/(?!x)\d+/.exec(slidersJSFunctions[i])[0]);
      slidersJSFunctions[i] = slidersJSFunctions[i].replace("kt_nouislider_" + number, "kt_nouislider_" + i);
    }
  }

}
function updateRangeDelete(num) {
  var uiSliders = document.querySelectorAll(".kt-nouislider")
  if (uiSliders) {
    for (var i = 0; i < uiSliders.length; i++) {
      var id = uiSliders[i].id;
      var idNumber = Number(id.slice(14));
      if (idNumber > num)
        uiSliders[i].id = "kt_nouislider_" + (idNumber - 1);
    }
  }
  slidersJSFunctions.splice(num, 1);
  for (var i = num; i < slidersJSFunctions.length; i++) {
    if (slidersJSFunctions[i]) {
      var number = Number(/(?!x)\d+/.exec(slidersJSFunctions[i])[0]);
      slidersJSFunctions[i] = slidersJSFunctions[i].replace("kt_nouislider_" + number, "kt_nouislider_" + i);
    }
  }
}
function runScript() {
  var lastIndex;
  for (var i = 0; i < slidersJSFunctions.length; i++) {
    if (slidersJSFunctions[i])
      lastIndex = i;
  }
  if (KTnoUiSliderDemos)
    if (KTnoUiSliderDemos.init)
      delete KTnoUiSliderDemos.init;
  var script =
    'KTnoUiSliderDemos = {' +
    'init: function() {';
  for (var i = 0; i <= lastIndex; i++) {
    if (slidersJSFunctions[i]) {
      if (document.querySelector("#kt_nouislider_" + i)) {
        if (document.querySelector("#kt_nouislider_" + i).noUiSlider) {
          document.querySelector("#kt_nouislider_" + i).noUiSlider.destroy();
        }
      }
      if (slidersJSFunctions[i]) {
        script += slidersJSFunctions[i];
        if (i < lastIndex)
          script += ","
      }

    }
  }
  script += '}' +
    '};' +
    'jQuery(document).ready(function() {' +
    'KTnoUiSliderDemos.init()' +
    '});';
  eval(script);
  return script;
}
function createRadio(formData) {
  var html = "";
  if (formData["orientation"] == "horizontal") {
    var html = '<div class="form-group row">' +
      '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
      '<div class="col-9">' +
      '<div class="kt-radio-inline">';
    for (var i = 0; i < formData["options"].length; i++) {
      html += '<label class="kt-radio">' +
        '<input type="radio" name="radio" value=' + formData["options"][i].value + '>' + formData["options"][i].option +
        '<span></span>' +
        '</label>';
    }
  } else if (formData["orientation"] == "vertical") {
    var html = '<div class="form-group row">' +
      '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
      '<div class="col-9">' +
      '<div class="kt-radio-list">';
    for (var i = 0; i < formData["options"].length; i++) {
      html += '<label class="kt-radio">' +
        '<input type="radio" name="radio" value=' + formData["options"][i].value + '>' + formData["options"][i].option +
        '<span></span>' +
        '</label>';
    }
  }
  html += '</div>' +
    '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</div>' +
    '</div>';
  return html;
}
function createCheckbox(formData) {
  var html = "";
  if (formData["orientation"] == "horizontal") {
    html = '<div class="form-group row">' +
      '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
      '<div class="col-9">' +
      '<div class="kt-checkbox-inline">';
    for (var i = 0; i < formData["options"].length; i++) {
      html += '<label class="kt-checkbox">' +
        '<input type="checkbox" value=' + formData["options"][i].value + '>' + formData["options"][i].option +
        '<span></span>' +
        '</label>';
    }
  } else if (formData["orientation"] == "vertical") {
    html = '<div class="form-group row">' +
      '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
      '<div class="col-9">' +
      '<div class="kt-checkbox-list">';
    for (var i = 0; i < formData["options"].length; i++) {
      html += '<label class="kt-checkbox">' +
        '<input type="checkbox" value=' + formData["options"][i].value + '>' + formData["options"][i].option +
        '<span></span>' +
        '</label>';
    }
  }
  html += '</div>' +
    '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</div>' +
    '</div>';
  return html;
}
function createSwitch(formData) {
  var html = '<div class="form-group row">' +
    '<label class="col-3 col-form-label">' + formData["label"] + '</label>' +
    '<div class="col-9">' +
    '<span class="kt-switch">' +
    '<label>' +
    '<input type="checkbox">' +
    '<span></span>' +
    '</label>' +
    '<span class="form-text text-muted">' + formData["sublabel"] + '</span>' +
    '</span>' +
    '</div>' +
    '</div>';
  return html;
}

function createComponent(formData) {
  switch (formData.type) {
    case "text":
      document.querySelector("#component" + activeComponent).innerHTML = createText(formData);
      break;
    case "textarea":
      document.querySelector("#component" + activeComponent).innerHTML = createTextArea(formData);
      break;
    case "number":
      document.querySelector("#component" + activeComponent).innerHTML = createNumber(formData);
      break;
    case "color":
      document.querySelector("#component" + activeComponent).innerHTML = createColor(formData);
      break;
    case "select":
      document.querySelector("#component" + activeComponent).innerHTML = createSelect(formData);
      $(".kt-selectpicker").selectpicker()
      break;
    case "range":
      document.querySelector("#component" + activeComponent).innerHTML = createRange(formData);
      break;
    case "checkbox":
      document.querySelector("#component" + activeComponent).innerHTML = createCheckbox(formData);
      break;
    case "radio":
      document.querySelector("#component" + activeComponent).innerHTML = createRadio(formData);
      break;
    case "switch":
      document.querySelector("#component" + activeComponent).innerHTML = createSwitch(formData);
      break;
    case "inputgroup":
      document.querySelector("#component" + activeComponent).innerHTML = createInputGroup(formData);
      break;
  }

}
function createFooter(){
  var align = document.querySelectorAll("input[name='radioFooter']:checked")[0].value;
  var buttons = document.querySelector("#componentOptionsFooter").querySelectorAll("input[type='text']");
  var buttonsText = [];
  var proceed = false;
  for(var i=0;i<buttons.length;i++){
    buttonsText[i] = buttons[i].value;
    if(buttonsText[i])
    proceed = true;
  }
  if(proceed){
  var html = '<div class="kt-portlet__foot">'+
					'<div class="kt-form__actions" align='+align+'>';
          for(var i=0;i<buttonsText.length;i++){
            if(buttonsText[i]){
              html += '<button class="footerButtons btn btn-brand">'+buttonsText[i]+'</button>';
            }
          }
		html += '</div>'+
				'</div>';
  document.querySelector(".buttonsFooter").innerHTML = html;
  }
  else{
    if(document.querySelector(".buttonsFooter").children[0])
    document.querySelector(".buttonsFooter").removeChild(document.querySelector(".buttonsFooter").children[0])
  }


}
function getOutputEditOptions(num) {
  return '<div class="" align="right" style="margin-bottom:5px;margin-top:5px;margin-right:5px;">' +
    '<a class="btn btn-bold btn-sm btn-label-brand" onclick= "addComponent(' + num + ')">' +
    '<i class="la la-plus"></i> ' +
    '</a>' +
    '<a class="btn btn-bold btn-sm btn-label-brand" onclick= "editComponent(' + num + ')">' +
    '<i class="la la-edit"></i> ' +
    '</a>' +
    '<a class="btn btn-bold btn-sm btn-label-brand" onclick= "deleteComponent(' + num + ')">' +
    '<i class="la la-remove"></i>' +
    '</a>' +
    '</div>'
}
function addOutputEditOptions(num) {
  var components = document.querySelector(".output").children;
  for (var i = 0; i < components.length; i++) {
    if (components[i].children.length == 2)
      components[i].removeChild(components[i].children[0]);
  }
  var el = document.querySelector("#component" + num);
  if (el.children.length == 1) {
    el.insertAdjacentHTML("afterbegin", getOutputEditOptions(num));
  }

}
function removeOutputEditOptions(num) {
  var components = document.querySelector(".output").children;
  for (var i = 0; i < components.length; i++) {
    if (components[i].children.length == 2)
      components[i].removeChild(components[i].children[0]);
  }
}

function getComponent(num) {
  return '<div class="outputComponent" id="component' + num + '" onmouseenter = "addOutputEditOptions(' + num + ');" onmouseleave = "removeOutputEditOptions(' + num + ');">' +
    '<div class="row form-group">' +
    '<label class="col-3 col-form-label"></label>' +
    '<div class="col-9">' +
    '<input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">' +
    '</div>' +
    '</div>' +
    '</div>';
}
function addComponent(num) {
  editComponentsAdd(num);
  componentConfiguration.splice(num, 0, defaultConfiguration.text)
  document.getElementById("component" + num).insertAdjacentHTML("afterend", getComponent(num + 1));
  if (activeComponent > num) {
    editComponent(activeComponent + 1)
  }
  updateRangeAdd(num);
}
function editComponent(num) {
  document.querySelector("#component" + activeComponent).style.borderLeft = "";
  document.querySelector("#component" + activeComponent).style.paddingLeft = "";
  activeComponent = num;
  document.querySelector("#component" + activeComponent).style.borderLeft = "5px solid #591df1";
  document.querySelector("#component" + activeComponent).style.paddingLeft = "10px";
  changeType(componentConfiguration[activeComponent - 1]);
}
function deleteComponent(num) {
  var components = document.querySelectorAll(".outputComponent");
  if(components.length!=1){
    var element = document.getElementById("component" + num);
    componentConfiguration.splice(num - 1, 1)
    element.parentElement.removeChild(element);
    editComponentDelete();
    if (activeComponent == num) {
    /**EERRRRRROORRRR********************************************************************/
      editComponent(num)
    } else if (activeComponent > num) {
      editComponent(activeComponent - 1)
    }
    updateRangeDelete(num);
  }

}
function editComponentsAdd(num) {
  var components = document.querySelector(".output").children;
  for (var i = num; i < components.length; i++) {
    components[i].setAttribute("id", "component" + (i + 2));
    components[i].setAttribute("onmouseenter", "addOutputEditOptions(" + (i + 2) + ")");
    components[i].setAttribute("onmouseleave", "removeOutputEditOptions(" + (i + 2) + ")");
  }
}
function editComponentDelete() {
  var components = document.querySelector(".output").children;
  for (var i = 0; i < components.length; i++) {
    components[i].setAttribute("id", "component" + (i + 1));
    components[i].setAttribute("onmouseenter", "addOutputEditOptions(" + (i + 1) + ")");
    components[i].setAttribute("onmouseleave", "removeOutputEditOptions(" + (i + 1) + ")");
  }

}

function readFormData(form) {
  var inputs = form.querySelectorAll("#componentOptions .input-group,.input-controls>.form-group input,select,#rangeValues input")
  var labels = form.querySelectorAll("label.col-3");
  var formData = {};
  formData["options"] = [];
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "checkbox" || inputs[i].type == "radio") {
      formData[labels[i].innerText.toLowerCase()] = inputs[i].checked;
    } else if (inputs[i].classList.contains("input-group")) {
      var group = inputs[i].querySelectorAll("input");
      formData["options"].push({
        option: group[0].value,
        value: group[1].value
      });
    } else if (inputs[i].type == "number") {
      formData[labels[i].innerText.toLowerCase()] = Number(inputs[i].value);
    } else {
      formData[labels[i].innerText.toLowerCase()] = inputs[i].value;
    }
  }
  componentConfiguration[activeComponent - 1] = formData;
  createComponent(formData);
}

function generateCode() {
  var htmlContainer = document.querySelector(".language-html");
  var jsContainer = document.querySelector(".language-js");
  var components = document.querySelectorAll(".outputComponent");
  var selectExists = document.querySelector(".kt-selectpicker");
  var rangeExists = document.querySelector(".kt-nouislider");
  var html = "";
  var script = "";
  html += '<div class="kt-portlet">'
  html += document.querySelectorAll(".kt-portlet__head")[1].outerHTML;
    html += '<form class="kt-form">'
    html+= '<div class="kt-portlet__body">'
  for (var i = 0; i < components.length; i++) {
    if (components[i].children[0].querySelector(".col-9").children[0].id.slice(0, 13) == "kt_nouislider") {
      var node = components[i].children[0].cloneNode(true);
      var child = node.querySelector(".col-9").children[0]
      child.removeChild(child.children[0]);
      child.className = "kt-nouislider"
      html += node.outerHTML;
    } else if (components[i].children[0].querySelector(".col-9").children[0].classList[0] == "dropdown") {
      var node = components[i].children[0].cloneNode(true);
      var node2 = node.querySelector(".col-9")
      var select = node2.querySelector("select").cloneNode(true);
      select.removeAttribute("tabindex")
      node2.removeChild(node2.children[0]);
      node2.innerHTML = select.outerHTML + node2.innerHTML;
      html += node.outerHTML;
    } else {
      html += components[i].children[0].outerHTML;
    }
  }
  html+='</div>'
  var footer = document.querySelector(".buttonsFooter").innerHTML;
  if(footer){
    html += footer;
    }
  html+='</form>'
  html += '</div>'
  html = html_beautify(html, {
    'indent_inner_html': false,
    'indent_size': 2,
    'indent_char': ' ',
    'brace_style': 'expand',
    'indent_handlebars': false,
    'extra_liners': ['/html']
  });;

  html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  htmlContainer.innerHTML = html;
  if (rangeExists){
    console.log("*")
    script = runScript();
  }

  if (selectExists)
    script += '$(".kt-selectpicker").selectpicker();'

  script = js_beautify(script);
  jsContainer.innerHTML = script;
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}
function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", text);

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
function copyHTML(btn) {
  copyToClipboard(document.querySelector(".lang-html").innerText);
  btn.innerText = "Text Copied!"
  btn.className = "btn btn-secondary"
  setTimeout(function() {
    btn.innerText = "Copy Code";
    btn.className = "btn btn-brand"
  }, 500);
}
function copyJS(btn) {
  copyToClipboard(document.querySelector(".language-js").innerText);
  btn.innerText = "Text Copied!"
  btn.className = "btn btn-secondary"
  setTimeout(function() {
    btn.innerText = "Copy Code";
    btn.className = "btn btn-brand"
  }, 500);
}
