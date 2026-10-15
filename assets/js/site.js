/* Bill Okinda portfolio: menu, gallery filters, lightbox and enquiry form. No libraries. */

/* ---------- Form settings ----------
   To make the form send email directly, create a free access key at https://web3forms.com
   (enter okinda27@gmail.com) and paste it between the quotes below.
   Until a key is set, the form opens the visitor's email app with the message filled in. */
const WEB3FORMS_KEY = "";
const CONTACT_EMAIL = "okinda27@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  // ---------- Mobile menu ----------
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    const setOpen = (open) => {
      nav.dataset.open = String(open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(nav.dataset.open !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.dataset.open === "true") { setOpen(false); toggle.focus(); } });
  }

  // ---------- Buttons that pre-select the enquiry topic ----------
  document.querySelectorAll("[data-topic]").forEach((link) => {
    link.addEventListener("click", () => {
      const select = document.getElementById("topic");
      if (!select) return;
      const match = [...select.options].find((o) => o.text === link.dataset.topic);
      if (match) select.value = match.value;
    });
  });

  // ---------- Gallery filters ----------
  const filterButtons = document.querySelectorAll(".filters button");
  const shots = document.querySelectorAll(".shot");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      shots.forEach((s) => { s.hidden = !(cat === "all" || s.dataset.cat === cat); });
    });
  });

  // ---------- Lightbox ----------
  const box = document.querySelector("dialog.lightbox");
  if (box) {
    const img = box.querySelector("img");
    const cap = box.querySelector("p");
    document.querySelectorAll(".shot button, .feature-img button").forEach((b) => {
      b.addEventListener("click", () => {
        const source = b.querySelector("img");
        img.src = source.dataset.full || source.currentSrc || source.src;
        img.alt = source.alt;
        cap.textContent = b.closest("figure")?.querySelector("figcaption")?.innerText.replace(/\s+/g, " ") || source.alt;
        box.showModal();
      });
    });
    box.querySelector(".lb-close").addEventListener("click", () => box.close());
    box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  }

  // ---------- Enquiry form ----------
  document.querySelectorAll("form.enquiry").forEach((form) => {
    const status = form.querySelector(".form-status");
    const say = (text, state) => { status.textContent = text; status.dataset.state = state || ""; };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const missing = [...form.querySelectorAll("[required]")].find((f) => !f.value.trim());
      if (missing) { say(`Please fill in ${missing.labels[0].textContent.trim().toLowerCase()}.`, "error"); missing.focus(); return; }
      const email = form.querySelector("[type=email]");
      if (email && !email.checkValidity()) { say("Please check the email address.", "error"); email.focus(); return; }
      if (form.querySelector("[name=botcheck]")?.checked) return;

      const data = Object.fromEntries(new FormData(form));
      delete data.botcheck;
      const subject = `${form.dataset.subject}: ${data.topic || data.service || ""}`.trim();

      if (!WEB3FORMS_KEY) {
        const body = Object.entries(data).filter(([, v]) => v).map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join("\n");
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        say("Your email app should open with the message ready to send.", "ok");
        return;
      }

      const button = form.querySelector("button[type=submit]");
      button.disabled = true;
      say("Sending…");
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, from_name: "okinda-bill portfolio", ...data }),
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.message);
        form.reset();
        say("Message sent. I'll reply within two working days.", "ok");
      } catch {
        say(`The message didn't send. Email me directly at ${CONTACT_EMAIL}.`, "error");
      } finally {
        button.disabled = false;
      }
    });
  });
});
