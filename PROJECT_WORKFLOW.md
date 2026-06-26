# Kiaan Software Service - Project Workflow 🚀

Kiaan Software Service (Kiaan Tech Web) ek Next.js aadharit SaaS aur IT Company website hai. Ye document is project ke poore workflow, architecture, aur technical details ko aasan shabdon me samajhane ke liye banaya gaya hai.

---

## 🛠️ 1. Tech Stack (Takanik jiska use hua hai)
Is project ko modern aur fast banane ke liye in technologies ka use kiya gaya hai:
- **Framework**: Next.js 15 (App Router ka use karke)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (Smooth transitions aur micro-animations ke liye)
- **Language**: TypeScript (Type safety aur kam errors ke liye)
- **Icons**: Lucide React
- **Email Service**: EmailJS (Forms se email bhejne ke liye)

---

## 📂 2. Folder Structure (Project ka aakaar)
Project ka main code `src` folder ke andar hai. Iska structure kuch is tarah hai:

- **`src/app/`**: Ye Next.js ka naya App Router hai. Har folder ek naya page (route) banata hai.
  - *Main Pages*: `home`, `about`, `contact`, `pricing`, `demo`
  - *Products/SaaS*: `crm`, `erp`, `hrm`, `pos`
  - *Services*: `services`, `software-services`, `ai-automation`, `architecture-audit`
  - *Policies*: `privacy`, `terms`, `refund-policy`, `cancellation-policy`
  - *Global Files*: `layout.tsx` (main layout), `page.tsx` (homepage), `globals.css` (main styling)

- **`src/components/`**: Yahan saare reusable UI components rakhe gaye hain jo alag-alag pages par use hote hain.
  - *UI Components*: `Button.tsx`, `GlassCard.tsx`, `Reveal.tsx` (animations ke liye)
  - *Layout Components*: `Navbar/`, `Footer.tsx`, `MobileMenu.tsx`
  - *Forms & Conversion*: `LeadCaptureForm.tsx`, `WhatsAppBookingButton.tsx` (Leads collect karne ke liye)
  - *Features*: `SaaSProductTemplate.tsx`, `ServiceCard/`, `DraggableMarquee.tsx`

- **`src/data/`**: Isme website ka static ya dummy data hoga (jaise pricing plans, services ki list, team details).
- **`src/assets/`**: Images, logos aur doosri media files.
- **`src/utils/`**: Helper functions aur reusable logic.

---

## 🔄 3. Main Workflow & User Journey (User kaise interact karta hai)

**A. User Landing & Navigation (User ka aana)**
1. User jab website par aata hai (`page.tsx`), toh usko ek attractive homepage dikhta hai jisme Framer motion ke zariye smooth animations (`BackgroundEffects.tsx`, `Reveal.tsx`) hote hain.
2. User `Navbar` ya `MobileMenu` ke zariye alag-alag sections (Services, Products, Pricing, Company) par navigate karta hai.

**B. Services & Products Showcase**
1. Agar user products (jaise CRM, ERP, POS) par click karta hai, toh woh `src/app/crm/page.tsx` jaise route par jata hai.
2. In pages par `SaaSProductTemplate.tsx` ka use karke software ke features, demo aur pricing ko dikhaya jata hai.
3. Services page par `ServiceCategory` aur `ServiceCard` ka use karke alag-alag IT services (Web Dev, App Dev, AI Automation) ko list kiya jata hai.

**C. Lead Generation & Conversion (Customer se contact)**
1. Har page par call-to-action (CTA) buttons hote hain.
2. User agar direct chat karna chahe toh `WhatsAppBookingButton.tsx` par click karke direct WhatsApp par redirect ho jata hai.
3. Agar user ko detail me baat karni ho, toh woh `LeadCaptureForm.tsx` ya Contact page par form bharta hai. Ye form submit hone par EmailJS ke through admin ko email chala jata hai.

**D. Static Pages & Policies**
1. Website ke footer me Privacy Policy, Terms & Conditions, aur Refund Policy ke links hain, jo `app/privacy`, `app/terms` routes par jate hain. Ye user trust aur legal requirements ke liye zaroori hain.

---

## 💻 4. Development & Deployment Workflow (Kaam kaise karein)

Agar aapko is project me kuch naya develop ya change karna hai:

1. **Local Server Start Karein**:
   ```bash
   npm run dev
   ```
   Is command se `http://localhost:3000` par website run hogi aur aap apne changes live dekh payenge.

2. **Naya Component/Page Banana**:
   - Naya page banane ke liye `src/app/` ke andar naya folder banayein aur usme `page.tsx` banayein.
   - Naya UI element banane ke liye `src/components/` me file banayein aur use zaroorat ke hisaab se pages me import karein.

3. **Styling & Animations**:
   - Kisi bhi component ko design karne ke liye Tailwind CSS ki classes ka use karein.
   - Animate karne ke liye Framer Motion (`<motion.div>`) ya pehle se bane `Reveal.tsx` component ka use karein.

4. **Production Build (Live karne se pehle)**:
   ```bash
   npm run build
   ```
   Ye code ko optimize karega. Uske baad `npm run start` karke production server test kiya ja sakta hai.

---

## 🎯 Summary
Ye website ek modular aur modern architecture par bani hai. Jisme Next.js fast routing deta hai, Tailwind jaldi styling karne me madad karta hai, aur Framer Motion se website premium lagti hai. Har ek feature ko alag-alag components aur pages me divide kiya gaya hai taaki code ko maintain karna aasan ho.
