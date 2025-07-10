# Email Setup Instructions for MovinWare Contact Form

## 🚀 Quick Setup Guide

Your contact form is now fully functional! Here's how to complete the email setup:

### Option 1: EmailJS (Recommended - Free & Reliable)

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up with your email
   - Verify your email address

2. **Add Email Service**
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your `info@movinware.com` account
   - Note the **Service ID**

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```
Subject: {{inquiry_type}} - New Contact Form Submission

Hello MovinWare Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
Please respond to {{from_email}} within 24 hours.

Best regards,
MovinWare Contact System
```

4. **Get Your Credentials**
   - **Service ID**: From your service settings
   - **Template ID**: From your template settings
   - **Public Key**: From Account > API Keys

5. **Update the Code**
   - Open `src/components/Contact.tsx`
   - Replace these lines (around line 12-14):
   ```javascript
   const EMAILJS_SERVICE_ID = "your_service_id_here";
   const EMAILJS_TEMPLATE_ID = "your_template_id_here";
   const EMAILJS_PUBLIC_KEY = "your_public_key_here";
   ```

### Option 2: Mailto Fallback (Already Working)

If you don't set up EmailJS, the form will automatically:
- Open the user's email client
- Pre-fill the email to `info@movinware.com`
- Include all form data in the email body

## ✅ Current Features

Your contact form now includes:

### **📧 Email Delivery**
- ✅ EmailJS integration for direct sending
- ✅ Mailto fallback for reliability
- ✅ Professional email formatting
- ✅ All form data included

### **🎯 User Feedback**
- ✅ Loading spinner during submission
- ✅ Success message with green checkmark
- ✅ Error handling with retry option
- ✅ Toast notifications for instant feedback
- ✅ Form validation with helpful messages

### **📱 Enhanced UX**
- ✅ Real-time form validation
- ✅ Required field indicators
- ✅ Responsive design for all devices
- ✅ Smooth animations and transitions
- ✅ Professional styling

### **🔧 Smart Features**
- ✅ Form auto-reset after successful submission
- ✅ Multiple contact methods (email, phone, WhatsApp)
- ✅ Quick action buttons for common requests
- ✅ Inquiry type categorization

## 🎉 Ready to Use!

Your contact form is **100% functional** right now! Even without EmailJS setup, users can:
1. Fill out the form
2. Click "Send Message"
3. Their email client opens with pre-filled content
4. They send the email to `info@movinware.com`
5. You receive their message!

## 📞 Contact Methods Available

- **📧 Email**: info@movinware.com
- **📱 Phone**: +971 4 123 4567
- **💬 WhatsApp**: Instant messaging support
- **📅 Calendar**: Direct booking links
- **👥 Expert Consultation**: Scheduled calls

Your contact section is now **fully activated** and ready to capture leads! 🚀