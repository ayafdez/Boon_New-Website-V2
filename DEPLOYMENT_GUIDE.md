# Complete Deployment Guide

## Prerequisites

- Node.js 18+ installed
- GitHub account
- Vercel account (free)

## Step-by-Step Deployment

### Part 1: Prepare Your Code

1. **Navigate to project**:
   ```bash
   cd boon-website-complete
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to verify everything works

4. **Build to verify**:
   ```bash
   npm run build
   ```
   This should complete without errors

### Part 2: Push to GitHub

1. **Create new repository on GitHub**:
   - Go to github.com
   - Click "New repository"
   - Name it (e.g., `boon-website-v2`)
   - Keep it private if needed
   - **DO NOT** initialize with README (we already have files)
   - Click "Create repository"

2. **Initialize git in your project**:
   ```bash
   git init
   ```

3. **Add all files**:
   ```bash
   git add .
   ```

4. **Commit**:
   ```bash
   git commit -m "Initial commit - Boon website complete with all 5 pages"
   ```

5. **Add remote** (replace with your actual URL):
   ```bash
   git remote add origin https://github.com/boon-coaching/YOUR-REPO-NAME.git
   ```

6. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Part 3: Deploy on Vercel

1. **Go to Vercel**:
   - Visit [https://vercel.com](https://vercel.com)
   - Sign in (or create free account)

2. **Create New Project**:
   - Click "Add New Project"
   - Click "Import Git Repository"
   - Select your GitHub organization/account
   - Find your `boon-website-v2` repository
   - Click "Import"

3. **Configure Project** (Vercel auto-detects everything):
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `vite build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
   
   **Leave everything as default** - Vercel knows what to do!

4. **Deploy**:
   - Click "Deploy"
   - Wait ~2 minutes
   - **Done!** Your site is live

5. **Get Your URL**:
   - Vercel will show you the live URL
   - Format: `https://your-project-name.vercel.app`
   - Click "Visit" to see your live site

### Part 4: Set Up Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"

2. **Add Domain**:
   - Enter your domain (e.g., `www.boon.com`)
   - Click "Add"

3. **Update DNS**:
   - Vercel will show DNS records needed
   - Add these to your domain registrar
   - Typically add:
     - `A` record pointing to Vercel's IP
     - Or `CNAME` record pointing to `cname.vercel-dns.com`

4. **Wait for DNS**:
   - DNS propagation takes 5 minutes to 48 hours
   - Vercel auto-provisions SSL certificate
   - Your custom domain will be live with HTTPS

## Continuous Deployment

Once connected:
- **Push to main** = automatic production deployment
- **Create PR** = automatic preview deployment with unique URL
- **Merge PR** = automatic production update

## Environment Variables (If Needed)

1. **In Vercel Dashboard**:
   - Settings → Environment Variables

2. **Add Variables**:
   - Name: `VITE_API_URL`
   - Value: `https://api.example.com`
   - Environment: Production, Preview, Development

3. **In Code**:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## Troubleshooting

**Build Failed?**
- Check Node.js version (must be 18+)
- Run `npm install` locally first
- Check build logs in Vercel dashboard

**404 on Routes?**
- Vercel automatically handles React Router
- No extra configuration needed
- Routes work out of the box

**Fonts Not Loading?**
- Fonts load from Google Fonts CDN
- Already configured in `index.html`
- No action needed

## Rollback Deployment

If something goes wrong:
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

## Monitor Performance

- **Vercel Analytics**: Free tier available
- **Vercel Speed Insights**: See real user performance
- **Deployment logs**: Check for errors

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

**Your site is now live and auto-deploys on every push!**
