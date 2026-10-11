
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

// فتح وإغلاق قائمة الهاتف
menuBtn.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// التنقل بين الأقسام الثلاثة
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const targetId = link.dataset.section;

        // إخفاء جميع الأقسام
        sections.forEach(function (section) {
            section.classList.remove("active");
        });

        // إظهار القسم المختار
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add("active");
        }

        // تحديث شكل القائمة المختارة
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // إغلاق القائمة بعد الاختيار على الهاتف
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";

        // الانتقال إلى بداية المحتوى
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
