💖 Valentine's Day Interactive Card

This is a fun and interactive web-based Valentine's Day card that asks your special someone "Will you be my Valentine?". If they click "Yes", a slideshow of images (simulating a GIF) appears along with background music. If they try to click "No", the button moves away, making it hard to say no!

🚀 Features

✅ Interactive Yes/No Prompt - Asks your Valentine if they accept your request.✅ Moving "No" Button - The "No" button moves away when hovered over, making it difficult to click.✅ "Are You Sure?" Prompt - Clicking "No" triggers an alert message asking for confirmation.✅ GIF-like Slideshow - Clicking "Yes" starts a looping slideshow of images from the img folder.✅ Background Music - Romantic music plays when "Yes" is selected.✅ Auto Image Loading - Dynamically fetches images from the img folder without needing to manually list them.

📂 Project Structure

📁 valentine-card
 ├── 📁 img             # Folder containing images for the slideshow
 ├── 📄 index.html      # Main HTML file for the card
 ├── 📄 styles.css      # CSS file for styling
 ├── 📄 script.js       # JavaScript for interactions
 ├── 📄 get_images.php  # PHP script to fetch images from the folder
 ├── 📄 README.md       # Project documentation

🛠️ Setup Instructions

1️⃣ Download the project files and place them in a web server environment (e.g., XAMPP, MAMP, or an online PHP host).2️⃣ Add your images inside the img folder (e.g., image1.jpg, image2.jpg, etc.).3️⃣ Replace the background music (path_to_your_music.mp3 in index.html) with your own audio file.4️⃣ Run the project by opening index.html in your browser (make sure PHP is enabled to fetch images dynamically).

🎨 Customization

Change Background Music: Replace path_to_your_music.mp3 with your preferred song.

Modify Image Transition Speed: In script.js, adjust the setInterval() time in startGifEffect() to change the slideshow speed.

Update Styling: Edit styles.css to tweak button colors, fonts, or layout.

❤️ How It Works

The page asks, "Will you be my Valentine?"

If "Yes" is clicked:

The #response section appears.

Background music plays.

A slideshow of images from the img folder starts looping.

If "No" is hovered over, it moves away to prevent clicking.

If "No" is clicked, an alert "Are you sure?" appears.

Now, your Valentine HAS to say Yes! 😆💕

📝 License

This project is free to use and modify for personal or romantic purposes. Spread love and happiness! ❤️

