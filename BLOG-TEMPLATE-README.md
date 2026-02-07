# Gaingo Blog Template - Usage Guide

## Quick Start

Use `blog-template.html` to create new blog posts with built-in social sharing and SEO optimization.

## Step-by-Step Instructions

### 1. Copy the Template
```bash
cp blog-template.html blog-your-new-post.html
```

### 2. Replace All Placeholders

Open your new file and find/replace these placeholders:

#### Required Replacements:

| Placeholder | Example | Description |
|------------|---------|-------------|
| `[BLOG_FILENAME]` | `blog-your-new-post.html` | Your new blog filename |
| `[BLOG_TITLE]` | `How to Save Money with EVs` | Blog post title |
| `[BLOG_TITLE_ENCODED]` | `How%20to%20Save%20Money%20with%20EVs` | URL-encoded title (spaces = %20) |
| `[BLOG_DESCRIPTION]` | `Learn how electric motorbikes can save you up to 70% on fuel costs in Zambia.` | Short description (150-160 chars) |
| `[BLOG_IMAGE]` | `my-blog-image.jpg` | Image filename in `/images/` folder |
| `[BLOG_CATEGORY]` | `EV Benefits` | Category (e.g., Technology, Business, Environment) |
| `[BLOG_DATE]` | `February 8, 2025` | Publication date |
| `[BLOG_READ_TIME]` | `5` | Estimated reading time in minutes |

#### Content Placeholders:

| Placeholder | Description |
|------------|-------------|
| `[BLOG_INTRO_PARAGRAPH]` | Opening paragraph |
| `[SECTION_HEADING_1]` | First section heading |
| `[SECTION_CONTENT_1]` | First section content |
| `[SECTION_HEADING_2]` | Second section heading |
| `[SECTION_CONTENT_2]` | Second section content |
| `[SECTION_HEADING_3]` | Third section heading |
| `[SECTION_CONTENT_3]` | Third section content |
| `[HIGHLIGHT_TITLE]` | Highlighted box title |
| `[HIGHLIGHT_CONTENT]` | Highlighted box content |
| `[BULLET_POINT_1]` | First bullet point |
| `[BULLET_POINT_2]` | Second bullet point |
| `[BULLET_POINT_3]` | Third bullet point |

### 3. Add Your Blog Image

1. Place your blog image in the `/images/` folder
2. Use a descriptive filename (e.g., `ev-savings-guide.jpg`)
3. Recommended size: 1200x630px for best social media previews

### 4. Write Your Content

Replace the placeholder content sections with your actual blog content. You can:
- Add more `<h2>` and `<h3>` headings
- Add more paragraphs `<p>`
- Add more bullet lists `<ul><li>`
- Add images: `<img src="images/your-image.jpg" alt="Description">`
- Add highlight boxes (copy the existing `.highlight-box` structure)

### 5. Add to Blog Index

Update `blog.html` to include your new blog post:

```html
<div class="blog-card">
    <div class="blog-image">
        <span class="blog-category">[BLOG_CATEGORY]</span>
        <img src="images/[BLOG_IMAGE]" alt="[BLOG_TITLE]">
    </div>
    <div class="blog-content">
        <div class="blog-date">
            <i class="far fa-calendar"></i>
            <span>[BLOG_DATE]</span>
        </div>
        <h3>[BLOG_TITLE]</h3>
        <p class="blog-excerpt">[BLOG_DESCRIPTION]</p>
        <a href="[BLOG_FILENAME]" class="read-more">
            Read More <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

### 6. Test Your Blog Post

1. Open the file in a browser
2. Check all links work
3. Test social share buttons
4. Test on mobile (responsive design)
5. Verify images load correctly

### 7. Deploy

```bash
git add blog-your-new-post.html blog.html images/your-image.jpg
git commit -m "Add new blog post: [BLOG_TITLE]"
git push origin main
```

## Features Included

✅ **Social Share Buttons** - Facebook, Twitter, LinkedIn, WhatsApp, Email  
✅ **Open Graph Tags** - Rich previews on social media  
✅ **Twitter Cards** - Optimized Twitter sharing  
✅ **Responsive Design** - Mobile-friendly layout  
✅ **SEO Optimized** - Proper meta tags and structure  
✅ **Consistent Branding** - Matches Gaingo website design  
✅ **Call-to-Action** - Built-in CTA section  
✅ **Navigation** - Full header and footer included  

## Example: Creating a New Blog Post

Let's create "5 Ways EVs Boost Your Business":

1. **Copy template:**
   ```bash
   cp blog-template.html blog-5-ways-evs-boost-business.html
   ```

2. **Replace placeholders:**
   - `[BLOG_FILENAME]` → `blog-5-ways-evs-boost-business.html`
   - `[BLOG_TITLE]` → `5 Ways EVs Boost Your Business`
   - `[BLOG_TITLE_ENCODED]` → `5%20Ways%20EVs%20Boost%20Your%20Business`
   - `[BLOG_DESCRIPTION]` → `Discover how electric motorbikes can transform your delivery business with lower costs and higher profits.`
   - `[BLOG_IMAGE]` → `ev-business-boost.jpg`
   - `[BLOG_CATEGORY]` → `Business`
   - `[BLOG_DATE]` → `February 8, 2025`
   - `[BLOG_READ_TIME]` → `6`

3. **Write your content** in the article section

4. **Add to blog.html** index page

5. **Push to GitHub** and deploy!

## Tips for Great Blog Posts

- **Keep titles under 60 characters** for better SEO
- **Write descriptions between 150-160 characters**
- **Use high-quality images** (1200x630px recommended)
- **Break content into sections** with clear headings
- **Include bullet points** for easy scanning
- **Add a clear call-to-action** at the end
- **Proofread** before publishing
- **Test social sharing** to ensure previews look good

## Need Help?

- Check existing blog posts for examples
- All blog posts follow the same structure
- Social share buttons work automatically
- Open Graph tags ensure rich social previews

---

**Template Version:** 1.0  
**Last Updated:** February 2025  
**Maintained by:** Gaingo Team
