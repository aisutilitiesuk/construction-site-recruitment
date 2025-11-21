# Construction Site Recruitment Website

A modern, responsive recruitment agency website built for Construction Site Recruitment (CSR), specializing in critical infrastructure sectors including Rail, Utilities, and Construction.

## 🚀 Features

- **Modern Design**: Clean, professional design with CSR brand colors
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Tally Forms Integration**: Embedded forms for client inquiries and candidate registration
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Fast Performance**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Forms**: Tally Forms (embedded)
- **SEO**: React Helmet Async
- **Animations**: Framer Motion
- **Typography**: Sora font family

## 🎨 Brand Colors

- **Primary**: #f46904 (Orange)
- **Secondary**: #000000 (Black)
- **Background**: #ffffff (White)
- **Surface**: #f9fafb (Light Gray)

## 📱 Pages & Sections

### Homepage
- Hero section with call-to-action buttons
- About/Vision section
- Sectors grid (Utilities, Renewables, Rail, Construction, Civils, Finance)
- Client services overview
- Candidate benefits
- Featured job listings
- Team profiles
- Contact information

### Dedicated Pages
- `/clients` - Client-focused information and inquiry form
- `/candidates` - Candidate registration and benefits
- `/jobs` - Job listings and opportunities
- `/contact` - Contact form and information

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Tally Forms Setup

To integrate your Tally forms:

1. Replace the placeholder form IDs in the following components:
   - `src/components/sections/Clients.tsx` - Client inquiry form
   - `src/components/sections/Candidates.tsx` - CV registration form
   - `src/components/sections/Contact.tsx` - General contact form

2. Update the `formId` prop in the `TallyEmbed` components with your actual Tally form IDs.

## 🏢 Contact Information

- **Phone**: 0292 002 8365
- **Email**: jobs@constructionsiterecruitment.co.uk
- **Hours**: Mon–Friday, 8:00am–5:30pm

## 📄 License

This project is proprietary to Construction Site Recruitment.