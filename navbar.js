// CareerCraft - Premium Freelance Resume Writer & Career Coach Navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-[100] transition-colors duration-500 bg-white/90 dark:bg-black backdrop-blur-xl border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
    <div class="flex items-center justify-between h-20 md:h-24 gap-8">

      <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0">
        <div class="w-11 h-11 rounded-xl bg-[#DFF976] flex items-center justify-center shadow-lg shadow-[#DFF976]/20">
          <i class="fa-solid fa-briefcase text-black text-lg"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">
            Career<span class="text-[#B4D628]">Craft</span>
          </span>
          <span class="text-[9px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-1">
            Premium Coaching
          </span>
        </div>
      </a>

      <div id="desktopNav" class="hidden xl:flex items-center justify-center gap-2 text-[14px] font-semibold flex-1">
        
        <div class="relative group/home">
          <button id="homeBtn" class="nav-link flex items-center space-x-1 px-3 py-2 transition-all duration-300 text-slate-700 dark:text-slate-200">
            <span>Home</span>
            <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180 text-slate-400"></i>
          </button>
          <div id="homeMenu" class="hidden absolute left-0 mt-2 w-52 bg-white dark:bg-slate-900 shadow-xl rounded-xl py-2 z-50 border border-gray-100 dark:border-slate-800">
            <a href="index.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Home 1</a>
            <a href="home2.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Home 2</a>
          </div>
        </div>

        <a href="about.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">About</a>
        <a href="services.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Services</a>
        <a href="resume.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Resume</a>
        <a href="coaching.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Coaching</a>
        <a href="faq.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">FAQ</a>
        <a href="contact.html" class="nav-link px-3 py-2 text-slate-700 dark:text-slate-200">Contact</a>
        
        <div class="relative group/dash">
          <button id="dashBtn" class="nav-link flex items-center space-x-1 px-3 py-2 transition-all duration-300 text-slate-700 dark:text-slate-200">
            <span>Dashboard</span>
            <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/dash:rotate-180 text-slate-400"></i>
          </button>
          <div id="dashMenu" class="hidden absolute left-0 mt-2 w-52 bg-white dark:bg-slate-900 shadow-xl rounded-xl py-2 z-50 border border-gray-100 dark:border-slate-800">
            <a href="user.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">User</a>
            <a href="admin.html" class="dropdown-link block px-5 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Admin</a>
          </div>
        </div>
      </div>

      <div class="relative z-[60] hidden xl:flex items-center gap-4 shrink-0">
        <div class="flex items-center gap-2">
          <button id="rtlToggle" class="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:border-[#DFF976] hover:text-black dark:hover:text-white transition-all">
            <i class="fa-solid fa-language text-lg"></i>
          </button>
          <button id="darkToggle" class="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:border-[#DFF976] hover:text-black dark:hover:text-white transition-all">
            <i id="darkIcon" class="fa-solid fa-moon"></i>
          </button>
        </div>
        <div class="flex items-center gap-3 ml-2">
            <a href="login.html" class="flex items-center justify-center px-5 py-2.5 rounded-xl border border-[#DFF976] text-black dark:text-black font-bold text-sm  bg-[#DFF976] hover:bg-white hover:text-black dark:hover:text-black transition-all duration-300">Log In</a>
            <a href="signup.html" class="flex items-center justify-center px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-[#DFF976] text-white dark:text-black font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/5 dark:shadow-[#DFF976]/10">Sign Up</a>
        </div>
      </div>

      <div class="relative z-[60] xl:hidden flex items-center h-full">
        <button id="mobileBtn" class="w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white focus:outline-none">
          <i id="mobileIcon" class="fa-solid fa-bars-staggered text-2xl"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="fixed top-0 left-0 w-full h-[100dvh] bg-white dark:bg-slate-950 z-[50] flex-col px-6 pt-28 pb-20 xl:hidden hidden overflow-y-auto">
      <div id="mobileNavLinks" class="flex flex-col gap-2 text-sm font-bold">
        
        <div class="w-full border-b border-slate-100 dark:border-slate-800/50">
          <button id="mobileHomeBtn" class="flex items-center justify-between w-full py-4 text-slate-900 dark:text-white">
            <span>Home</span>
            <i id="mobileHomeIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl mb-4 overflow-hidden">
            <a href="index.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Home 1</a>
            <a href="home2.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Home 2</a>
          </div>
        </div>

        <a href="about.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-900 dark:text-white">About</a>
        <a href="services.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-900 dark:text-white">Services</a>
        <a href="resume.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-900 dark:text-white">Resume</a>
        <a href="coaching.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-900 dark:text-white">Coaching</a>
        <a href="faq.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-900 dark:text-white">FAQ</a>
        <a href="contact.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-900 dark:text-white">Contact</a>
        
        <div class="w-full border-b border-slate-100 dark:border-slate-800/50">
          <button id="mobileDashBtn" class="flex items-center justify-between w-full py-4 text-slate-900 dark:text-white">
            <span>Dashboard</span>
            <i id="mobileDashIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
          </button>
          <div id="mobileDashMenu" class="hidden flex-col bg-slate-50 dark:bg-slate-900/50 rounded-xl mb-4 overflow-hidden">
            <a href="user.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">User</a>
            <a href="admin.html" class="mobile-sublink block px-6 py-4 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Admin</a>
          </div>
        </div>
      </div>

      <div class="btns mt-auto pt-8 flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <button id="mobileRtlToggle" class="flex-1 flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-sm text-slate-600 dark:text-slate-300 hover:border-[#DFF976] transition-all">
             <i class="fa-solid fa-language"></i> RTL Mode
          </button>
          <button id="mobileDarkToggle" class="flex-1 flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-sm text-slate-600 dark:text-slate-300 hover:border-[#DFF976] transition-all">
            <i id="mobileDarkIcon" class="fa-solid fa-moon"></i> Theme
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <a href="login.html" class="w-full py-4 flex items-center justify-center rounded-xl bg-[#DFF97610] border-2 border-[#DFF976] text-[#B4D628] font-bold text-sm shadow-sm hover:bg-[#DFF976] hover:text-black transition-all">Log In</a>
          <a href="signup.html" class="w-full py-4 flex items-center justify-center rounded-xl bg-[#DFF976] text-black font-bold text-sm shadow-lg shadow-[#DFF976]/20">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;

  /* CSS STYLES */
  const style = document.createElement('style');
  style.textContent = `
    .nav-link { position: relative; transition: color 0.3s ease; }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 3px;
      border-radius: 4px;
      background: #DFF976;
      transition: width 0.3s ease;
      box-shadow: 0 0 10px rgba(223, 249, 118, 0.4);
    }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }
    
    .nav-link.active, .dropdown-link.active { color: #B4D628 !important; }
    .dark .nav-link.active, .dark .dropdown-link.active { color: #DFF976 !important; }

    .mobile-link.active, .mobile-sublink.active, #mobileHomeBtn.active, #mobileDashBtn.active { 
      color: #B4D628 !important; 
    }
    .dark .mobile-link.active, .dark .mobile-sublink.active, .dark #mobileHomeBtn.active, .dark #mobileDashBtn.active {
      color: #DFF976 !important;
    }
    @media(max-width:1280px){
    #desktopNav{
            gap: 5px;
    }
    }
    /* Added !important to guarantee display toggling works */
    #mobileMenu.hidden { display: none !important; }
    #mobileMenu:not(.hidden) { display: flex !important; }
    body.menu-open { overflow: hidden !important; }
  `;
  document.head.appendChild(style);

  /* INTERACTION & HIGHLIGHT LOGIC */
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");
  const dashBtn = document.getElementById("dashBtn");
  const dashMenu = document.getElementById("dashMenu");

  const mobileBtn = document.getElementById("mobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileIcon = document.getElementById("mobileIcon");
  
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");
  
  const mobileDashBtn = document.getElementById("mobileDashBtn");
  const mobileDashMenu = document.getElementById("mobileDashMenu");
  const mobileDashIcon = document.getElementById("mobileDashIcon");

  // Highlight Current Page Logic
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');

  allNavLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');

      if (link.classList.contains('dropdown-link')) {
        if (dashMenu && dashMenu.contains(link)) {
            dashBtn?.classList.add('active');
        } else {
            homeBtn?.classList.add('active');
        }
      }

      if (link.classList.contains('mobile-sublink')) {
        if (mobileDashMenu && mobileDashMenu.contains(link)) {
            mobileDashBtn?.classList.add('active');
            mobileDashMenu?.classList.remove('hidden');
            if (mobileDashIcon) mobileDashIcon.style.transform = "rotate(180deg)";
        } else {
            mobileHomeBtn?.classList.add('active');
            mobileHomeMenu?.classList.remove('hidden');
            if (mobileHomeIcon) mobileHomeIcon.style.transform = "rotate(180deg)";
        }
      }
    }
  });

  // Desktop Dropdown Toggles
  homeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    homeMenu?.classList.toggle("hidden");
    dashMenu?.classList.add("hidden"); 
  });

  dashBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    dashMenu?.classList.toggle("hidden");
    homeMenu?.classList.add("hidden"); 
  });

  // Mobile Submenu Toggles
  mobileHomeBtn?.addEventListener("click", () => {
    const isHidden = mobileHomeMenu.classList.toggle("hidden");
    mobileHomeIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  mobileDashBtn?.addEventListener("click", () => {
    const isHidden = mobileDashMenu.classList.toggle("hidden");
    mobileDashIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Mobile Menu Toggle
  mobileBtn.onclick = () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("menu-open");
    mobileIcon.className = isHidden ? "fa-solid fa-bars-staggered text-2xl" : "fa-solid fa-xmark text-2xl";
  };

  // Close menus on click outside
  document.addEventListener("click", () => { 
      homeMenu?.classList.add("hidden"); 
      dashMenu?.classList.add("hidden");
  });

  // Theme Logic
  const themeToggles = [document.getElementById("darkToggle"), document.getElementById("mobileDarkToggle")];

  const updateIcons = (isDark) => {
    const iconClass = isDark ? "fa-solid fa-wand-magic-sparkles text-[#DFF976]" : "fa-solid fa-moon";
    if (document.getElementById("darkIcon")) document.getElementById("darkIcon").className = iconClass;
    if (document.getElementById("mobileDarkIcon")) document.getElementById("mobileDarkIcon").className = iconClass;
  };

  themeToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("careercraft-theme", isDark ? "dark" : "light");
    updateIcons(isDark);
  }));

  // RTL Logic
  const rtlToggles = [document.getElementById("rtlToggle"), document.getElementById("mobileRtlToggle")];
  rtlToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isRtl = document.documentElement.dir === "rtl";
    document.documentElement.dir = isRtl ? "ltr" : "rtl";
  }));

  // Check saved theme preference on load
  if (localStorage.getItem("careercraft-theme") === "dark") {
    document.documentElement.classList.add("dark");
    updateIcons(true);
  }
});