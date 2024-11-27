let aInput = document.getElementById("a");
let bInput = document.getElementById("b");
let cInput = document.getElementById("c");
let text = document.getElementById("results");
let button = document.getElementById("submit");

function resulter() {

    // ตรวจสอบค่าของ a, b, c ที่ป้อนเข้ามา
    let a = parseFloat(aInput.value); // ใช้ parseFloat แทน parseInt เพื่อรองรับตัวเลขที่มีทศนิยม
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);

    // ตรวจสอบว่า a, b, c เป็นค่าที่สามารถคำนวณได้
    if (a === 0) {
        text.innerHTML = "กรุณากรอกค่าที่ถูกต้องและ a ต้องไม่เป็น 0";
        return;
    }

    // คำนวณ determinant
    let determinant = (b ** 2) - (4 * a * c);

    // ถ้า determinant < 0 จะไม่สามารถคำนวณได้
    if (determinant < 0) {
        text.innerHTML = "ไม่สามารถหาคำตอบได้ เนื่องจาก discriminant น้อยกว่า 0";
        return;
    }

    // คำนวณรากที่ 1 และ 2
    let root1 = (-b + Math.sqrt(determinant)) / (2 * a);
    let root2 = (-b - Math.sqrt(determinant)) / (2 * a);

    // แสดงผลลัพธ์
    text.innerHTML = `
    <p>รากที่ 1: ${root1.toFixed(5)}</p>
    <p>รากที่ 2: ${root2.toFixed(5)}</p>
    `
}

button.addEventListener("click", resulter)
