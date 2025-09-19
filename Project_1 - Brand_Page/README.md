# 🏷️ Brand Page (React + TailwindCSS)

A simple responsive brand landing page built with **React** and **Tailwind CSS**.  
This project demonstrates modular component structure with a navigation bar, hero content section, and styled images.

---

## 📂 Project Structure

```bash
src/
 ├─ components/
 │   ├─ NavBar.jsx           # Navigation bar with logo & menu options
 │   |─ ContentComponent.jsx # Hero section with text, buttons, and product image
 |   └─ BrandPage.jsx        # Page layout combining NavBar and ContentComponent
 └─ app.jsx
     
```

---

## ✨ Features

- **React Components**: Separated into `NavBar`, `ContentComponent`, and `BrandPage`.
- **Responsive Layout**: Uses `flexbox` + Tailwind utilities (`vw`, `vh`, `clamp()`).
- **Navigation Bar**: Includes brand logo, navigation links, and login button.
- **Hero Section**:
  - Large heading + descriptive text
  - Buttons (`Shop Now`, `Category`)
  - Logos of external sellers (Flipkart, Amazon)
  - Product image with **custom drop-shadow** that respects PNG transparency
- **Styled with TailwindCSS**:
  - Flexbox layouts
  - Responsive typography (`vw` units)
  - Shadows, spacing, borders, and colors

---

## 🖼️ Preview

Here’s how the Brand Page looks:
<img width="1365" height="602" alt="image" src="https://github.com/user-attachments/assets/d9ae6ece-7f7c-401d-b60e-f5a88fce362c" />

