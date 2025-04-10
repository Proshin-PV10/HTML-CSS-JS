self.onmessage = function(evt) {
    var data = [];
    for (var i = 0; i < 1500; i++) {
        data[i] = [];
        for (var j = 0; j < 1500; j++) {
            data[i][j] = Math.random();
        }
    }
    self.postMessage(data);
    data = null; 
};
