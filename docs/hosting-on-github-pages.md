# Hosting a Portfolio on GitHub Pages with a Custom Domain

This guide walks through the process of hosting a Vite-based portfolio website on GitHub Pages with a custom domain (borrelunde.com).

## Prerequisites

- GitHub account (borrelunde)
- Public GitHub repository (portfolio)
- Custom domain (borrelunde.com)
- Node.js and npm installed

> **Note**: GitHub Pages is free for public repositories. Making your repository public allows you to host your site without an enterprise account.

## Step 1: Configure Vite for GitHub Pages

First, create a `vite.config.js` file in the project root:

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio/', // Repository name
})
```

> **Note**: For a custom domain, set `base: '/'` for better results.

## Step 2: Install the gh-pages Package

Install the gh-pages package to simplify deployment to GitHub Pages:

```bash
npm install gh-pages --save-dev
```

## Step 3: Update package.json

Add a deploy script to package.json:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

## Step 4: Build and Deploy the Site

Run the deploy command:

```bash
npm run deploy
```

This process:
1. Builds the project
2. Creates a gh-pages branch (if it doesn't exist)
3. Pushes the contents of the dist folder to the gh-pages branch

## Step 5: Configure GitHub Repository Settings

1. Go to the GitHub repository (https://github.com/borrelunde/portfolio)
2. Navigate to Settings > Pages
3. Under "Source", select "Deploy from a branch"
4. Select the "gh-pages" branch and "/ (root)" folder
5. Click "Save"

## Step 6: Configure the Custom Domain

### 6.1 Add the Custom Domain in GitHub

1. In the same GitHub Pages settings section
2. Enter "borrelunde.com" in the "Custom domain" field
3. Click "Save"
4. Check "Enforce HTTPS" (recommended for security)

### 6.2 Configure DNS Records

Configure DNS settings to point to GitHub Pages:

1. Log in to the domain registrar's website
2. Find the DNS management section
3. Add the following records:

   **Option 1: Apex domain (borrelunde.com)**

   A records pointing to GitHub Pages' IP addresses:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

   **Option 2: www subdomain (www.borrelunde.com)**

   CNAME record:
   ```
   CNAME    www    borrelunde.github.io
   ```

   > **Note**: For best results, configure both the apex domain and www subdomain.

### 6.3 Create a CNAME File

Create a file named `CNAME` in the project's `public` directory with the domain name:

```
borrelunde.com
```

Adding this file ensures the custom domain setting persists between deployments.

## Step 7: Verify the Setup

1. Wait for DNS changes to propagate (can take up to 48 hours)
2. Visit the custom domain (borrelunde.com)
3. Verify that the website loads correctly
4. Check that HTTPS is working properly

## Troubleshooting

### Site Not Loading

- Ensure DNS changes have propagated (can take up to 48 hours)
- Verify the CNAME file is correctly set up
- Check GitHub Pages settings to ensure the custom domain is configured

### HTTPS Not Working

- Make sure "Enforce HTTPS" is checked in GitHub Pages settings
- Wait a few hours for the SSL certificate to be issued

### 404 Errors

- Ensure vite.config.js has the correct base path
- Check that the gh-pages branch contains the built website files

## Maintaining the Site

To update the website:

1. Make changes to the code
2. Run `npm run deploy` again
3. Wait a few minutes for changes to propagate

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
