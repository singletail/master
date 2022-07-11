var ta; // text box on page
var ws;

document.onreadystatechange = function () {
  switch (document.readyState) {
    case 'loading':
      console.log('Loading');
      break;
    case 'interactive':
      console.log('Interactive');
      break;
    case 'complete':
      console.log('Complete');
      setup();
      break;
  }
};

function setup() {
  ta = document.getElementById('ta');
  clear();
  out('O Hai!');
  wsCreate();
  //console.log("my object: %o", document.body.style);
}

function clear() {
  ta.value = '';
}

function out(output) {
  ta.value += output;
  console.log(output);
}

function wsCreate() {
  ws = new WebSocket('wss://scotty.nyc/ws');
  ws.onerror = function (error) {
    out('error ' + error.message);
    console.log('%o', error);
  };
  ws.onreadystatechange = function (event) {
    wsStateChange();
  };
  ws.onopen = function (event) {
    wsConnected();
  };
  ws.onmessage = function (event) {
    out(event.data);
  };
}

function wsStateChange() {
  var state = 'None';
  switch (ws.readyState) {
    case 0:
      state = 'CONNECTING';
      break;
    case 1:
      state = 'OPEN';
      break;
    case 2:
      state = 'CLOSING';
      break;
    case 3:
      state = 'CLOSED';
      break;
  }
  out('WS State: ' + state);
}

function wsConnected() {
  ws.send('Message from browser to server');
}

function fp() {
  const fpPromise = import('https://scotty.nyc/js/esm.min.js').then(
    (FingerprintJS) => FingerprintJS.load()
  );
  fpPromise
    .then((fp) => fp.get())
    .then((result) => {
      const visitorId = result.visitorId;
      return visitorId;
    });
}

function getBrowser() {
  var b = 'Unknown';
  if ('-webkit-app-region' in document.body.style) {
    b = 'Chrome';
  } else if ('-moz-appearance' in document.body.style) {
    b = 'Firefox';
  } else if ('-apple-pay-button-style' in document.body.style) {
    b = 'Safari';
  } else if ('-webkit-touch-callout' in document.body.style) {
    b = 'iOS';
  } else if ('-moz-osx-font-smoothing' in document.body.style) {
    b = 'Mac Firefox';
  }
  return b;
}
