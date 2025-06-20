// lap chuoi san pham
let products = ["Iphone 16promax", "Iphone 16pro", "Iphone 16"]

// ham hien thi ra man hinh
function displayProducts() {
    // hien thi so san phan
    document.getElementById("countProduct").innerHTML ='<b style="color: red">' + products.length + 'dòng sản phẩm</b>';
    // hien thi du lieu
    const body = document.getElementById("listProducts");
    body.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        body.innerHTML += `<tr>
<td>${products[i]}</td>
<td><button onclick="editProduct(${i})">Edit</td>
<td><button onclick="deleteProduct(${i})">Delete</td>
<td></td>
</tr>`
    }
}
displayProducts();

    // ham them san pham
    function createProduct() {
        products.push(document.getElementById("tenSanPham").value);
        displayProducts();
    }
    // ham sua san pham
    function editProduct(index) { // index: vi tri trong mang
        products[index] = prompt("Nhập lại tên cần sửa: " + products[index]);
        displayProducts();
    }

    // ham xoa san pham
    function deleteProduct(index) {
        products.splice(index, 1);
        displayProducts();
    }