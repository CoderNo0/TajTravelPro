# Taj India Tours - Frontend-Only Travel Booking Website

A complete static travel booking website with EmailJS integration for lead generation and bookings.

## 🌟 Features

- **Frontend-Only Architecture**: No backend required, fully static website
- **EmailJS Integration**: Direct email booking submissions to company email
- **JSON-Based Content**: All data stored in JSON files for easy management
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Tour Filtering**: Filter by location, price, duration, and category
- **Individual Tour Pages**: Detailed tour information with booking forms
- **Customer Reviews**: Social proof with real customer testimonials
- **Trust Building**: Safety badges, certifications, and guarantees
- **Conversion Optimized**: Urgency messages, clear CTAs, simple booking forms

## 📁 Project Structure

```
public/
├── index.html              # Main homepage
├── tour-detail.html        # Individual tour detail page
├── css/
│   └── style.css          # All styling (responsive, modern design)
├── js/
│   ├── main.js            # Homepage functionality
│   ├── tour-detail.js     # Tour detail page functionality
│   └── emailjs-config.js  # EmailJS configuration and email sending
├── assets/
│   └── json/
│       ├── tours.json     # Tour packages data
│       ├── reviews.json   # Customer reviews data
│       └── faqs.json      # Frequently asked questions
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Setup EmailJS (Required for booking forms)

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create email templates for booking notifications
4. Get your Service ID, Template ID, and Public Key
5. Update `js/emailjs-config.js` with your credentials:

```javascript
const EMAILJS_CONFIG = {
    serviceId: 'your_service_id_here',
    templateId: 'your_template_id_here', 
    publicKey: 'your_public_key_here'
};
```

### 2. Serve the Website

#### Option A: Python Server (Recommended)
```bash
# Navigate to the public directory
cd public

# Python 3
python -m http.server 8000

# Python 2 (if Python 3 not available)
python -m SimpleHTTPServer 8000

# Visit: http://localhost:8000
```

#### Option B: Node.js Server
```bash
# Install a simple server
npm install -g http-server

# Navigate to public directory and serve
cd public
http-server -p 8000

# Visit: http://localhost:8000
```

#### Option C: Any Web Server
Simply upload the `public` folder contents to any web hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 📧 EmailJS Template Setup

### Booking Email Template
Create a template in EmailJS with these variables:
- `{{from_name}}` - Customer name
- `{{from_email}}` - Customer email
- `{{tour_package}}` - Selected tour
- `{{travel_date}}` - Preferred travel date
- `{{travelers}}` - Number of travelers
- `{{message}}` - Special requirements
- `{{booking_id}}` - Unique booking ID

### Sample Email Template:
```
New Booking Request - {{booking_id}}

Customer Details:
Name: {{from_name}}
Email: {{from_email}}

Booking Details:
Tour: {{tour_package}}
Travel Date: {{travel_date}}
Number of Travelers: {{travelers}}

Special Requirements:
{{message}}

Please contact the customer within 24 hours to confirm booking details.
```

## 🎨 Customization

### 1. Update Tour Data
Edit `assets/json/tours.json` to add/modify tour packages:
- Tour details, pricing, images
- Categories for filtering
- Highlights and inclusions
- Urgency messages for conversion

### 2. Update Reviews
Edit `assets/json/reviews.json` to add customer testimonials:
- Customer names and locations
- Star ratings and comments
- Tour-specific reviews

### 3. Update FAQs
Edit `assets/json/faqs.json` to modify frequently asked questions.

### 4. Styling
All CSS is in `css/style.css`:
- Color scheme variables at the top
- Responsive breakpoints
- Component-specific styles

### 5. Content
Update text content directly in `index.html` and `tour-detail.html`.

## 🔧 Configuration

### Colors
Main brand colors in CSS:
```css
:root {
    --primary-color: #d4722b;
    --primary-dark: #b85f24;
    --background: #fef7f0;
}
```

### EmailJS Settings
Update company email addresses in `emailjs-config.js`:
```javascript
to_email: 'bookings@yourcompany.com'
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Flexible grid system
- Touch-friendly buttons and forms

## 🎯 Conversion Features

- **Urgency Messages**: "Only 3 spots left!"
- **Trust Badges**: Certifications, safety guarantees
- **Social Proof**: Customer reviews and ratings
- **Clear CTAs**: "Book This Tour" buttons
- **Simple Forms**: Only 4 required fields
- **Thank You Modal**: Confirmation after submission

## 🔍 SEO Features

- Semantic HTML structure
- Meta descriptions for each page
- Open Graph tags for social sharing
- Image alt tags
- Fast loading with optimized assets

## 📊 Analytics Integration

Add your analytics code before the closing `</body>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Deployment

### Netlify (Recommended)
1. Drag and drop the `public` folder to Netlify
2. Your site is live instantly with HTTPS

### Vercel
1. Connect your GitHub repository
2. Set build directory to `public`
3. Deploy automatically

### GitHub Pages
1. Push `public` folder contents to a repository
2. Enable GitHub Pages in repository settings
3. Select branch and folder

## 📞 Support

This is a complete frontend solution requiring no backend setup. For customization help:

1. Check the JSON files for data structure
2. Review CSS for styling modifications  
3. Ensure EmailJS is properly configured
4. Test forms before going live

## 🔐 Security Notes

- EmailJS handles email sending securely
- No sensitive data stored client-side
- Form validation prevents basic spam
- Consider adding reCAPTCHA for additional protection

---

**Ready to launch your travel booking website!** 🎉

Simply configure EmailJS, serve the files, and start receiving bookings directly to your email.