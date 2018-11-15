import moment from "moment";
const dateFormat = require("dateformat");
export function roundofftime(article) {
  const today = new Date();
  const datee = dateFormat(today, "yyyy-m-d") + " " + article.read_time;
  const m = moment(datee);
  const roundUp = m.second() || m.millisecond()
    ? m.add(1, "minute").startOf("minute")
    : m.startOf("minute");
  return roundUp;
}
