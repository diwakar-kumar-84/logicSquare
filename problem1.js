function findCaliforniaCafes(string) {
  var result = [];
  // You can store the given arrays in 2 internal variables
  const cafes = [
    {
      name: "Bazaar Cafe",
      place_id: "kjk234g4gcvfx8usg1l33pi",
    },
    {
      name: "Ashley's Cafe",
      place_id: "12hydbdf76sljfts87sbfis",
    },
    {
      name: "Avenue Cafe",
      place_id: "skjd86svvfdrsv55svbvf3f",
    },
    {
      name: "Hi-Lo Cafe",
      place_id: "mjdhgetr4pojfyts22fzfsh",
    },
    {
      name: "California Chicken Cafe",
      place_id: "12hydbdf76sljfts87sbfis",
    },
    {
      name: "Avenue Bakery Cafe",
      place_id: "jahgde7wgdiau8ewsahgosd",
    },
    {
      name: "Philz Coffee",
      place_id: "urhw3837ehalod7w02b7835",
    },
  ];
  const places = [
    {
      id: "jahgde7wgdiau8ewsahgosd",
      street_no: "60H",
      locality: "Solomos Island Road",
      postal_code: "20688",
      lat: "36.7783 N",
      long: "119.4179 W",
    },
    {
      id: "12hydbdf76sljfts87sbfis",
      street_no: "1B",
      locality: "Macarthur Blvd",
      postal_code: "20619",
      lat: "38.1781 N",
      long: "118.4171 W",
    },
    {
      id: "kjk234g4gcvfx8usg1l33pi",
      street_no: "45250",
      locality: "Worth Avenue, Unit A",
      postal_code: "20619",
      lat: "36.1152",
      long: "117.521",
    },
    {
      id: "saswe3s6yydtdr52hsd72yst",
      street_no: "1X",
      locality: "Macarthur Blvd",
      postal_code: "20687",
      lat: "36.7783",
      long: "119.4179",
    },
    {
      id: "skjd86svvfdrsv55svbvf3f",
      street_no: "7S",
      locality: "Three Notch Road",
      postal_code: "20619",
      lat: "36.83",
      long: "119.6",
    },
    {
      id: "mjdhgetr4pojfyts22fzfsh",
      street_no: "22803",
      locality: "Gunston Dr Lexington Park",
      postal_code: "20688",
      lat: "35.7788",
      long: "119.979",
    },
    {
      id: "urhw3837ehalod7w02b7835",
      street_no: "225",
      locality: "Macarthur Blvd",
      postal_code: "20687",
      lat: "35.77813",
      long: "119.41791",
    },
  ];
  //  Your code goes here
  for (var i = 0; i < cafes.length; i++) {
    if (cafes[i].name.toLowerCase().includes(string.toLowerCase())) {
      for (var j = 0; j < places.length; j++) {
        if (places[j].id == cafes[i].place_id) {
          var obj = {
            name: cafes[i].name,
            street_no: places[j].street_no,
            locality: places[j].locality,
            postal_code: places[j].postal_code,
            lat: places[j].lat,
            long: places[j].long,
          };

          result.push(obj);
        }
      }
    }
  }
  return result;
}
console.log(findCaliforniaCafes("Avenue"));
