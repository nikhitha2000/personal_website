# Deployment Guide for Personal Website

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `nikhitha-personal-website` (or any name you prefer)
4. Make it **Public** (for free hosting) or **Private**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these in your terminal:

```bash
# Make sure you're in the Website directory
cd "C:\Users\Admin\OneDrive\Desktop\Nikhitha's folders\Website"

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Personal portfolio website"

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nikhitha-personal-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your repository: `nikhitha-personal-website`
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy" (no configuration needed!)
7. Your site will be live in ~2 minutes at: `https://your-project-name.vercel.app`

**Vercel automatically:**
- Builds your project
- Deploys on every push to GitHub
- Provides HTTPS
- Gives you a custom domain option

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Alternative: Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/nikhitha-personal-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Quick Commands Reference

```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

## Troubleshooting

If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop app for easier Git operations

