// Viết hàm nhận vào một chuỗi và đếm số lần xuất hiện của các ký tự trong chuỗi đó
// VD: "hello" => { h: 1, e: 1, l: 2, o: 1}
var charCount = function (str) {
    // 1. tạo đối tượng để hứng kết quả trả về
    var res = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var key = str_1[_i];
        res[key] = !!res[key] ? (res[key] += 1) : 1;
    }
    return res;
};
console.log(charCount("hello"));
