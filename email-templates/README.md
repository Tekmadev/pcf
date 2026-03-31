# PCF Email Template Setup Guide

## 📧 EmailJS Template Configuration

### Step 1: Copy the Email Template

1. Open `contact-form-template.html` in this folder
2. Copy the entire HTML content

### Step 2: Create EmailJS Template

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Click **Create New Template**
4. Give it a name like "PCF Contact Form"
5. Switch to **HTML** view
6. Paste the HTML template content
7. **Save** the template
8. **Copy the Template ID** (e.g., `template_abc123`)

### Step 3: Update Contact Form

Update the `ContactForm.tsx` file:

```typescript
// Replace "YOUR_TEMPLATE_ID" with your actual template ID
const result = await emailjs.send(
  "service_2sk2dow",
  "template_abc123", // ← Replace with your actual template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    message: formData.message,
  },
  "ZI4SuZpE9GhhYiKpF"
);
```

## 🎨 Template Features

### ✅ **Responsive Design**

- Works perfectly on desktop, tablet, and mobile
- Optimized for all major email clients

### ✅ **PCF Branding**

- **Professional PCF Logo** in header with responsive sizing
- Uses your website colors (#d6781c, #292524)
- Professional gradient header
- Consistent styling with your website

### ✅ **Professional Layout**

- Clean, organized customer information display
- Highlighted message section
- Call-to-action button for quick replies

### ✅ **Interactive Elements**

- Clickable email and phone links
- Pre-filled reply button
- Professional footer with contact info

## 📱 Email Variables Used

The template uses these EmailJS variables:

- `{{name}}` - Customer's name
- `{{email}}` - Customer's email
- `{{phone}}` - Customer's phone
- `{{message}}` - Customer's message

**Note:** Make sure your ContactForm.tsx sends data with these exact variable names.

## 🚀 Testing

1. Submit a test form on your website
2. Check if you receive the formatted email
3. Verify all links work correctly
4. Test on different devices/email clients

## 📞 Support

If you need help with setup, contact the development team!

---

**Created for PCF - Precision Contracting & Foundation**
