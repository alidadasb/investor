self.addEventListener('message', function (data) {
    console.log('got it boy ', data);

    self.postMessage('test')
});