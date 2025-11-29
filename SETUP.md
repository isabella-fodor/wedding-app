# 🚀 Wedding App - Setup & Deployment Guide

Welcome! This is your complete guide to getting your beautiful wedding website up and running.

## Part 1: Local Setup (5 minutes)

### Step 1: Install Dependencies

```bash
cd /Users/isabellafodor/Desktop/wedding-app
npm install
```

### Step 2: Create `.env.local` File

Create a new file named `.env.local` in the root directory with placeholder values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
ADMIN_PASSWORD=your-secure-password-here
JWT_SECRET_KEY=your-secret-key-here-min-32-chars
```

Don't worry - you'll fill these in with real values after setting up Supabase.

### Step 3: Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. You'll see a beautiful wedding page!

## Part 2: Supabase Setup (10 minutes)

This is where your guest responses will be stored.

### Step 1: Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Sign Up"
3. Create account with GitHub or email
4. Create a new project (free tier is perfect)

### Step 2: Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste this SQL:

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

4. Click **Run** (blue play button)

### Step 3: Get Your Credentials

1. In Supabase dashboard, click **Settings** (gear icon)
2. Click **API** in the left menu
3. You'll see:
   - **Project URL** → Copy this
   - **anon public** (under API keys) → Copy this

### Step 4: Update `.env.local`

Edit your `.env.local` file and replace:
- `https://your-project.supabase.co` with your Project URL
- `your-anon-key-here` with your anon key

Example:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xyzabc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
ADMIN_PASSWORD=MySecurePassword123!
JWT_SECRET_KEY=your-very-long-secret-key-min-32-chars-12345678901234567890
```

### Step 5: Test Locally

```bash
npm run dev
```

Try submitting the RSVP form at `http://localhost:3000`. If it works, check Supabase:
1. Go to Supabase dashboard
2. Click **SQL Editor**
3. Run: `SELECT * FROM rsvps;`
4. You should see your test response!

Great! You're ready to customize.

## Part 3: Customize Your Wedding Details (10 minutes)

Edit `src/wedding.config.ts` - this controls EVERYTHING:

```typescript
couple: {
  name1: "Isabella",           // Your name
  name2: "Your Partner",       // Partner name
  names: "Isabella & John",    // Both names together
},

wedding: {
  date: "12 iulie 2026",       // Your date
  dateISO: "2026-07-12",       // ISO format
},

schedule: [
  {
    title: "Religious Ceremony",
    time: "2:00 PM",
    location: "Church Name, Address",
  },
  // Add more events...
],

invitation: {
  greeting: "We're thrilled to invite you",
  subtitle: "to celebrate our love",
  mainText: "Your full invitation message here...",
},

dressCode: {
  title: "Dress Code",
  description: "Black Tie Optional",
},

venue: {
  name: "Restaurant/Hall Name",
  address: "Full Address",
  latitude: 44.4268,    // Get from Google Maps
  longitude: 26.1025,   // Get from Google Maps
  mapEmbedUrl: "Your Google Maps embed URL",
},

menuOptions: ["Meat", "Vegetarian", "Vegan"],

colors: {
  primary: "#d4af37",      // Main accent color
  secondary: "#1a3a3a",    // Dark text
  accent: "#f5f5f0",       // Light background
  text: "#2c2c2c",         // Body text
  lightBg: "#f9f7f4",      // Light sections
},
```

### Change Colors

Popular combinations:
- **Gold + Green**: `#d4af37` (gold), `#1a3a3a` (dark green)
- **Rose + Purple**: `#d8547d` (rose), `#2d0a1f` (deep purple)
- **Sage + Cream**: `#6b8b7e` (sage), `#f5f5f0` (cream)

### Update Map Location

1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click the venue name
4. Click **Share** → **Embed a map**
5. Copy the `src` URL from the iframe
6. Paste into `venue.mapEmbedUrl`

## Part 4: Deploy to Vercel (5 minutes - RECOMMENDED)

### Step 1: Push to GitHub

```bash
cd /Users/isabellafodor/Desktop/wedding-app
git add .
git commit -m "Initial commit: wedding app"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in
3. Click **New Project**
4. Select your GitHub repository
5. Click **Import**

### Step 3: Add Environment Variables

1. In Vercel, go to **Settings** → **Environment Variables**
2. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase key
   - `ADMIN_PASSWORD`: Your admin password
   - `JWT_SECRET_KEY`: Your secret key (min 32 chars)

3. Click **Deploy**

### Step 4: Get Your URL

Once deployed, Vercel gives you a URL like:
`https://your-project-name.vercel.app`

Send this link to your guests!

## Part 5: Access Admin Dashboard

### At Home (Local Testing)

Visit: `http://localhost:3000/admin`
Password: (whatever you set as `ADMIN_PASSWORD`)

### On Vercel

Visit: `https://your-project-name.vercel.app/admin`
Password: (same as above)

### Admin Dashboard Features

✅ See all guest responses
✅ Filter by: Yes / No / Maybe
✅ View statistics (total people, confirmations)
✅ See meal preferences
✅ Export to CSV (click the button)
✅ Track responses in real-time

## Part 6: Custom Domain (Optional)

Want `wedding-isabella-john.com` instead of `vercel.app`?

### Option A: Buy New Domain

1. Buy domain at:
   - Namecheap.com
   - GoDaddy.com
   - Google Domains
   
2. In Vercel: Settings → Domains
3. Add your domain
4. Vercel shows you DNS records to add
5. Update DNS at your registrar
6. Wait 24-48 hours

### Option B: Transfer Existing Domain

1. Follow same steps as Option A
2. Update nameservers to Vercel's

## Troubleshooting

### RSVP form not submitting?

- Check browser Console (F12 → Console)
- Verify `.env.local` has correct Supabase credentials
- Check Supabase `rsvps` table exists
- Test form at `localhost:3000/api/rsvp`

### Admin dashboard shows "Invalid password"?

- Check you're using the correct `ADMIN_PASSWORD` from `.env.local`
- Verify `JWT_SECRET_KEY` is set (min 32 characters)
- Try incognito mode (clear cookies)

### Map not showing?

- Verify `mapEmbedUrl` is complete (not truncated)
- Check it starts with `https://www.google.com/maps/embed`
- Test in incognito mode

### Styles look weird?

- Clear browser cache: Cmd+Shift+Delete (Mac) / Ctrl+Shift+Delete (Windows)
- Rebuild: `npm run build`
- Make sure `src/wedding.config.ts` colors are valid hex codes

## File Overview

```
src/
├── app/
│   ├── page.tsx                    ← Main wedding page
│   ├── admin/page.tsx              ← Admin dashboard
│   ├── api/rsvp/route.ts           ← RSVP form endpoint
│   ├── api/admin/auth/route.ts     ← Admin login
│   ├── api/admin/rsvps/route.ts    ← Get RSVPs
│   └── layout.tsx                  ← Google Fonts setup
├── components/
│   ├── HeroSection.tsx             ← Title & date
│   ├── InvitationSection.tsx       ← Invitation text
│   ├── ScheduleSection.tsx         ← Timeline
│   ├── MapSection.tsx              ← Location map
│   ├── RSVPForm.tsx                ← Form fields
│   ├── RSVPSection.tsx             ← Form container
│   └── Footer.tsx                  ← Footer
├── lib/
│   ├── supabase/client.ts          ← Database connection
│   ├── validations/rsvp.ts         ← Form validation
│   └── auth/admin.ts               ← Auth helpers
└── wedding.config.ts               ← EVERYTHING CUSTOMIZABLE
```

## Security Tips

⚠️ **Important:**

1. Never commit `.env.local` - it's in `.gitignore`
2. Use strong admin password (12+ chars, mixed case, numbers, symbols)
3. Change `JWT_SECRET_KEY` to something unique
4. Use HTTPS (Vercel does this automatically)
5. Don't share admin password publicly

## Advanced Features (Future)

You can later add:
- Guest photo gallery
- Seating chart / table assignments
- Countdown timer
- Guest comments/messages
- Email notifications for new RSVPs
- QR code linking to website
- Live event updates

## Support

- **Stuck?** Re-read the README.md
- **Questions about Supabase?** Visit supabase.com/docs
- **Next.js help?** Visit nextjs.org/docs
- **Styling issues?** Check tailwindcss.com/docs

## Celebration Checklist

- [ ] Customized all wedding details
- [ ] Tested RSVP form locally
- [ ] Deployed to Vercel
- [ ] Added custom domain (optional)
- [ ] Tested admin dashboard
- [ ] Shared link with guests
- [ ] Started tracking responses

---

**You're all set! Congratulations on your upcoming wedding! 💍🎉**

Need help? Check README.md or review this setup guide again.
