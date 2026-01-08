from PIL import Image
import sys

def crop_image_safe(input_path, output_path, threshold=254, padding=30):
    try:
        img = Image.open(input_path)
        img = img.convert("RGB")
        width, height = img.size
        pixels = img.load()
        
        min_x, max_x = width, 0
        min_y, max_y = height, 0
        
        found = False
        
        for y in range(height):
            for x in range(width):
                r, g, b = pixels[x, y]
                # Check if pixel is NOT white (darker than threshold)
                if r < threshold or g < threshold or b < threshold:
                    if x < min_x: min_x = x
                    if x > max_x: max_x = x
                    if y < min_y: min_y = y
                    if y > max_y: max_y = y
                    found = True
                    
        if found:
            # Add padding
            min_x = max(0, min_x - padding)
            min_y = max(0, min_y - padding)
            max_x = min(width, max_x + padding)
            max_y = min(height, max_y + padding)
            
            bbox = (min_x, min_y, max_x, max_y)
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Successfully cropped image to {cropped_img.size} from bbox {bbox} and saved to {output_path}")
        else:
            print("No content found (image is all white).")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = "/Users/matsumotoakira/.gemini/antigravity/brain/c89622ad-1169-410b-9c2f-0c416509e514/enna_logo_handwritten_white_bg_1767792561564.png"
    output_file = "/Users/matsumotoakira/Documents/Private_development/enna/public/logo.png"
    
    crop_image_safe(input_file, output_file)
