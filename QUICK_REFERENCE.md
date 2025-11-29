# 💍 Quick Reference Card

## File Structure

**Main Configuration:**
- `src/wedding.config.ts` - All your wedding details & colors

**Pages:**
- `src/app/page.tsx` - Main wedding website
- `src/app/admin/page.tsx` - Admin dashboard

**Components:**
- `src/components/HeroSection.tsx` - Title and date
- `src/components/InvitationSection.tsx` - Main invitation text
- `src/components/ScheduleSection.tsx` - Timeline of events
- `src/components/MapSection.tsx` - Google Maps
- `src/components/RSVPForm.tsx` - Form component
- `src/components/RSVPSection.tsx` - Form container
- `src/components/Footer.tsx` - Footer

**APIs:**
- `src/app/api/rsvp/route.ts` - Handle form submissions
- `src/app/api/admin/auth/route.ts` - Admin login
- `src/app/api/admin/rsvps/route.ts` - Get RSVPs for dashboard

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for errors
npm run lint
```

## URLs

**Development:**
- Website: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`
- API: `http://localhost:3000/api/rsvp`

**Production (Vercel):**
- Website: `https://your-project.vercel.app`
- Admin: `https://your-project.vercel.app/admin`
- API: `https://your-project.vercel.app/api/rsvp`

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Database URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Database key | `eyJhb...` |
| `ADMIN_PASSWORD` | Admin login | `MySecurePass123!` |
| `JWT_SECRET_KEY` | Token signing | `min-32-chars-long-string` |

## Color Palette

Current colors in `src/wedding.config.ts`:

| Color | Hex | Use |
|-------|-----|-----|
| Primary | `#d4af37` | Buttons, accents |
| Secondary | `#1a3a3a` | Text, headers |
| Accent | `#f5f5f0` | Light backgrounds |
| Text | `#2c2c2c` | Body text |
| Light BG | `#f9f7f4` | Section backgrounds |

## Common Changes

### Change Wedding Date
Edit `src/wedding.config.ts`:
```typescript
wedding: {
  date: "12 iulie 2026",      // Change this
  dateISO: "2026-07-12",      // And this (YYYY-MM-DD)
}
```

### Add Event to Schedule
```typescript
schedule: [
  {
    title: "Ceremony",
    time: "2:00 PM",
    location: "Church Address",
  },
  // Add new event here:
  {
    title: "Reception",
    time: "6:00 PM",
    location: "Venue Address",
  },
]
```

### Change Colors
```typescript
colors: {
  primary: "#ff0000",        // Change any color
  secondary: "#00ff00",
  accent: "#0000ff",
  text: "#333333",
  lightBg: "#f0f0f0",
}
```

### Add Menu Option
```typescript
menuOptions: ["Meat", "Vegetarian", "Vegan", "Halal"]  // Add here
```

## Database

**Table:** `rsvps`

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Auto-generated |
| full_name | VARCHAR | Guest name |
| email | VARCHAR | Optional |
| phone | VARCHAR | Optional |
| status | VARCHAR | YES / NO / MAYBE |
| people_count | INTEGER | 1-5 |
| menu_option | VARCHAR | Meal preference |
| comment | TEXT | Guest message |
| submitted_at | TIMESTAMP | Auto-set |

## Admin Dashboard

**Features:**
- View all RSVPs
- Filter by status
- See stats (total guests, confirmations)
- Export to CSV

**Access:**
- Local: `http://localhost:3000/admin`
- Production: `https://your-domain.vercel.app/admin`

**Login:** Use your `ADMIN_PASSWORD` from `.env.local`

## Deployment Checklist

- [ ] Configure `.env.local` with Supabase credentials
- [ ] Test locally: `npm run dev`
- [ ] Submit test RSVP form
- [ ] Check Supabase for test response
- [ ] Build: `npm run build`
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Add env variables in Vercel
- [ ] Test on Vercel URL
- [ ] Add custom domain (optional)
- [ ] Share link with guests

## Performance Tips

✅ Website loads in < 2 seconds
✅ Optimized for mobile
✅ Minimal JavaScript
✅ Static pages pre-generated
✅ Database queries cached

## Security

⚠️ Never commit `.env.local`
⚠️ Use strong admin password
⚠️ Don't share admin link publicly
⚠️ HTTPS is automatic on Vercel
⚠️ Database read-only for guests

## Troubleshooting Flowchart

```
Form not submitting?
├─ Check console errors (F12)
├─ Verify Supabase URL/key
├─ Check table exists
└─ Test /api/rsvp endpoint

Admin dashboard empty?
├─ Verify admin password
├─ Check JWT secret
├─ Ensure RSVP data exists
└─ Try incognito mode

Map not showing?
├─ Verify mapEmbedUrl
├─ Check full URL present
└─ Test in incognito

Styles broken?
├─ Clear cache
├─ Run npm run build
└─ Check colors valid
```

## Useful Links

- **Supabase**: https://supabase.com
- **Vercel**: https://vercel.com
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Google Maps**: https://maps.google.com

## Need Help?

1. Check `README.md` (comprehensive guide)
2. Check `SETUP.md` (step-by-step setup)
3. Read inline comments in code files
4. Check browser console for errors (F12)
5. Verify all environment variables set

---

**Happy planning! 💍**
