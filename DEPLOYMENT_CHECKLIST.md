# 🚀 Deployment Checklist

## Pre-Deployment (Local Testing)

### Setup Phase
- [ ] `npm install` completed without errors
- [ ] `.env.local` file created with placeholder values
- [ ] All dependencies installed

### Supabase Setup
- [ ] Supabase account created
- [ ] New project created
- [ ] SQL table created (rsvps)
- [ ] RLS policies enabled
- [ ] Project URL copied
- [ ] Anon key copied

### Environment Configuration
- [ ] `.env.local` updated with real Supabase credentials:
  - `NEXT_PUBLIC_SUPABASE_URL` ✓
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✓
  - `ADMIN_PASSWORD` (strong password, 12+ chars) ✓
  - `JWT_SECRET_KEY` (32+ random characters) ✓

### Customization
- [ ] `src/wedding.config.ts` fully customized:
  - [ ] Couple names updated
  - [ ] Wedding date updated (both formats)
  - [ ] Schedule updated with all events
  - [ ] Invitation text updated
  - [ ] Dress code information updated
  - [ ] Venue details updated
  - [ ] Google Maps embed URL added
  - [ ] Menu options added
  - [ ] Colors customized
  - [ ] Fonts updated (optional)

### Local Testing
- [ ] `npm run dev` runs without errors
- [ ] Website loads at `http://localhost:3000`
- [ ] All sections visible and styled correctly:
  - [ ] Hero section displays
  - [ ] Invitation section displays
  - [ ] Schedule section displays
  - [ ] Map section displays
  - [ ] RSVP form displays
  - [ ] Footer displays
- [ ] Form validation works:
  - [ ] Empty name shows error
  - [ ] Invalid email shows error
  - [ ] Status required shows error
  - [ ] People count validation works
- [ ] RSVP form submission works:
  - [ ] Complete form and submit
  - [ ] Success message appears
  - [ ] No console errors
- [ ] Check Supabase for response:
  - [ ] Logged into Supabase
  - [ ] Query: `SELECT * FROM rsvps;`
  - [ ] Test response appears in table
- [ ] Admin dashboard works:
  - [ ] Access `http://localhost:3000/admin`
  - [ ] Login with admin password succeeds
  - [ ] Test response visible in table
  - [ ] Filter buttons work
  - [ ] CSV export works
- [ ] Mobile responsiveness:
  - [ ] Test on phone or DevTools
  - [ ] All buttons are clickable
  - [ ] Text is readable
  - [ ] Map displays correctly
  - [ ] Form is usable

### Build Testing
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] Build completes without warnings
- [ ] `.next` folder generated

## Production Deployment (Vercel)

### Pre-Deployment Steps
- [ ] GitHub account created/ready
- [ ] Vercel account created at vercel.com
- [ ] Code pushed to GitHub:
  ```bash
  git add .
  git commit -m "Initial wedding app commit"
  git push origin main
  ```

### Vercel Configuration
- [ ] Vercel project created
- [ ] GitHub repository connected
- [ ] Environment variables added in Vercel:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] `ADMIN_PASSWORD`
  - [ ] `JWT_SECRET_KEY`
- [ ] Build settings verified:
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `.next`
- [ ] Initial deployment successful

### Production Testing
- [ ] Access Vercel URL
- [ ] Website loads completely
- [ ] All sections display correctly
- [ ] RSVP form submits successfully
- [ ] Response appears in Supabase
- [ ] Admin dashboard accessible at `/admin`
- [ ] Admin login works with password
- [ ] Responses visible in admin table
- [ ] Export to CSV works
- [ ] Mobile experience verified
- [ ] No console errors
- [ ] Page speed acceptable

### Post-Deployment
- [ ] Share URL with guests
- [ ] Monitor for issues
- [ ] Check Supabase for responses
- [ ] Export data regularly

## Custom Domain (Optional)

### Domain Purchase
- [ ] Domain purchased from registrar:
  - [ ] Namecheap
  - [ ] GoDaddy
  - [ ] Google Domains
  - [ ] Other: _______________
- [ ] Domain name: _________________________

### Domain Configuration
- [ ] Added custom domain in Vercel
- [ ] DNS records configured:
  - [ ] A record set
  - [ ] CNAME record set (if applicable)
- [ ] DNS propagation completed (24-48 hours)
- [ ] Custom domain works at vercel.com dashboard
- [ ] Website accessible at custom domain
- [ ] SSL certificate issued (auto by Vercel)
- [ ] HTTPS working on custom domain
- [ ] Shared custom domain URL with guests

## Ongoing Maintenance

### Regular Checks
- [ ] Check RSVPs weekly
- [ ] Export data to backup
- [ ] Monitor any error reports from guests
- [ ] Update important announcements if needed
- [ ] Respond to guest inquiries

### Updates
If you need to make changes:
- [ ] Edit `src/wedding.config.ts`
- [ ] Test locally: `npm run dev`
- [ ] Commit and push to GitHub
- [ ] Vercel auto-deploys
- [ ] Changes live in ~2 minutes

### Analytics (Optional)
- [ ] Setup Vercel Analytics (optional)
- [ ] Monitor page views
- [ ] Track user engagement

## Troubleshooting During Deployment

### Build Failures on Vercel
- [ ] Check Vercel build logs
- [ ] Verify environment variables
- [ ] Ensure no `.env.local` in repo
- [ ] Check for TypeScript errors
- [ ] Rebuild on Vercel dashboard

### RSVP Form Not Working
- [ ] Check browser console (F12)
- [ ] Verify Supabase credentials in Vercel
- [ ] Test API endpoint directly
- [ ] Check network requests
- [ ] Verify Supabase table exists

### Admin Dashboard Issues
- [ ] Verify admin password correct
- [ ] Check JWT_SECRET_KEY set
- [ ] Clear browser cache
- [ ] Try incognito mode
- [ ] Check browser console

### Map Not Loading
- [ ] Verify mapEmbedUrl is correct
- [ ] Check URL not truncated
- [ ] Verify it's Google Maps embed code
- [ ] Test in different browser

### Performance Issues
- [ ] Check Vercel Analytics
- [ ] Verify Supabase query performance
- [ ] Check file sizes
- [ ] Clear browser cache
- [ ] Try different network

## Security Verification

Before Going Live:
- [ ] `.env.local` NOT committed to GitHub
- [ ] `.env.local` added to `.gitignore` ✓
- [ ] ADMIN_PASSWORD is strong (12+ chars)
- [ ] JWT_SECRET_KEY is unique (32+ chars)
- [ ] Never share admin password
- [ ] Database only accepts correct RSVP structure
- [ ] RLS policies properly configured
- [ ] No console warnings about security

## Final Verification Checklist

One Week Before Wedding:
- [ ] Website fully functional
- [ ] All customizations complete
- [ ] Admin dashboard working
- [ ] Guests can submit RSVPs
- [ ] You can access responses
- [ ] Backup of data plan in place

Day Before Wedding:
- [ ] Website still live and working
- [ ] All RSVPs reviewed
- [ ] No outstanding technical issues
- [ ] Backup of all response data

## Accessibility & Test Scripts

- [ ] Site respects `prefers-reduced-motion` for users who request reduced motion (styles in `src/app/globals.css`).
- [ ] To disable animations manually (for debugging or low-power devices), add `no-animations` to the `<body>` element.
- [ ] A helper script is provided at `scripts/insert_test_rsvp.js` to insert a test RSVP into your Supabase `rsvps` table. It reads `.env.local` for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Run the script locally to verify Supabase connectivity:

```bash
npm run seed:test
```

Confirm the row exists in Supabase (`SELECT * FROM rsvps;`) and that the admin dashboard shows it.

## Congratulations! 🎉

Your wedding website is live and ready!

Next steps:
1. Share the link with all guests
2. Monitor responses as they come in
3. Use the admin dashboard to track attendance
4. Export data regularly for backup
5. Enjoy your special day!

---

**Keep this checklist for future reference**

Questions? Refer to:
- `README.md` - Full documentation
- `SETUP.md` - Setup instructions
- `QUICK_REFERENCE.md` - Quick lookup
- `PROJECT_OVERVIEW.md` - Project overview
