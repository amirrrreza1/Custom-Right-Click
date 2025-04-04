const contextMenu = document.querySelector(".container");
const subMenu = document.querySelector(".shareMenu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  if (!contextMenu || !subMenu) return;

  // نمایش موقتی برای گرفتن اندازه واقعی
  contextMenu.style.visibility = "visible";

  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const menuWidth = contextMenu.offsetWidth;
  const menuHeight = contextMenu.offsetHeight;
  const subMenuWidth = subMenu.offsetWidth;

  let x = e.clientX;
  let y = e.clientY;

  if (x + menuWidth > winWidth) {
    x = winWidth - menuWidth - 10;
  }
  if (y + menuHeight > winHeight) {
    y = winHeight - menuHeight - 10;
  }

  // بررسی جای SubMenu
  if (x + menuWidth + subMenuWidth > winWidth) {
    subMenu.style.right = "100%";
  } else {
    subMenu.style.right = "-195px";
  }

  // تنظیم موقعیت نهایی
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;

  // بازگرداندن نمایش به حالت طبیعی
});

document.addEventListener("click", () => {
  if (contextMenu) {
    contextMenu.style.visibility = "hidden";
  }
});
