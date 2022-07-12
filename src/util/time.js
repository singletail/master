function sTime() {
  let d = new Date();
  let dh = d.getHours();
  let dm = d.getMinutes() < 10 ? '0' : '' + d.getMinutes();
  let ds = d.getSeconds() < 10 ? '0' : '' + d.getSeconds();
  let dt = `[${dh}:${dm}:${ds}]`;
  return dt;
}

module.exports = sTime;
