# Quick Deployment Steps

## 🚀 Fastest Way: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

**Option A: If you already have a GitHub repository URL:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

**Option B: Create new repository first:**
1. Go to https://github.com/new
2. Create a new repository (name it: `personal-website` or `nikhitha-portfolio`)
3. Copy the repository URL
4. Then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Visit: https://vercel.com
2. Click "Sign Up" → Use GitHub
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy" (Vercel auto-detects Vite!)
6. Done! Your site is live in 2 minutes! 🎉

---

## 📝 Current Git Status

Before pushing, make sure all files are committed:

```bash
# Check what needs to be committed
git status

# Add all files
git add .

# Commit
git commit -m "Initial commit: Personal portfolio website"

# If you haven't set up remote yet, add it:
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

---

## 🎯 What You Need:

1. **GitHub Account** (free) - https://github.com/signup
2. **Vercel Account** (free) - https://vercel.com/signup

Both are free and take 2 minutes to set up!

---

## 💡 Pro Tips:

- Vercel automatically deploys when you push to GitHub
- You get a free HTTPS domain
- Can add custom domain later
- Free tier is perfect for personal websites

