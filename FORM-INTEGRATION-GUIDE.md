# Contact Form Integration Guide

## 🎯 Current Setup

I've created a custom contact form that you can either:
1. **Keep as a custom form** and handle submissions via your API
2. **Replace with Tally** for easier management

## 🔧 Option 1: Using Tally Forms (Recommended)

### Step 1: Create Your Tally Form
1. Go to [Tally.so](https://tally.so)
2. Create a new form with these fields:
   - **Inquiry Type** (Dropdown): Client, Candidate, General, Partnership
   - **Full Name** (Text - Required)
   - **Email** (Email - Required)
   - **Phone** (Text - Optional)
   - **Company** (Text - Optional)
   - **Subject** (Text - Required)
   - **Message** (Long Text - Required)

### Step 2: Get Your Tally Form ID
1. After creating the form, get the form ID from the URL
2. Example: `https://tally.so/r/mELBqo` → Form ID is `mELBqo`

### Step 3: Replace Custom Form with Tally
Replace the custom form in `src/components/sections/Contact.tsx`:

```tsx
{/* Contact Form */}
<div className="bg-surface rounded-xl p-8">
  <h3 className="text-2xl font-bold text-secondary mb-6">
    Send us a Message
  </h3>
  
  {/* Tally Form Embed */}
  <TallyEmbed formId="YOUR_FORM_ID_HERE" height={600} />
</div>
```

### Step 4: Configure Tally Notifications
In Tally dashboard:
1. Go to **Integrations** → **Notifications**
2. Set up **Email notifications** to: `jobs@constructionsiterecruitment.co.uk`
3. Configure **Slack/Teams** integration if needed
4. Set up **Webhooks** for custom processing

## 🛠️ Option 2: Custom Form with API

### Current Form Features
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Professional styling

### Backend API Setup
Create an API endpoint at `/api/contact` that handles:

```javascript
// Example Node.js/Express endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, subject, message, inquiryType } = req.body;
  
  try {
    // 1. Validate data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // 2. Send email notification
    await sendEmail({
      to: 'jobs@constructionsiterecruitment.co.uk',
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Type:</strong> ${inquiryType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    
    // 3. Save to database (optional)
    await saveToDatabase({
      name, email, phone, company, subject, message, inquiryType,
      submittedAt: new Date()
    });
    
    // 4. Send auto-reply to user
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting CSR',
      html: `
        <h2>Thank you for your inquiry</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and will respond within 2 hours during business hours.</p>
        <p>Best regards,<br>Construction Site Recruitment Team</p>
      `
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});
```

## 📧 Where Submissions Go

### With Tally:
- **Email**: Automatic notifications to your email
- **Dashboard**: All submissions viewable in Tally dashboard
- **Integrations**: Can connect to CRM, Slack, etc.
- **Export**: CSV/Excel export available

### With Custom API:
- **Email**: Send to `jobs@constructionsiterecruitment.co.uk`
- **Database**: Store in your database for tracking
- **CRM**: Integrate with your existing CRM system
- **Analytics**: Custom tracking and reporting

## 🔄 Integration Steps

### For Tally (Easiest):
1. Create Tally form
2. Get form ID
3. Replace custom form with Tally embed
4. Configure email notifications in Tally

### For Custom API:
1. Set up backend API endpoint
2. Configure email service (SendGrid, Mailgun, etc.)
3. Set up database (optional)
4. Test form submission
5. Configure auto-replies

## 📊 Recommended Approach

**Use Tally if:**
- ✅ You want quick setup
- ✅ Don't need custom processing
- ✅ Want built-in analytics
- ✅ Need easy form management

**Use Custom API if:**
- ✅ Need custom validation
- ✅ Want to integrate with existing systems
- ✅ Need custom auto-replies
- ✅ Want full control over data

## 🚀 Next Steps

1. **Choose your approach** (Tally or Custom)
2. **Set up the backend** (if using custom)
3. **Test thoroughly** with different scenarios
4. **Configure notifications** to ensure you receive submissions
5. **Set up auto-replies** for better user experience

Let me know which approach you prefer and I can help implement it!
