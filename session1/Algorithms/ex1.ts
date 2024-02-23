// Viết hàm nhận vào một chuỗi và đếm số lần xuất hiện của các ký tự trong chuỗi đó
// VD: "hello" => { h: 1, e: 1, l: 2, o: 1}

type Count = { [key: string]: number };
const charCount = (str: string): Count => {
  // 1. tạo đối tượng để hứng kết quả trả về
  const res: Count = {};

  // 2. duyệt qua toàn bộ ký tự trong chuỗi
  for (let i = 0; i < str.length; i++) {
    if (!res[str[i]]) {
      // 2.1. nếu ký tự chưa tồn tại trong đối tượng trả về
      //  - thiết lập 1 key mới trong đối tượng trả về
      //  - set value = 1
      res[str[i]] = 1;
    } else {
      // 2.2 nếu ký tự đã tồn tại
      //  - set giá trị của key đó trong res tăng lên 1
      res[str[i]] += 1;
    }
  }

  for (let key of str) {
    res[key] = !!res[key] ? (res[key] += 1) : 1;
  }

  return res;
};

console.log(charCount("hello"));
