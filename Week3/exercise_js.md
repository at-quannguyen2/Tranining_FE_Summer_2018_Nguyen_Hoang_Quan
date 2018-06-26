# HTML + Javascript Exercise

##### What are the differences between a variable that is: `null`, `undefined`?
- **Undefined** có nghĩa là không xác định. Trong javascript, khi bạn khai báo một biến nhưng chưa gán giá trị cho nó, giá trị của biến đó sẽ là **undefined**.
- **Null** có nghĩa là giá trị rỗng hoặc giá trị không tồn tại, nó có thể được sử dụng để gán cho một biến như là một đại diện không có giá trị.

##### What is `use strict`? what are the advantages and disadvantages to using it?

**Strict** hiểu đơn giản theo nghĩa tiếng Việt là "nghiêm ngặt, nghiêm khắc". **Strict Mode** là một quy mẫu nghiêm khắc của Javascript. Nếu như coi việc viết code bình thường là Normal Mode, thì **Strict Mode** sẽ có thêm nhiều quy định khác so với Normal Mode. Việc đó khiến cho một thao tác vốn bình thường có thể chạy ngon lành trở nên lỗi, và throw ra errors.

Nhìn chung, Strict được tạo ra nhằm:
- Ngăn chặn sử dụng, và throw errors khi người lập trình thực hiện những xử lý được coi là unsafe, những xử lý mà có thể là ngoài ý muốn.
- Vô hiệu hoá các tính năng có thể gây nhầm lẫn, hoặc không nên được sử dụng.
- Ngăn chặn sử dụng một số từ mà có thể sẽ được sử dụng làm keywork trong tương lai.

##### What are the differences between `==` and `===`? Write an example for each case (if any)?
- `==` so sánh giá trị của hai đối tượng nào đó.
- `===` so sánh giá trị và cả kiểu dữ liệu của đối tượng đó.

Vidu : 

```
var a = 1;
var b = true;
if(a == b) // true
if(a === b) // false
```
##### What is different between declaration: `var`, `const` and `let`?
##### var, let và const trong ES6 :
- `const` dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.
- `let` tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó
- `var` tạo ra một biến có phạm vi truy cập xuyên suốt function chứa.
