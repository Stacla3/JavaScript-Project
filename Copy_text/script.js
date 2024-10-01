const btn = document.querySelector(".copyb");
const coupon = document.querySelector(".coupon")

btn.addEventListener('click', () => {

    //method เลือก text ทั้งหมด
    coupon.select();
    coupon.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = "Copy Finished.";

    //ทำให้ปุ่มกับไปเป็นข้อความเก่า
    setTimeout(() => {
        btn.textContent = "Copy text";
    }, 3000);
})