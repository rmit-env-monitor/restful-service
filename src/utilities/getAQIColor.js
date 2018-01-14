module.exports = air => {
  if (air >= 0 && air <= 50) {
    return "green";
  } else if (air >= 51 && air <= 100) {
    return "#fec60d";
  } else if (air >= 101 && air <= 150) {
    return "orange";
  } else if (air >= 151 && air <= 200) {
    return "red";
  } else if (air >= 201 && air <= 300) {
    return "purple";
  } else {
    return "maroon";
  }
};
