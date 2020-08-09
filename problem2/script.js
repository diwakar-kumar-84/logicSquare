var result = [];
//search
function search(string) {
  var arr = [];
  for (var k = 0; k < result.length; k++) {
    if (result[k].name.toLowerCase().includes(string.toLowerCase())) {
      var obj = {
        name: result[k].name,
        street_no: result[k].street_no,
        locality: result[k].locality,
        postal_code: result[k].postal_code,
        lat: result[k].lat,
        long: result[k].long,
      };
      arr.push(obj);
    }
  }
  newrow(arr);
}
//promises
Promise.all([
  fetch(
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json"
  ).then((response) => response.json()),

  fetch(
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json"
  ).then((response) => response.json()),
])

  .then((res) => {
    for (var i = 0; i < res[0].cafes.length; i++) {
      for (var j = 0; j < res[1].places.length; j++) {
        if (res[1].places[j].id == res[0].cafes[i].location_id) {
          var obj = {
            name: res[0].cafes[i].name,
            street_no: res[1].places[j].street_no,
            locality: res[1].places[j].locality,
            postal_code: res[1].places[j].postal_code,
            lat: res[1].places[j].lat,
            long: res[1].places[j].long,
          };
          result.push(obj);
        }
      }
    }
    newrow(result);
  })
  .catch((err) => {
    console.log(err);
  });

function newrow(data) {
  for (var l = document.getElementsByTagName("tr").length; l > 2; l--) {
    console.log(l);
    document.getElementById("tbody").deleteRow(1);
  }

  var table = document.getElementsByTagName("table")[0];
  for (var k = 0; k < data.length; k++) {
    var row = table.insertRow();
    if (k == 0) {
      console.log(k);
      document.getElementById("tbody").deleteRow(0);
    }
    var sn = row.insertCell(0);
    var name = row.insertCell(1);
    var address = row.insertCell(2);
    var code = row.insertCell(3);
    var lat = row.insertCell(4);
    var long = row.insertCell(5);

    sn.classList.add("column1");
    name.classList.add("column2");
    address.classList.add("column3");
    code.classList.add("column4");
    lat.classList.add("column5");
    long.classList.add("column6");

    sn.innerHTML = k + 1;
    name.innerHTML = data[k].name;
    address.innerHTML = data[k].street_no + " " + data[k].locality;
    code.innerHTML = data[k].postal_code;
    lat.innerHTML = data[k].lat;
    long.innerHTML = data[k].long;
  }
}
