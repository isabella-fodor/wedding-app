# 💍 Wedding Invitation Web App

A modern, elegant, and fully responsive web application for your wedding invitation. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

✨ **Elegant Design**
- Beautiful, minimalist UI with customizable colors
- Responsive design optimized for mobile devices
- Smooth animations and transitions
- Professional typography with Google Fonts

📋 **Complete Invitation Experience**
- Hero section with couple names and date
- Invitation text and details
- Wedding schedule/timeline
- Interactive Google Maps embed
- RSVP form with validation
- Success confirmation messages

💾 **RSVP Management**
- Collect guest responses with detailed information
- Track attendance and meal preferences
- Store responses in Supabase database
- Admin dashboard to view and manage RSVPs
- CSV export functionality

🔐 **Admin Panel**
- Password-protected admin access
- View all RSVP responses
- Filter by attendance status (Yes/No/Maybe)
- Real-time statistics (total guests, meal preferences)
- Export data to CSV for further processing

## Tech Stack

- **Frontend**: Next.js 16+ with TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel or Netlify (free tier supported)
- **Authentication**: JWT tokens for admin panel

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available)
- Vercel or Netlify account (for hosting)

### Installation

1. **Setup Supabase Database**

   a. Create a free account at [supabase.com](https://supabase.com)
   
   b. Create a new project
   
   c. In the SQL Editor, run this command to create the table:

```sql
CREATE TABLE rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  status VARCHAR(10) NOT NULL CHECK (status IN ('YES', 'NO', 'MAYBE')),
  people_count INTEGER NOT NULL DEFAULT 1,
  menu_option VARCHAR(50),
  comment TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON rsvps
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select" ON rsvps
  FOR SELECT USING (true);
```

   d. Get your credentials:
   - Go to Settings → API
   - Copy your **Project URL** and **anon public key**

2. **Configure Environment Variables**

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
ADMIN_PASSWORD=your-secure-password-here
JWT_SECRET_KEY=your-secret-key-here-min-32-chars
```

3. **Install and Run Locally**

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and `http://localhost:3000/admin` (password: from ADMIN_PASSWORD env)

4. **Customize Your Wedding**

Edit `src/wedding.config.ts`:
- Your names and date
- Wedding schedule
- Invitation text
- Venue location
- Colors and fonts
- Menu options

## Customization

### Change Colors

Edit `src/wedding.config.ts`:

```typescript
colors: {
  primary: "#d4af37",      // Gold accents
  secondary: "#1a3a3a",    // Dark green text
  accent: "#f5f5f0",       // Cream background
  text: "#2c2c2c",         // Body text
  lightBg: "#f9f7f4",      // Light sections
}
```

### Update Map Location

1. Go to Google Maps, search your venue
2. Click Share → Embed a map
3. Copy the embed URL
4. Update `venue.mapEmbedUrl` in `src/wedding.config.ts`

### Change Fonts

Edit `src/app/layout.tsx` and `src/wedding.config.ts`:
- Import different Google Fonts
- Update font references in config

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import repository
4. Add environment variables
5. Deploy!

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git" → Select repo
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add environment variables
7. Deploy!

### Custom Domain

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel/Netlify, add custom domain
3. Update DNS records
4. Wait for propagation (24-48 hours)

## Admin Dashboard

Access at `/admin` with your ADMIN_PASSWORD

**Features:**
- View all RSVP responses
- Filter by status (Yes/No/Maybe)
- See statistics (total guests, confirmations)
- Export to CSV
- Responsive design

**Data shown:**
- Guest names and contact info
- RSVP status
- Number of attendees
- Meal preferences
- Messages/comments
- Submission dates

## File Structure

```
src/
├── app/
│   ├── page.tsx                    # Main wedding page
│   ├── admin/
│   │   └── page.tsx               # Admin dashboard
│   ├── api/
│   │   ├── rsvp/route.ts           # RSVP submission
│   │   └── admin/
│   │       ├── auth/route.ts       # Admin login
│   │       └── rsvps/route.ts      # Fetch RSVPs
│   └── layout.tsx                 # App layout with fonts
├── components/
│   ├── HeroSection.tsx            # Welcome section
│   ├── InvitationSection.tsx      # Invitation text
│   ├── ScheduleSection.tsx        # Timeline
│   ├── MapSection.tsx             # Location map
│   ├── RSVPForm.tsx               # Form component
│   ├── RSVPSection.tsx            # Form container
│   └── Footer.tsx                 # Footer
├── lib/
│   ├── supabase/
│   │   └── client.ts              # Supabase setup
│   ├── validations/
│   │   └── rsvp.ts                # Form validation
│   └── auth/
│       └── admin.ts               # Auth utilities
└── wedding.config.ts               # Main configuration
```

## Database Schema

**RSVP Table:**

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | Auto-generated ID |
| full_name | VARCHAR | Required |
| email | VARCHAR | Optional |
| phone | VARCHAR | Optional |
| status | VARCHAR | YES/NO/MAYBE |
| people_count | INTEGER | 1-5 |
| menu_option | VARCHAR | Optional preference |
| comment | TEXT | Optional message |
| submitted_at | TIMESTAMP | Auto-set |
| updated_at | TIMESTAMP | Auto-set |

## Configuration Guide

`src/wedding.config.ts` controls everything:

```typescript
export const weddingConfig = {
  couple: {
    name1: "Your Name",
    name2: "Partner Name",
    names: "Your Name & Partner Name",
  },
  
  wedding: {
    date: "12 iulie 2026",
    dateISO: "2026-07-12",
  },
  
  schedule: [
    {
      title: "Ceremony",
      time: "11:00 AM",
      location: "Church address",
    },
  ],
  
  invitation: {
    greeting: "We invite you...",
    subtitle: "To celebrate with us",
    mainText: "Full invitation message...",
  },
  
  dressCode: {
    title: "Dress Code",
    description: "Elegant formal attire",
  },
  
  venue: {
    name: "Venue Name",
    address: "Full Address",
    latitude: 44.4268,
    longitude: 26.1025,
    mapEmbedUrl: "Google Maps embed URL",
  },
  
  menuOptions: ["Normal", "Vegetarian", "Vegan"],
  
  colors: {
    primary: "#d4af37",
    secondary: "#1a3a3a",
    accent: "#f5f5f0",
    text: "#2c2c2c",
    lightBg: "#f9f7f4",
  },
  
  fonts: {
    serif: "Playfair Display",
    sans: "Inter",
  },
};
```

## Security

- ⚠️ Never commit `.env.local`
- 🔒 Use strong admin password (12+ characters)
- 🗝️ Change JWT_SECRET_KEY
- 🔐 Enable Supabase RLS
- 🛡️ Use HTTPS

## Troubleshooting

**RSVP not submitting?**
- Check browser console
- Verify Supabase credentials
- Check table exists with RLS policies
- Test `/api/rsvp` endpoint

**Admin dashboard empty?**
- Verify admin password
- Check JWT secret
- Ensure RSVP data in Supabase
- Check browser console

**Map not showing?**
- Verify mapEmbedUrl is correct
- Check it's from Google Maps embed
- URL shouldn't be cut off

**Styles broken?**
- Clear browser cache
- Run `npm run build`
- Check Tailwind config

## Performance

✅ Image optimization  
✅ CSS minification  
✅ Code splitting  
✅ Responsive images  
✅ Static generation  

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Tips

1. 📱 Test on mobile
2. 🎨 Choose colors wisely
3. 📧 Send reminders
4. 🔄 Update changes prominently
5. 📊 Export data weekly

## Future Ideas

- Photo gallery
- Seating arrangements
- Countdown timer
- Guest comments
- Email notifications
- QR code sharing

---

Made with ❤️ for your special day! 🎉

---

Accessibility & Animations
- **Reduced motion**: The site respects the user's `prefers-reduced-motion` setting. Animations are disabled automatically for users who request reduced motion.
- **Disable animations manually**: To temporarily disable all decorative animations (useful for debugging or very low-power devices), add the `no-animations` class to the `<body>` element, e.g. `<body class="no-animations">`.

Automated RSVP Test Script
- A helper script is included at `scripts/insert_test_rsvp.js` to insert a test RSVP directly into your Supabase `rsvps` table. It reads `.env.local` for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Run the script locally:

```bash
npm run seed:test
```

The script prints the inserted row ID on success. Use it to verify your Supabase setup and RLS policies.

