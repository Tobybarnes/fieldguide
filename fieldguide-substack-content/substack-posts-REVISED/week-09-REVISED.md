# Week 9: See (Practice 06: Photo Log)

*Week 9 of Field Guide. You've built tools for capturing links, remembering thoughts, tracking movement, and collecting records. This week: a tool for seeing more clearly.*

---

## Attention as Practice

Masahiro Mori wrote about robots performing tasks with "perfect, selfless devotion." What would that look like for humans?

Photography teacher Minor White said: "Be still with yourself until the object of your attention affirms your presence."

The three questions in this practice force that stillness:
- What caught your eye?
- What were you trying to capture?
- What do you see now that you look again?

This is about training attention. The camera becomes a tool for noticing—like how a robot's mechanical precision can reveal principles of the universe.

You're trying to see clearly. The tool (camera, questions, Claude) helps you pay attention in a way you might not naturally.

---

## Practice 06: See

**Build:** Photo Log
**Principle:** Photography as attention practice

### Why Build This?

You already have Apple Photos. Google Photos. Instagram. VSCO. Day One with photo attachments. Your phone automatically organizes photos by date, face recognition, and location.

These tools are good at storage and organization. They're not good at reflection. Apple Photos shows you "Memories" you didn't ask for. Instagram shows you likes and compares your photos to others. Google Photos uses your images to train AI models.

More importantly: none of them slow you down enough to actually see what you photographed. You take a photo, it goes into a grid with 10,000 others, you never look at it again. The photo becomes proof you were somewhere, not a record of what you noticed.

This tool forces you to look twice. Once when you take the photo (what caught your eye?). Again when you answer the reflection questions (what do you see now?). The questions create a gap between capture and consumption. That gap is where seeing happens.

No social features. No likes. No comparison to other photographers. No algorithmic "Memories." Just your photos and your observations. The tool disappears. The practice remains.

### What You'll Build

A visual journal that pairs photos with reflection. Not Instagram. Not a portfolio. A tool for noticing what you notice.

Features:
- Upload a photo
- Answer three reflection questions
- View all your entries in a grid
- Click to see photo full-size with reflections
- Optional: date-based browsing
- Storage: localStorage for reflections, base64 for images (keeps everything self-contained)

### Why This Tool

Most photo apps optimize for sharing, likes, engagement. They turn photography into performance.

This tool is private. No one sees it but you. The questions force you to slow down and look at what you photographed.

Photography trains you to see. This tool supports that practice.

### Step 01: Describe the basic structure

**Prompt to copy:**

```
I want to build a photo journal as a single HTML file.

Features:
- Upload a photo
- Display the photo as a preview
- Three text areas for reflection questions:
  1. What caught your eye?
  2. What were you trying to capture?
  3. What do you see now that you look again?
- Save button to store the photo and reflections
- Display all entries as a grid of thumbnails
- Click a thumbnail to view full photo + reflections
- Store everything in localStorage (convert images to base64)

Keep design minimal and focused on the images.
```

### Step 02: Test the basics

Save as `photos.html` and open it.

Try:
- Uploading a photo (any photo from your computer)
- Answering the three questions
- Saving the entry
- Uploading another photo
- Clicking a thumbnail to view full entry

Does it work? Can you see both entries?

### Step 03: Improve the grid layout

**Prompt to copy:**

```
Update the grid:
- Make thumbnails larger (200px square)
- Add subtle borders and shadows to each thumbnail
- Show the date below each thumbnail
- Add hover effect (slight zoom when mouse hovers over thumbnail)
- Make the grid responsive (fewer columns on smaller screens)
```

Test: Does the grid feel good to browse? Can you see enough of each photo?

### Step 04: Add full-view modal

**Prompt to copy:**

```
When I click a thumbnail:
- Show the full image in a modal/overlay
- Display the three reflection questions and answers below the image
- Show the date
- Add close button (X in corner)
- Clicking outside the modal should close it
- Add Previous/Next buttons to browse through entries
```

Test: Can you browse through all your entries using the arrows? Does the modal close properly?

### Step 05: Add filtering and search

**Prompt to copy:**

```
Add these features:
- Search box that filters entries based on reflection text
- Date picker to show only entries from a specific month
- Option to sort by newest/oldest
- Show count of total entries
```

### Extensions (Optional)

**Photo metadata:**
```
Extract and display EXIF data from uploaded photos:
- Camera make/model
- Date taken
- Settings (ISO, aperture, shutter speed if available)
```

**Tags and categories:**
```
Add optional tags to each entry.
Show tag cloud.
Filter by tag.
```

**Export:**
```
Add export button that:
- Creates HTML page with all photos and reflections
- Generates PDF of all entries
- Downloads all photos as ZIP
```

**Editing:**
```
Add edit button to each entry to update reflections without re-uploading photo.
```

**Location:**
```
If photo has GPS data, show where it was taken on a small map.
```

## Troubleshooting

**Problem:** Page loads extremely slowly when viewing photo log
**Likely cause:** Base64-encoded images are too large and bloating the file
**Solution:** Ask Claude: "Resize uploaded images to max 1200px width before converting to base64. Compress images to reduce file size while maintaining quality."

**Problem:** "Quota exceeded" error when adding new photos
**Likely cause:** localStorage has a 5-10MB limit; photos fill this quickly
**Solution:** You've hit the storage limit. Options: (1) Delete old entries, (2) Ask Claude: "Limit the photo log to 50 most recent entries," or (3) Ask Claude: "Switch to IndexedDB instead of localStorage for much larger storage capacity."

**Problem:** Photos appear rotated incorrectly
**Likely cause:** EXIF orientation data isn't being read from the image
**Solution:** Ask Claude: "Read and apply EXIF orientation data so photos display with the correct rotation."

**Problem:** Modal viewer doesn't close on mobile devices
**Likely cause:** Close button is too small or tap target isn't responsive
**Solution:** Ask Claude: "Make the modal close button much larger and easier to tap on mobile. Increase the tap target size to at least 44x44 pixels."

**Problem:** Can't navigate between photos in the modal viewer
**Likely cause:** No prev/next functionality in modal
**Solution:** Ask Claude: "Add left and right arrows in the modal so I can navigate to the previous and next photos without closing the modal."

**Problem:** Photos look pixelated or low quality
**Likely cause:** Images are being compressed too aggressively
**Solution:** Ask Claude: "Increase image quality during compression. Use 0.9 quality for JPEG compression instead of lower values."

**Problem:** Takes too long to upload and process photos
**Likely cause:** Large images are being processed in the main thread
**Solution:** Ask Claude: "Show a loading indicator while images are being processed. Process images asynchronously so the UI doesn't freeze."

**Problem:** Want to add multiple photos at once
**Likely cause:** File input only accepts one photo at a time
**Solution:** Ask Claude: "Allow multiple photo uploads. Let me select several photos at once and add them all with the same reflection notes."

## Reflection

Minor White taught photography as spiritual practice. The camera doesn't capture reality—it reveals what you're paying attention to.

The three questions in this tool aren't random:

**What caught your eye?** Forces you to notice what drew you initially. Often you don't know why something interests you until you articulate it.

**What were you trying to capture?** Your intention. What you thought you saw. This is usually different from what's actually in the photo.

**What do you see now?** Looking again, with more attention. This is where the practice is—training yourself to look past your first impression.

Mori believed robots revealed universal principles through mechanical precision. Photography works similarly—it fixes a moment so you can see it more clearly than you did when you were there.

This tool supports that seeing. It makes you more attentive to what you photograph.

Some questions:
- Do the three prompts help or hinder your reflection?
- Would you use this regularly, or just occasionally?
- What would make this feel more like practice and less like work?

The best tools shape behavior gently. If answering three questions feels like a chore, maybe one question is enough. Or maybe just the photo and a date. Adjust until it feels sustainable.

## Next Week

Practice 07: Gather. You'll build a personal dashboard—bringing together weather, tasks, links, and whatever else you want to see when you open your browser. Your digital home screen.

---

**Note:** If you're not a photographer, that's fine. The practice here is about attention, not photography. You could adapt this tool for any kind of visual collection: drawings, designs, screenshots, things you notice. The structure works for anything you want to look at and reflect on.
