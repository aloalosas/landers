# Freecash Landing Page - Age-Gated with SubID Tracking

## 🎯 Features

- **Age Verification**: Two-step process with Over 21 / Under 21 options
- **Auto SubID Tracking**: Automatically extracts SubID from URL parameters
- **TTCLID Extraction**: Captures TikTok Click ID for better attribution
- **OS Detection**: Detects iOS/Android/Desktop and transforms URLs accordingly
- **Smart Mobile Redirects**: Escapes TikTok in-app browser on Android using intent:// protocol
- **TikTok Pixel Integration**: Pixel ID `D4M5GRRC77U10O2JF9J0`
- **Enhanced Event Tracking**: 
  - **ViewContent** ($0.49) - Fires on page load
  - **AddToCart** ($1.00) - Fires on button click
  - **CompleteRegistration** ($0.49) - Fires on button click
  - **Purchase** ($1.00) - Fires on button click
  - **CompletePurchase** ($0.49) - Fires on button click
  - All events include TTCLID when available
- **Dual SubID Parameters**: Both s1 and s2 parameters for redundant tracking
- **Anti-Detection**: Console protection and right-click disabled
- **Smart Redirects**:
  - **Over 21** → RewardOrbit (uses `&s1=` and `&s2=` for SubID)
  - **Under 21** → Afftrackr (uses `&s1=` and `&s2=` for SubID)

## 📋 Files Included

```
├── index.html                      # Main landing page
├── logo-do-tik-tok_578229-290.jpg # TikTok logo
├── backblue.gif                    # Background image
├── fade.gif                        # Background image
└── README.md                       # This file
```

## 🚀 Deployment (GitHub + Cloudflare Pages)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `freecash-landing` or `tiktok-offers`
3. Set it to **Public** or **Private** (both work with Cloudflare)

### Step 2: Upload Files

**Option A: GitHub Web Interface**
1. Click "Add file" → "Upload files"
2. Drag and drop all 4 files (index.html + 3 images)
3. Commit changes

**Option B: Git Command Line**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** in the left sidebar
3. Click **"Create a project"**
4. Click **"Connect to Git"**
5. Authorize GitHub and select your repository
6. Configure build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
7. Click **"Save and Deploy"**

### Step 4: Get Your URL

Cloudflare will assign you a URL like:
```
https://your-repo-name.pages.dev
```

You can also add a custom domain in Cloudflare Pages settings.

## 🔗 Testing the Landing Page

### Test URLs with SubID

**Example 1: Over 21 User**
```
https://your-site.pages.dev/?subID=bc1_apple_dec13_v1
```
- User clicks "I'm over 21"
- Sees success page
- Clicks "Download Now"
- Redirects to: `https://rewardorbit.com/r/eyJ0IjoiZnJlZWNhc2gtY3BpIiwidSI6IjY5NjM1OTE2MTFjOTZjMzMzNDEzMWJjYSIsInRzIjoxNzY4ODU3Mjk1OTczfQ&s1=bc1_apple_dec13_v1&s2=bc1_apple_dec13_v1`

**Example 2: Under 21 User**
```
https://your-site.pages.dev/?subID=bc2_samsung_jan20_v2
```
- User clicks "I'm under 21"
- Sees success page (with wire transfer payout text)
- Clicks "Download Now"
- Redirects to: `https://t.afftrackr.com/?oex3=JG1Y6Vp0LH%2bbjh3bjrn51TXGZpjGMHexvQJDRoz7h5U%3d&s1=bc2_samsung_jan20_v2&s2=bc2_samsung_jan20_v2`

**Example 3: Android User (Intent Protocol)**
```
https://your-site.pages.dev/?subID=bc1_pixel_jan21_v1
```
- Android user clicks "Download Now"
- URL transforms to: `intent://t.afftrackr.com/?oex3=...&s1=bc1_pixel_jan21_v1&s2=bc1_pixel_jan21_v1#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`
- Opens in external browser (escapes TikTok in-app browser)

## 📊 SubID Parameter Detection

The landing page automatically detects SubID from these URL parameters:
- `?subID=`
- `?subid=`
- `?sub_id=`
- `?sub=`
- `?s1=`
- `?s2=`
- `?source=`

**Example TikTok URL:**
```
https://your-site.pages.dev/?subID=bc1_apple_dec13_v1&ttclid=E_C_P_CuEBoU3r2...
```

The page will extract `bc1_apple_dec13_v1` as the SubID.

## 🎯 TikTok Events Tracked

**On Page Load:**
1. **ViewContent**
   ```javascript
   {
     content_type: 'product',
     content_id: 'freecash-tiktok-rewards',
     value: 0.49,
     currency: 'USD',
     ttclid: 'E_C_P_...' // if available
   }
   ```

**When user clicks the final "Download Now" button:**

2. **AddToCart**
   ```javascript
   {
     content_type: 'product',
     content_id: 'freecash-tiktok-rewards',
     value: 1.00,
     currency: 'USD',
     ttclid: 'E_C_P_...' // if available
   }
   ```

3. **CompleteRegistration**
   ```javascript
   {
     content_type: 'product',
     content_id: 'freecash-tiktok-rewards',
     value: 0.49,
     currency: 'USD',
     ttclid: 'E_C_P_...' // if available
   }
   ```

4. **Purchase**
   ```javascript
   {
     content_type: 'product',
     content_id: 'freecash-tiktok-rewards',
     value: 1.00,
     currency: 'USD',
     ttclid: 'E_C_P_...' // if available
   }
   ```

5. **CompletePurchase**
   ```javascript
   {
     content_type: 'product',
     content_id: 'freecash-tiktok-rewards',
     value: 0.49,
     currency: 'USD',
     ttclid: 'E_C_P_...' // if available
   }
   ```

All events are tracked **client-side only** using TikTok Pixel ID: `D4M5GRRC77U10O2JF9J0`

## 🛠️ Customization

### Change Redirect URLs

Edit the `buildRedirectUrl()` function in `index.html`:

```javascript
function buildRedirectUrl(age, subID) {
    let baseUrl = '';
    let paramName = '';
    
    if (age === 'over21') {
        baseUrl = 'YOUR_REWARDORBIT_URL';
        paramName = 's2';
    } else if (age === 'under21') {
        baseUrl = 'YOUR_AFFTRACKR_URL';
        paramName = 's1';
    }
    
    // Rest of the function...
}
```

### Change TikTok Pixel ID

Find this line in the `<head>` section:

```javascript
ttq.load('D4M5GRRC77U10O2JF9J0');
```

Replace with your pixel ID.

## 🐛 Debugging

Open browser console (F12) to see internal logging (console protection is disabled on localhost):
- **On page load:**
  - `✅ ViewContent event fired on page load`
- SubID extraction: `✅ SubID found from parameter "subID": bc1_apple_dec13_v1`
- TTCLID extraction: `✅ TTCLID found in URL: E_C_P_CuEBoU3r2UglBP3_UL...`
- Age selection: `🎂 Age selected: over21`
- **On button click:**
  - `🚀 Final button clicked! Firing client-side events...`
  - `✅ Client-side: AddToCart, CompleteRegistration, Purchase, and CompletePurchase OK`
  - `✅ TTCLID attached to all events: E_C_P_CuEBoU...`
  - `📊 Age: over21 | SubID: bc1_apple_dec13_v1 | TTCLID: E_C_P_... | OS: Android`
  - `🔀 Redirecting to: intent://rewardorbit.com/...`

**Note:** Console protection is active on production domains. Use localhost for debugging or check `window._console.log()` for internal logs.

## 📱 Mobile Responsive

The landing page is fully responsive and optimized for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## ✅ Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (iOS 12+)
- Samsung Internet

## 📄 License

This is a custom landing page for affiliate marketing campaigns.

---

**Need Help?**
Check browser console for debugging info or contact support.
