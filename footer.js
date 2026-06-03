// Alex Chen - Personal Resume Writer & Career Coach Footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-slate-50 dark:bg-black border-t border-gray-200 dark:border-slate-800">
  
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 grid-cols-1 md:grid-cols-12">

    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
    
               <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0">
                    <div
                        class="w-11 h-11 rounded-xl bg-[#DFF976] flex items-center justify-center shadow-lg shadow-[#DFF976]/20">
                        <i class="fa-solid fa-briefcase text-black text-lg"></i>
                    </div>
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">
                            Career<span class="text-[#B4D628]">Craft</span>
                        </span>
                        <span
                            class="text-[9px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-1">
                            Resume Writer & Coach
                        </span>
                    </div>
                </a>
                <br>
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
        I help ambitious professionals land their dream roles. With 10+ years as a corporate recruiter, I craft ATS-optimized resumes, optimize LinkedIn profiles, and provide 1-on-1 career coaching to elevate your trajectory.
      </p>
      
      <div class="mt-8 flex gap-3">
        <a href="https://linkedin.com/in/alexchencareers" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#DFF976] hover:border-[#DFF976] hover:text-black dark:hover:bg-[#DFF976] dark:hover:text-black shadow-sm">
          <i class="fa-brands fa-linkedin-in text-lg"></i>
        </a>
        <a href="https://calendly.com/alexchen" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#DFF976] hover:border-[#DFF976] hover:text-black dark:hover:bg-[#DFF976] dark:hover:text-black shadow-sm">
          <i class="fa-regular fa-calendar text-lg"></i>
        </a>
        <a href="mailto:alex@alexchen.careers" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#DFF976] hover:border-[#DFF976] hover:text-black dark:hover:bg-[#DFF976] dark:hover:text-black shadow-sm">
          <i class="fa-solid fa-envelope text-lg"></i>
        </a>
      </div>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#DFF976]">Navigation</h3>
      <ul class="space-y-3 text-sm font-semibold">
        <li><a href="about.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">About Me</a></li>
        <li><a href="services.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">All Services</a></li>
        <li><a href="pricing.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Pricing Plans</a></li>
        <li><a href="contact.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Contact</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#DFF976]">Expertise</h3>
      <ul class="space-y-3 text-sm font-semibold">
        <li><a href="resume.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300"> Resumes</a></li>
        <li><a href="linkedin.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">LinkedIn </a></li>
        <li><a href="coaching.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Interview Prep</a></li>
        <li><a href="career.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Career Strategy</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-4">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#DFF976]">Career Insights</h3>
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
        Subscribe to get my weekly job market insights, ATS-friendly resume tips, and exclusive coaching discounts delivered to your inbox.
      </p>

      <form class="flex flex-col gap-3" id="newsletterForm">
        <div class="relative">
          <input type="email" required placeholder="Enter your email address..." class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-[#B4D628] dark:focus:border-[#DFF976] transition-all font-medium text-sm shadow-sm">
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-900 dark:bg-[#DFF976] text-white dark:text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/5 dark:shadow-[#DFF976]/10 flex items-center justify-center gap-2">
          <span>Subscribe Now</span>
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500 dark:text-slate-500">
      
      <p>© ${new Date().getFullYear()} Career Craft Coaching. All rights reserved.</p>

      <div class="flex gap-6">
        <a href="#" class="hover:text-[#B4D628] dark:hover:text-[#DFF976] transition-colors duration-300">Privacy Policy</a>
        <a href="#" class="hover:text-[#B4D628] dark:hover:text-[#DFF976] transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    .footer-link:hover {
      color: #B4D628 !important;
      transform: translateX(6px);
    }
    
    .dark .footer-link:hover {
      color: #DFF976 !important;
    }

    [dir="rtl"] .footer-link:hover {
      transform: translateX(-6px);
    }

    #newsletterForm input::placeholder {
      color: #94a3b8;
    }
    
    .dark #newsletterForm input::placeholder {
      color: #475569;
    }
  `;
  document.head.appendChild(footerStyles);

  // Form Logic
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // You can replace this alert with a modern toast notification if you have one configured
      alert('Success! You are now subscribed to Career Insights. Keep an eye on your inbox.');
      form.reset();
    });
  }
});