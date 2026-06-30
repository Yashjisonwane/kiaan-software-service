# 🚀 Kiaan Software licensing & Leads System - Progress Report

यह फ़ाइल आपके प्रोजेक्ट में लागू किए गए सेंट्रल लाइसेंसिंग और लीड्स मैनेजमेंट सिस्टम की प्रगति और तकनीकी विवरण को दर्शाती है।

---

## 📋 completed Tasks (पूरे किए गए कार्य)

- [x] **लोकल डेटाबेस सेटअप**: `src/data/licenses.json` फ़ाइल बनाई गई।
- [x] **डेटाबेस यूटिलिटी**: `src/utils/licenseDb.ts` फ़ाइल बनाई गई जो डेटाबेस को रीड और राइट करती है।
- [x] **रजिस्ट्रेशन API**: `POST /api/license/register` बनाया गया (डेमो के लिए 10 दिन और खरीद के लिए 30 दिन का लाइसेंस)।
- [x] **सत्यापन API**: `POST /api/license/validate` बनाया गया (बाकी सॉफ्टवेयर्स में लाइसेंस चेक करने के लिए)।
- [x] **एडमिन ऑथेंटिकेशन**: `/api/admin/login` और `/api/admin/logout` APIs बनाए गए।
- [x] **लीड्स मैनेजमेंट API**: `/api/admin/leads` API बनाया गया (स्टेटस बदलने, डेमो बढ़ाने या डिलीट करने के लिए)।
- [x] **एडमिन लॉगिन यूआई**: `/admin/login` सुंदर लॉगिन पेज बनाया गया।
- [x] **लीड्स डैशबोर्ड यूआई**: `/admin/leads` पर प्रीमियम डैशबोर्ड बनाया गया (सर्च, फ़िल्टर, और कंट्रोल बटन के साथ)।
- [x] **वेबसाइट एकीकरण**: Recruitment Management पेज पर डेमो और खरीद फॉर्म को API से जोड़ा गया।

---

## 📁 बनाई गई फ़ाइलें (Created Files)

| फ़ाइल का नाम | स्थान (Path) | प्रकार |
| :--- | :--- | :--- |
| **डेटाबेस** | [licenses.json](file:///d:/kiaan/kiaan-software-service/src/data/licenses.json) | JSON (डेटा स्टोरेज) |
| **डेटाबेस यूटिलिटी** | [licenseDb.ts](file:///d:/kiaan/kiaan-software-service/src/utils/licenseDb.ts) | TypeScript (रीड/राइट हेल्पर) |
| **रजिस्टर API** | [/api/license/register](file:///d:/kiaan/kiaan-software-service/src/app/api/license/register/route.ts) | Next.js API Route (POST) |
| **वैलिडेट API** | [/api/license/validate](file:///d:/kiaan/kiaan-software-service/src/app/api/license/validate/route.ts) | Next.js API Route (POST) |
| **लॉगिन API** | [/api/admin/login](file:///d:/kiaan/kiaan-software-service/src/app/api/admin/login/route.ts) | Next.js API Route (POST) |
| **लॉगआउट API** | [/api/admin/logout](file:///d:/kiaan/kiaan-software-service/src/app/api/admin/logout/route.ts) | Next.js API Route (POST) |
| **लीड्स API** | [/api/admin/leads](file:///d:/kiaan/kiaan-software-service/src/app/api/admin/leads/route.ts) | Next.js API Route (GET/POST) |
| **लॉगिन पेज** | [/admin/login](file:///d:/kiaan/kiaan-software-service/src/app/admin/login/page.tsx) | React/Next.js Component |
| **डैशबोर्ड पेज** | [/admin/leads](file:///d:/kiaan/kiaan-software-service/src/app/admin/leads/page.tsx) | React/Next.js Dashboard UI |

---

## 🔑 एडमिन क्रेडेंशियल्स (Admin Login Details)

डैशबोर्ड को एक्सेस करने के लिए क्रेडेंशियल्स:
* **यूआरएल (URL):** `http://localhost:3000/admin/login` (लाइव होने पर: `https://your-domain.com/admin/login`)
* **Email ID:** `admin@kiaantech.com`
* **Password:** `KiaanAdmin@2026`

---

## 💻 अन्य सॉफ्टवेयर्स में कनेक्ट करने का तरीका (Client Software Fetch Code)

अपने अन्य किसी भी सॉफ्टवेयर (जैसे POS, CRM) के कोड में, स्टार्टअप पर इस तरह फ़ेच करें:

```javascript
async function validateLicense() {
  const licenseKey = localStorage.getItem("kiaan_license_key"); // ग्राहक द्वारा डाली गई की
  const softwareId = "kiaan-pos-system"; // प्रत्येक सॉफ्टवेयर की अपनी यूनिक ID

  if (!licenseKey) {
    showLockScreen("कृपया लाइसेंस की दर्ज करें।");
    return;
  }

  try {
    const response = await fetch("https://your-domain.com/api/license/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ licenseKey, softwareId })
    });
    const result = await response.json();

    if (result.valid) {
      // लाइसेंस वैध है, सॉफ्टवेयर सामान्य रूप से चलेगा
      console.log("वैध लाइसेंस। शेष दिन: " + result.daysRemaining);
      if (result.type === "demo") {
        showDemoBanner(`ट्रायल मोड: ${result.daysRemaining} दिन शेष हैं।`);
      }
    } else {
      // लाइसेंस एक्सपायर या ब्लॉक है, सॉफ्टवेयर लॉक करें
      showLockScreen(`लाइसेंस अमान्य: ${result.message}`);
    }
  } catch (error) {
    // ऑफलाइन होने की स्थिति में पुराना एक्सपायरी डेटा चेक करें
    checkOfflineGracePeriod();
  }
}
```
