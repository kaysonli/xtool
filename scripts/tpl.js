require(['./beautify'], function(beautify) {
    function repalceWithComma(text) {
        var parts = text.split('');
        var result = [],
            first = -1,
            last = -1;
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] == ' ' && last == -1) {
                first = i;
            } else {
                last = i;
            }
        }
        if (parts[i - 1] != " ") {
            ++last;
        }
        parts.splice(first + 1, 0, '\'');
        parts.splice(last + 1, 0, '\'');
        return parts.join('');
    }

    function convert(text) {
        var input = beautify.beautify(text);
        var arr = input.split('\n');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = ["'", arr[i], "',"].join('');
        }
        --i;
        arr[i] = arr[i].slice(0, arr[i].length -1);
        var output = '[' + arr.join('\n') + '].join(\'\');';
        return output;
    }

    var source = document.getElementById('source'),
        target = document.getElementById('target'),
        btnConvert = document.getElementById('btnConvert');
    btnConvert.addEventListener('click', function() {
        var output = convert(source.value);
        target.value = output;
    });

});
