from PIL import Image

# Open the original high-res png
img = Image.open('public/images/favicon/apple-touch-icon.png')
img = img.convert("RGBA")

# Get bounding box of non-transparent pixels
bbox = img.getbbox()
if bbox:
    # Crop to just the logo
    cropped = img.crop(bbox)
    
    # Create a new 180x180 white background image
    new_img = Image.new("RGBA", (180, 180), "white")
    
    # We want a tiny bit of padding so it doesn't touch the very edges of the square
    # Let's target a max size of 150x150 for the logo inside the 180x180 box
    max_size = 150
    w, h = cropped.size
    ratio = min(max_size / w, max_size / h)
    new_w = int(w * ratio)
    new_h = int(h * ratio)
    
    resized_logo = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Paste centered
    offset_x = (180 - new_w) // 2
    offset_y = (180 - new_h) // 2
    
    new_img.paste(resized_logo, (offset_x, offset_y), resized_logo)
    
    # Convert to RGB to ensure no transparency issues on iOS
    final = new_img.convert("RGB")
    final.save('public/apple-touch-icon.png')
    final.save('public/apple-touch-icon-precomposed.png')
    final.save('public/favicon.png')
    print("Icons regenerated successfully!")
else:
    print("Failed to get bounding box")
