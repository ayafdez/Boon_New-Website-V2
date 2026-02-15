# Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Boon website - ready for deployment"

# Create main branch
git branch -M main

# Add your GitHub repository (create it first on GitHub)
git remote add origin https://github.com/boon-coaching/YOUR-REPO-NAME.git

# Push
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select your GitHub repository
4. Vercel will automatically detect:
   - Framework: Vite
   - Build Command: `vite build`
   - Output Directory: `dist`
5. Click "Deploy"

**Done!** Your site will be live in ~2 minutes.

### Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `www.boon.com`)
3. Update your DNS settings as instructed
4. SSL certificate is automatically provisioned

## Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Environment Variables

If you need environment variables:

1. Create `.env.local` file (already gitignored)
2. Add variables: `VITE_API_URL=https://api.example.com`
3. In Vercel Dashboard → Settings → Environment Variables
4. Add the same variables for Production/Preview

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` = automatic production deployment
- Every PR = automatic preview deployment
- Preview URLs shared automatically

## Performance Tips

The site is already optimized, but for even better performance:

1. **Add images**: Use WebP format, lazy loading
2. **Enable compression**: Vercel does this automatically
3. **Add caching headers**: Already configured by Vite
4. **Monitor**: Use Vercel Analytics (free tier available)

## Troubleshooting

**Build fails?**
- Check Node version (needs 18+)
- Run `npm install` locally first
- Check build logs in Vercel dashboard

**Routes not working?**
- Vercel automatically handles SPA routing
- No extra configuration needed for React Router

**Fonts not loading?**
- Fonts are loaded from Google Fonts CDN
- Already configured in `index.html`

## Roll back Deployment

In Vercel Dashboard:
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

Questions? Check [Vercel Documentation](https://vercel.com/docs) or contact your team.
