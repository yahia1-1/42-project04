
const themeBtn = document.getElementById("themeBtn");
const languageBtn = document.getElementById("languageBtn");

let darkMode = false;
let currentLanguage = "en";

const translations = {
    en: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        hobbies: "Hobbies",
        contact: "Contact",
        welcome: "Hello, I'm Yahia",
        description: "I am passionate about Cybersecurity, Web Development, and Programming.",
        mySkills: "My Skills",
        myProjects: "My Projects",
        myHobbies: "My Hobbies",
        contactMe: "Contact Me",
        portfolio: "Yahia Portfolio",
        project0: "My first web development project.",
        project1: "HTML fundamentals and page structure.",
        project2: "CSS styling and responsive layouts.",
        project3: "JavaScript and interactive applications.",
        hobbiesText: "Coding, learning new technologies, and solving programming challenges.",
        cybersecurity: "Cybersecurity",
        changePicture: "Change Profile Picture",
        sendMessage: "Send Message",
        footer: "© 2026 Yahia. All Rights Reserved."
    },

    ar: {
        about: "نبذة عني",
        skills: "المهارات",
        projects: "المشاريع",
        hobbies: "الهوايات",
        contact: "تواصل معي",
        welcome: "مرحباً، أنا يحيى",
        description: "أنا شغوف بالأمن السيبراني وتطوير الويب والبرمجة.",
        mySkills: "مهاراتي",
        myProjects: "مشاريعي",
        myHobbies: "هواياتي",
        contactMe: "تواصل معي",
        portfolio: "معرض أعمال يحيى",
        project0: "أول مشروع لي في تطوير الويب.",
        project1: "أساسيات HTML وهيكلة صفحات الويب.",
        project2: "تنسيق CSS والتصميم المتجاوب.",
        project3: "JavaScript وتطوير التطبيقات التفاعلية.",
        hobbiesText: "البرمجة وتعلم التقنيات الجديدة وحل التحديات البرمجية.",
        cybersecurity: "الأمن السيبراني",
        changePicture: "تغيير الصورة الشخصية",
        sendMessage: "إرسال الرسالة",
        footer: "© 2026 يحيى. جميع الحقوق محفوظة."
    }
};

function updateThemeButton() {
    if (darkMode) {
        themeBtn.textContent =
            currentLanguage === "ar" ? "الوضع الفاتح" : "Light Mode";
    } else {
        themeBtn.textContent =
            currentLanguage === "ar" ? "الوضع الداكن" : "Dark Mode";
    }
}

themeBtn.addEventListener("click", function() {
    darkMode = !darkMode;

    document.body.classList.toggle("dark-mode", darkMode);

    updateThemeButton();
});

function updateLanguage() {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    languageBtn.textContent =
        currentLanguage === "ar" ? "English" : "العربية";

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function(element) {
        const key = element.getAttribute("data-i18n");
        const translatedText = translations[currentLanguage][key];

        if (translatedText !== undefined) {
            element.textContent = translatedText;
        }
    });

    const placeholders = {
        en: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message"
        },
        ar: {
            name: "اسمك",
            email: "بريدك الإلكتروني",
            message: "رسالتك"
        }
    };

    document.querySelectorAll("[data-i18n-placeholder]")
        .forEach(function(element) {
            const key = element.getAttribute("data-i18n-placeholder");
            const translatedPlaceholder = placeholders[currentLanguage][key];

            if (translatedPlaceholder !== undefined) {
                element.placeholder = translatedPlaceholder;
            }
        });

    updateThemeButton();
}

languageBtn.addEventListener("click", function() {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    updateLanguage();
});

updateLanguage();

