var today = moment().format(h);
var time = moment();

if (time < today) {
  colorPast;
} else if (time > today) {
  colorFuture;
} else if (time === today) {
  colorPresent;
}