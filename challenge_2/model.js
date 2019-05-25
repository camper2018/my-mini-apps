module.exports.csvReportGernerator = (obj)=> {
  var csvReport = [];
  var fields = Object.keys(obj);
  var values = [];
   for (var key in obj) {
      values.push(obj[key]);
  }
  var index = fields.indexOf('children');
  fields.splice(index, 1);
  values.splice(index, 1);
  values = values.join(',');

  function traverseChildren(childObj) {
    for (var key in childObj){
      if (!fields.includes(key) && key !== 'children') {
        fields.push(key);
      }
    }
    var arr = [];
    var keys = Object.keys(childObj);
    var index = 0;
    while (index < fields.length) {
      if (fields[index] === keys[index]) {
        arr.push(childObj[keys[index]]);
      } else {
        arr.push(',');
       }
     index++;
    }
    values+= '\n';
    values+= arr.join(',')
    if (childObj.children.length > 0) {
      childObj.children.forEach(function(child) {
         traverseChildren(child);
      });
    }

  }
  if (obj.children.length > 0) {
    obj.children.forEach(function(child) {
      traverseChildren(child);
    });
  }
  fields = fields.join(',');
  csvReport.push(fields);
  csvReport.push(values);
  return csvReport.join('\n');
};