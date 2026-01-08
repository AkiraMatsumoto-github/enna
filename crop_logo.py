from PIL import Image, ImageChops

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Create a white background image to compare against
        bg = Image.new(img.mode, img.size, (255, 255, 255, 255))
        
        # Find the difference between the image and white background
        diff = ImageChops.difference(img, bg)
        
        # Convert difference to grayscale to check brightness
        diff = ImageChops.add(diff, diff, 2.0, -100) # Enhance contrast of difference
        
        # Get bounding box of the non-zero difference
        # We can also use a threshold to ignore very faint differences
        bbox = diff.getbbox()
        
        if bbox:
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Successfully cropped image to {cropped_img.size} and saved to {output_path}")
        else:
            print("No content found to crop (image is blank/white).")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = "/Users/matsumotoakira/.gemini/antigravity/brain/c89622ad-1169-410b-9c2f-0c416509e514/enna_logo_handwritten_white_bg_1767792561564.png"
    output_file = "/Users/matsumotoakira/Documents/Private_development/enna/public/logo.png"
    
    crop_image(input_file, output_file)
