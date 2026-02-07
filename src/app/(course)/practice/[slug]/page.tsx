'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ScrambleText } from '../../../components/ScrambleText';
import { CopyablePrompt } from '../../../components/CopyablePrompt';

interface Step {
  title: string;
  description: string;
  prompt?: string;
  tip?: string;
  image?: string;
  imageAlt?: string;
}

interface AdditionalPrompt {
  title: string;
  prompt: string;
  use: string;
}

interface TroubleshootingItem {
  problem: string;
  solution: string;
}

interface Practice {
  num: string;
  title: string;
  build: string;
  principle: string;
  overview: string;
  whatYoullBuild?: string;
  heroImage?: string;
  heroImageAlt?: string;
  steps: Step[];
  prompts?: AdditionalPrompt[];
  troubleshooting?: TroubleshootingItem[];
  reflection?: string[];
  extensions?: string[];
}

const practices: Record<string, Practice> = {
  'starting': {
    num: '01',
    title: 'Starting',
    build: 'Personal Page',
    principle: 'Start before you\'re ready',
    overview: 'This is your first build. No frameworks, no complexity—just one HTML file that becomes a page about you. The goal isn\'t perfection. The goal is to see that you can describe something and have it exist. That\'s the magic we\'re after. Don\'t overthink it. Just start.',
    whatYoullBuild: 'A single-page personal website with your name, a short bio, and links to your email and social profiles. One file. No hosting yet. Just something real.',
    steps: [
      {
        title: 'Open Claude and describe yourself',
        description: 'Start a conversation with Claude and describe what you want.',
        prompt: 'Build me a simple personal webpage. Include my name [YOUR NAME], a one-sentence bio, and links to my email and LinkedIn. Use HTML and CSS in a single file. Keep it minimal and clean.',
        tip: 'Replace the placeholder with your actual info. Be specific about what you want to say.',
      },
      {
        title: 'Save and open it',
        description: 'Copy the code into a file called index.html. Double-click it to open in your browser.',
        tip: 'If you see raw code instead of a page, make sure the file ends in .html not .txt.',
        image: '/screenshots/practice-01-starting/01-initial.png',
        imageAlt: 'Initial personal page - clean and minimal',
      },
      {
        title: 'Look at it. Really look.',
        description: 'What do you notice? What feels right? What feels off? This is the most important skill—developing taste by paying attention.',
      },
      {
        title: 'Ask for one change',
        description: 'Make one request at a time. See the result. Then ask for the next thing.',
        prompt: 'Change the background to a warm off-white color and make the text a dark charcoal instead of pure black.',
        tip: 'Make one request at a time. See the result. Then ask for the next thing.',
        image: '/screenshots/practice-01-starting/02-warm-colors.png',
        imageAlt: 'After changing to warm colors - softer, easier on the eyes',
      },
      {
        title: 'Make it yours',
        description: 'Change the fonts. Adjust the spacing. Add a photo. Remove things that feel unnecessary. Keep going until it feels like yours.',
        image: '/screenshots/practice-01-starting/03-polished.png',
        imageAlt: 'Polished version - contained card with avatar and refined typography',
      },
      {
        title: 'Save a copy',
        description: 'Before you close, save a copy somewhere you won\'t lose it. This is your first build.',
      },
    ],
    prompts: [
      {
        title: 'Add a photo',
        prompt: 'Add a simple photo of me. I\'ll provide the image file.',
        use: 'When you want to add a personal touch.',
      },
      {
        title: 'Icon links',
        prompt: 'Make the links show as icons instead of text',
        use: 'When you want a cleaner, more visual design.',
      },
      {
        title: 'Add containment',
        prompt: 'Add a subtle border or shadow to make the content feel more contained',
        use: 'When the page feels too open or unstructured.',
      },
      {
        title: 'Mobile responsive',
        prompt: 'Make the page look good on mobile phones too',
        use: 'When you want to share the link and have it work everywhere.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Page shows raw code',
        solution: 'Make sure file is saved as .html, not .html.txt',
      },
      {
        problem: 'Image doesn\'t appear',
        solution: 'Check that the image file is in the same folder as your HTML file',
      },
      {
        problem: 'Looks different in different browsers',
        solution: 'That\'s normal. Pick one browser for now.',
      },
      {
        problem: 'Layout looks cramped',
        solution: 'Ask Claude to "add more whitespace and padding"',
      },
    ],
    reflection: [
      'What did you learn about yourself writing your bio?',
      'What took longer than expected?',
      'What surprised you about the process?',
      'Would you share this page with someone?',
    ],
    extensions: [
      'Add a dark mode toggle',
      'Create multiple pages (about, projects, contact)',
      'Add animation when the page loads',
      'Put it online (that\'s Guide 04: Shipping)',
    ],
  },
  'capture': {
    num: '02',
    title: 'Capture',
    build: 'Link Catcher',
    principle: 'Don\'t let things slip away',
    overview: 'Tabs pile up. Bookmarks become graveyards. Pocket\'s recommendations drown your actual interests. This is your own link database. No algorithm, no suggestions, just what you saved.',
    whatYoullBuild: 'A simple web app where you can paste a URL and give it a title, add notes and tags, see all your saved links in a list, filter by tag or search, and delete links you no longer need.',
    steps: [
      {
        title: 'Start with the basics',
        description: 'Ask Claude for a simple link-saving app. Don\'t ask for tags or search yet—start with the core.',
        prompt: 'Build me a single-page web app for saving links. I want to paste a URL, add a title and optional notes, then see all my saved links in a list below the form. Use HTML, CSS, and vanilla JavaScript. Store links in localStorage so they persist.',
        tip: 'Start simple. You can always add more later. The first version should do one thing well.',
        image: '/screenshots/practice-02-capture/01-basic.png',
        imageAlt: 'Basic link catcher - URL, title, notes, and a save button',
      },
      {
        title: 'Test and observe',
        description: 'Add 3-4 real links you\'ve been meaning to save. Notice what\'s missing. What\'s annoying? What do you wish it did? Write these down.',
      },
      {
        title: 'Add tags',
        description: 'Tags let you categorize without folders. Ask Claude to add tagging.',
        prompt: 'Add a tags field to the link form. Let me type comma-separated tags when saving a link. Show tags as small pills under each link in the list. When I click a tag, filter the list to show only links with that tag.',
        tip: 'If the tags look ugly, tell Claude what you want them to look like. "Make the tags smaller" or "use a subtle background color" works.',
      },
      {
        title: 'Add search',
        description: 'When you have more than a dozen links, you\'ll want search.',
        prompt: 'Add a search box above the link list. As I type, filter the links to show only those where the title, notes, or tags contain my search text. Make it filter in real-time as I type.',
      },
      {
        title: 'Add timestamps and delete',
        description: 'Know when you saved something. Remove what you don\'t need.',
        prompt: 'Show the date each link was saved, formatted like "Jan 15, 2024". Add a delete button for each link. When I click delete, show a confirmation before removing it.',
        tip: 'If the date format isn\'t what you want, just tell Claude: "Format dates like \'2 days ago\' instead" or "Just show the month and day".',
        image: '/screenshots/practice-02-capture/02-with-tags.png',
        imageAlt: 'Link catcher with tags and search - filter by tag, search in real-time',
      },
      {
        title: 'Make it yours',
        description: 'Change the colors. Adjust the spacing. Add your own fields. This is yours now.',
      },
    ],
    prompts: [
      {
        title: 'Export your data',
        prompt: 'Add an "Export" button that downloads all my saved links as a JSON file. Name the file "links-backup-[date].json".',
        use: 'When you want to back up your links or move them to another computer.',
      },
      {
        title: 'Keyboard shortcuts',
        prompt: 'Add keyboard shortcuts: Cmd+V (or Ctrl+V on Windows) should focus the URL field. Escape should clear any active filters and search. Cmd+K should focus the search box.',
        use: 'When you\'re a keyboard person and want faster interaction.',
      },
      {
        title: 'Sortable list',
        prompt: 'Let me sort the link list by date saved (newest or oldest first) or alphabetically by title. Add small buttons or a dropdown to switch between sort orders.',
        use: 'When you want to find your oldest saves or browse alphabetically.',
      },
      {
        title: 'Bookmarklet',
        prompt: 'Create a bookmarklet I can drag to my browser bookmarks bar. When I click it on any page, it should open my Link Catcher with the current page\'s URL and title pre-filled.',
        use: 'When you want to save links without manually copying URLs.',
      },
      {
        title: 'Import from browser',
        prompt: 'Add an "Import" button that accepts a browser bookmarks HTML file and imports all the links with their titles.',
        use: 'When you want to migrate your existing bookmarks.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Links disappear after closing the browser',
        solution: 'localStorage might not be working. Ask Claude: "Check if localStorage is being used correctly. Console.log the links array before and after saving." Some browsers in private mode disable localStorage.',
      },
      {
        problem: 'Tags don\'t filter properly',
        solution: 'Ask Claude: "Show me the filter logic for tags. I want to see what\'s being compared." The issue is usually case sensitivity or extra whitespace.',
      },
      {
        problem: 'Styling looks wrong or broken',
        solution: 'Take a screenshot and share it with Claude. Say: "This doesn\'t look right. The [specific thing] should be [what you want]." Screenshots are worth a thousand words.',
      },
      {
        problem: 'The delete button deletes the wrong link',
        solution: 'This usually means the link ID isn\'t being passed correctly. Ask Claude: "Make sure each delete button knows which specific link to delete. Use a unique ID for each link."',
      },
      {
        problem: 'Search is slow with many links',
        solution: 'You probably don\'t have enough links for this to matter. But if you do: "Debounce the search so it only filters 300ms after I stop typing."',
      },
    ],
    reflection: [
      'What did you actually end up saving? Does it match what you thought you\'d save?',
      'Did you add any fields or features Claude didn\'t suggest?',
      'How is this different from your browser bookmarks? Better? Worse? Just different?',
      'What would make you actually use this instead of leaving tabs open?',
    ],
    extensions: [
      'Sync across devices (requires a backend—this is a bigger project)',
      'Auto-fetch page titles and descriptions from URLs',
      'Generate a weekly digest email of your saved links',
      'Add "read later" status and mark links as read',
      'Group links by project or topic with drag-and-drop',
      'Add favicons for each link automatically',
    ],
  },
  'remember': {
    num: '03',
    title: 'Remember',
    build: 'Daily Log',
    principle: 'Write it down or lose it',
    overview: 'Your brain isn\'t a storage device—it\'s a processor. The things that matter need to live somewhere outside your head. This is a simple daily journal: text and timestamps, nothing else. No prompts asking how you feel on a scale of 1-10. No streaks. Just a place to dump thoughts at the end of each day.',
    whatYoullBuild: 'A daily log where you write an entry, it saves with today\'s date, and you can browse back through past entries. Everything stored locally on your computer.',
    steps: [
      {
        title: 'Start with the core',
        description: 'Ask Claude for a simple daily journal. Don\'t ask for search or export yet—just the basics.',
        prompt: 'Build me a daily journal web app. I want a text area where I can write today\'s entry, a save button, and a list of past entries below showing the date and content. Use localStorage to save entries. Each entry should be tied to a specific date.',
        tip: 'Don\'t ask for search or export yet. Just the basics.',
        image: '/screenshots/practice-03-remember/01-daily-log.png',
        imageAlt: 'Basic daily log - text area with save button and past entries',
      },
      {
        title: 'Write your first entry',
        description: 'Write something real. What happened today? What are you thinking about? The app only becomes useful when you use it.',
      },
      {
        title: 'Add date navigation',
        description: 'Let yourself edit past entries and navigate by date.',
        prompt: 'Let me click on a date in the past entries list to edit that day\'s entry. If I navigate away and come back, show today\'s entry by default.',
        tip: 'If editing feels weird, tell Claude what you expected to happen instead.',
      },
      {
        title: 'Add a calendar view',
        description: 'See at a glance which days have entries.',
        prompt: 'Add a small monthly calendar that shows which days have entries (maybe with a dot). Let me click a date to jump to that entry.',
        image: '/screenshots/practice-03-remember/02-with-calendar.png',
        imageAlt: 'Daily log with calendar view - dots showing days with entries',
      },
      {
        title: 'Add search',
        description: 'Find past entries by keyword.',
        prompt: 'Add a search box that filters entries to show only those containing my search text. Highlight the matching words.',
        tip: 'If search is slow, you probably don\'t have enough entries yet for it to matter.',
      },
      {
        title: 'Add export',
        description: 'Back up your journal.',
        prompt: 'Add an Export button that downloads all my entries as a single text file, with dates as headers.',
      },
    ],
    prompts: [
      {
        title: 'Word count',
        prompt: 'Add word count for each entry',
        use: 'When you want to track how much you write.',
      },
      {
        title: 'Writing streak',
        prompt: 'Show how many consecutive days I\'ve written (but don\'t make it feel like a streak I need to maintain)',
        use: 'When you want gentle accountability without pressure.',
      },
      {
        title: 'Random past entry',
        prompt: 'Add a "random past entry" button that shows me something I wrote before',
        use: 'When you want to revisit and reflect on the past.',
      },
      {
        title: 'Tags',
        prompt: 'Let me add tags to entries and filter by tag',
        use: 'When you want to categorize and find themed entries.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Entries disappear',
        solution: 'localStorage might be cleared. Ask Claude to add an export reminder after 10 entries.',
      },
      {
        problem: 'Wrong date showing',
        solution: 'Check your timezone handling. Ask Claude to use your local date.',
      },
      {
        problem: 'Calendar doesn\'t update',
        solution: 'Refresh the page, or ask Claude to update the calendar when you save.',
      },
      {
        problem: 'Text formatting lost',
        solution: 'You\'re probably saving plain text. If you want formatting, ask for a rich text editor (more complex).',
      },
    ],
    reflection: [
      'What time of day do you actually write?',
      'Are you writing for yourself or for a future reader?',
      'What would you lose if these entries disappeared?',
      'Has writing changed what you notice during the day?',
    ],
    extensions: [
      'Add end-of-week summary prompts',
      'Email yourself a weekly digest',
      'Add mood or energy indicators (if that\'s useful to you)',
      'Encrypt entries for privacy',
      'Sync across devices (requires backend)',
    ],
  },
  'move': {
    num: '04',
    title: 'Move',
    build: 'Training Log',
    principle: 'The body keeps the score',
    overview: 'Every fitness app wants to own your data, show you ads, or gamify your workouts with badges you didn\'t ask for. This is simpler: log what you did, note how it felt, see your history. Your workout data belongs to you.',
    whatYoullBuild: 'A workout tracker where you log exercises with sets, reps, and weight. Add notes about how you felt. See your history. No calorie counting, no social features, no streaks.',
    steps: [
      {
        title: 'Build the basic logger',
        description: 'Start with logging exercises, sets, reps, and weight.',
        prompt: 'Build me a workout tracker. I want to log exercises with: exercise name, sets, reps, weight, and a notes field. Save each workout with the date. Show a list of recent workouts. Use localStorage.',
        tip: 'Start with your actual workout. What do you actually track?',
        image: '/screenshots/practice-04-move/01-training-log.png',
        imageAlt: 'Training log - exercise form with recent workouts list',
      },
      {
        title: 'Log a real workout',
        description: 'Enter your last workout. Notice what fields you use and what you skip. Notice what\'s missing.',
      },
      {
        title: 'Add exercise templates',
        description: 'Save exercises you do often.',
        prompt: 'Let me save exercise templates (like "Bench Press" or "Squat") so I don\'t have to type them each time. Show a dropdown of my saved exercises.',
        tip: 'Only add templates for exercises you actually do.',
      },
      {
        title: 'Add workout history',
        description: 'See all your workouts for a specific exercise.',
        prompt: 'Add a history view where I can see all my workouts for a specific exercise. Show the date, weight, sets, and reps. Sort by most recent.',
      },
      {
        title: 'Add progress tracking',
        description: 'See your personal bests and progress over time.',
        prompt: 'For each exercise, show my personal best (highest weight) and when I achieved it. Show a simple line chart of my progress over time.',
        tip: 'If charts are ugly, ask Claude to use a specific charting style or library.',
      },
      {
        title: 'Add quick logging',
        description: 'Make repeat workouts faster to log.',
        prompt: 'Add a "repeat last workout" button that pre-fills today\'s form with what I did last time for this exercise.',
      },
    ],
    prompts: [
      {
        title: 'Rest timer',
        prompt: 'Add a rest timer that counts down between sets',
        use: 'When you want to keep rest periods consistent.',
      },
      {
        title: 'Workout rating',
        prompt: 'Let me rate each workout 1-5 for how I felt',
        use: 'When you want to track energy and recovery.',
      },
      {
        title: 'Body weight',
        prompt: 'Add body weight tracking as a separate log',
        use: 'When you want to correlate weight with training.',
      },
      {
        title: 'Weekly volume',
        prompt: 'Show weekly volume (total sets x reps x weight)',
        use: 'When you want to track overall training load.',
      },
      {
        title: 'CSV export',
        prompt: 'Export my workout data as CSV for spreadsheets',
        use: 'When you want to analyze data elsewhere.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Wrong exercise template showing',
        solution: 'Check for typos in exercise names. Standardize names.',
      },
      {
        problem: 'Chart looks wrong',
        solution: 'Tell Claude what you expected. "The Y-axis should be weight, X-axis should be date."',
      },
      {
        problem: 'Data entry is tedious',
        solution: 'Ask for more shortcuts: "Let me tap +5 or -5 to adjust weight instead of typing."',
      },
      {
        problem: 'Lost old workouts',
        solution: 'localStorage cleared. Add export reminders.',
      },
    ],
    reflection: [
      'Do you log during or after your workout?',
      'What patterns do you notice in your training?',
      'Does tracking change how you train?',
      'What would a trainer see in your data?',
    ],
    extensions: [
      'Add workout programs/plans',
      'Track rest days and recovery',
      'Add photos for form checks',
      'Integrate with a fitness API (complex)',
      'Build a companion Apple Watch app (very complex)',
    ],
  },
  'collect': {
    num: '05',
    title: 'Collect',
    build: 'Record Shelf',
    principle: 'Physical things deserve digital memory',
    overview: 'Collections matter. Whether it\'s vinyl, books, tools, plants, or anything else—the things we accumulate tell a story. But physical collections are hard to browse when you\'re not home, and easy to forget about. This is your catalog. Not a marketplace, not a social app—just a record of what you have.',
    whatYoullBuild: 'A catalog for your collection (we\'ll use vinyl records, but adapt to whatever you collect). Add items with key details, photos, notes. Browse and search. Track what you want but don\'t have yet.',
    steps: [
      {
        title: 'Define your collection',
        description: 'Tell Claude what you collect and what you want to track about each item.',
        prompt: 'Build me a vinyl record catalog. For each record I want to track: artist, album title, year, format (LP/EP/7"), condition, and notes. Show all records in a grid with album art. Store in localStorage.',
        tip: 'Change the fields to match what YOU collect. Books? Tools? Sneakers? Make it yours.',
        image: '/screenshots/practice-05-collect/01-record-shelf.png',
        imageAlt: 'Record shelf - grid of album covers with details',
      },
      {
        title: 'Add your first items',
        description: 'Add 5-10 real items from your collection. Take photos if you want. Notice what information matters to you.',
      },
      {
        title: 'Add a want-list',
        description: 'Track what you\'re looking for but don\'t have yet.',
        prompt: 'Add a separate "Want List" section for records I want but don\'t own. Same fields, but marked as wanted. Let me move items from want-list to collection when I acquire them.',
      },
      {
        title: 'Add search and filter',
        description: 'Find things quickly as your collection grows.',
        prompt: 'Add search that filters by artist or album title. Add filter buttons for format (show only LPs, only 7"s, etc.).',
      },
      {
        title: 'Add photos',
        description: 'Make it visual.',
        prompt: 'Let me add a photo for each record. Show it as the album cover in the grid view. Store images in localStorage as base64.',
        tip: 'Large photos will slow things down. Ask Claude to resize them on upload.',
      },
      {
        title: 'Add collection stats',
        description: 'See your collection at a glance.',
        prompt: 'Show me stats: total records, breakdown by format, by decade, most common artist.',
      },
    ],
    prompts: [
      {
        title: 'Random pick',
        prompt: 'Add a "random pick" button that suggests a record to listen to',
        use: 'When you can\'t decide what to play.',
      },
      {
        title: 'Ratings',
        prompt: 'Let me rate records 1-5 stars and sort by rating',
        use: 'When you want to track your favorites.',
      },
      {
        title: 'Last played',
        prompt: 'Add last played date and sort by least recently played',
        use: 'When you want to rediscover forgotten albums.',
      },
      {
        title: 'Shareable stats',
        prompt: 'Generate a shareable image of my collection stats',
        use: 'When you want to show off your collection.',
      },
      {
        title: 'Catalog numbers',
        prompt: 'Add Discogs-style catalog numbers',
        use: 'When you want to track specific pressings.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Images make the app slow',
        solution: 'Reduce image quality: "Compress images to max 200KB on upload"',
      },
      {
        problem: 'Can\'t find items',
        solution: 'Make search case-insensitive. Check for typos.',
      },
      {
        problem: 'Running out of localStorage space',
        solution: 'localStorage has ~5MB limit. Export and clear old data, or ask about IndexedDB.',
      },
      {
        problem: 'Grid layout looks uneven',
        solution: 'Ask Claude to "make all album covers the same size with consistent spacing"',
      },
    ],
    reflection: [
      'Does cataloging change how you see your collection?',
      'What items did you forget you had?',
      'Is your want-list realistic or aspirational?',
      'What would you tell someone about your collection based on the stats?',
    ],
    extensions: [
      'Barcode scanning to add items (requires camera access)',
      'Integration with Discogs API for auto-fill',
      'Value tracking (prices, trends)',
      'Lending tracker (who has your stuff)',
      'Print labels for physical organization',
    ],
  },
  'see': {
    num: '06',
    title: 'See',
    build: 'Photo Log',
    principle: 'Seeing is a practice',
    overview: 'This isn\'t a photo gallery—it\'s a seeing practice. One image at a time. Three questions that slow you down. The point isn\'t to collect photos, it\'s to notice what you notice. Photography is attention made visible; this tool makes that attention explicit.',
    whatYoullBuild: 'A photo journal where you upload one image and answer three questions about it. A practice of slowing down and really looking at what you captured.',
    steps: [
      {
        title: 'Build the core practice',
        description: 'Create the photo log with the three essential questions.',
        prompt: 'Build me a photo log. I upload one image and answer three questions: "What caught your eye?", "What were you trying to capture?", "What do you see now that you look again?". Save each entry with the date and display as a vertical timeline.',
        tip: 'These specific questions are the point. Don\'t skip them.',
        image: '/screenshots/practice-06-see/01-photo-log.png',
        imageAlt: 'Photo log - image with three reflection questions',
      },
      {
        title: 'Add your first entry',
        description: 'Pick a recent photo from your camera roll. Not your best photo—just a recent one. Answer the three questions honestly.',
      },
      {
        title: 'Add date and location',
        description: 'Add context to your entries.',
        prompt: 'Add a date field (default to today) and an optional location field. Show both in the timeline view.',
      },
      {
        title: 'Add tags',
        description: 'Categorize what you notice.',
        prompt: 'Let me add tags to each entry. Show tags as clickable filters. Common tags might be: people, places, light, texture, color.',
      },
      {
        title: 'Add a reflection view',
        description: 'Read your answers like a journal.',
        prompt: 'Add a view that shows just my written answers without the photos. Let me read what I wrote like a journal.',
      },
      {
        title: 'Add random practice',
        description: 'Revisit old entries.',
        prompt: 'Add a "revisit" button that shows me a random old entry. Prompt me to answer the third question again: "What do you see now?"',
      },
    ],
    prompts: [
      {
        title: 'EXIF data',
        prompt: 'Add EXIF data display (camera, lens, settings)',
        use: 'When you want to remember technical details.',
      },
      {
        title: 'Compare photos',
        prompt: 'Let me compare two photos side by side',
        use: 'When you want to see relationships between images.',
      },
      {
        title: 'Weekly prompt',
        prompt: 'Add a weekly prompt: "This week, notice [shadows/color/faces/etc.]"',
        use: 'When you want to direct your attention.',
      },
      {
        title: 'Export answers',
        prompt: 'Export my answers as a text document',
        use: 'When you want to keep your reflections as writing.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Images are huge and slow',
        solution: 'Compress on upload. "Resize images to max 1200px wide."',
      },
      {
        problem: 'EXIF data missing',
        solution: 'Phone photos have it; screenshots don\'t. That\'s normal.',
      },
      {
        problem: 'Answers feel forced',
        solution: 'Start with photos you genuinely find interesting. Boring photos = boring answers.',
      },
      {
        problem: 'Too many entries',
        solution: 'That\'s fine. The practice is in the doing, not the reviewing.',
      },
    ],
    reflection: [
      'What patterns do you see in what catches your eye?',
      'Do your answers change when you look at old entries?',
      'Are you photographing different things since starting this practice?',
      'What\'s the difference between a photo you took and a photo you looked at?',
    ],
    extensions: [
      'Add drawing/annotation on photos',
      'Create monthly "best of" compilations',
      'Add a photo-a-day challenge mode',
      'Connect to Apple Photos or Google Photos',
      'Print a photo book from your entries',
    ],
  },
  'gather': {
    num: '07',
    title: 'Gather',
    build: 'Personal Dashboard',
    principle: 'Bring scattered things together',
    overview: 'Every morning you check the weather, your calendar, your tasks, maybe a quote or news feed. That\'s five tabs, five apps, five moments of friction. A dashboard brings what matters into one view. This is your home screen—curated by you, for you.',
    whatYoullBuild: 'A personal dashboard with widgets for weather, time, a daily quote, your todo list, and whatever else you want to see at a glance. Make it your browser\'s new tab page.',
    steps: [
      {
        title: 'Start with the essentials',
        description: 'Begin with time, date, and a greeting.',
        prompt: 'Build me a personal dashboard. Show current time, today\'s date, and a greeting based on time of day (good morning/afternoon/evening). Clean, minimal design with lots of whitespace.',
        tip: 'Start simple. You can add widgets one at a time.',
        image: '/screenshots/practice-07-gather/01-dashboard.png',
        imageAlt: 'Personal dashboard - time, weather, quote, todos, and links',
      },
      {
        title: 'Add weather',
        description: 'See the weather at a glance.',
        prompt: 'Add current weather for [YOUR CITY]. Use a free weather API. Show temperature, conditions, and a simple icon. No hourly forecast—just right now.',
        tip: 'You\'ll need an API key. Ask Claude how to get one from OpenWeatherMap or similar.',
      },
      {
        title: 'Add a daily quote',
        description: 'Start the day with inspiration (or just something interesting).',
        prompt: 'Add a daily quote section. Fetch a random quote from a free API, or let me add my own quotes and rotate through them.',
      },
      {
        title: 'Add a quick todo',
        description: 'Keep your tasks visible.',
        prompt: 'Add a simple todo list. Let me type a task and hit enter to add it. Click to mark complete. Store in localStorage. Show only incomplete tasks by default.',
      },
      {
        title: 'Add links',
        description: 'Your most-used bookmarks.',
        prompt: 'Add a section for my frequently used links. Let me add and remove links. Show them as simple text, not fancy icons.',
      },
      {
        title: 'Make it your new tab page',
        description: 'Export as a single HTML file. Set it as your browser\'s homepage or new tab page. (Each browser does this differently—search for yours.)',
      },
    ],
    prompts: [
      {
        title: 'Calendar integration',
        prompt: 'Add my calendar events for today from Google Calendar',
        use: 'When you want to see your schedule at a glance (requires API setup).',
      },
      {
        title: 'Focus mode',
        prompt: 'Add a focus mode that hides everything except the time and one task',
        use: 'When you need to eliminate distractions.',
      },
      {
        title: 'Quick notes',
        prompt: 'Add a notes section for quick capture',
        use: 'When you need to jot something down fast.',
      },
      {
        title: 'Sun times',
        prompt: 'Show sunset/sunrise times',
        use: 'When you want to track daylight.',
      },
      {
        title: 'Keyboard shortcuts',
        prompt: 'Add keyboard shortcuts for common actions',
        use: 'When you want faster interaction.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Weather not loading',
        solution: 'Check your API key. Check that you\'re allowing the request in your browser.',
      },
      {
        problem: 'Quotes repeat too often',
        solution: 'Use a larger quote source, or add more of your own.',
      },
      {
        problem: 'Todos don\'t persist',
        solution: 'localStorage issue. Check browser settings.',
      },
      {
        problem: 'Design looks cluttered',
        solution: 'Remove things. A good dashboard is mostly empty space.',
      },
    ],
    reflection: [
      'What do you actually look at on your dashboard?',
      'What did you add that you never use?',
      'Has this changed how you start your day?',
      'What\'s missing that you wish you had?',
    ],
    extensions: [
      'Add Pomodoro timer',
      'Integrate with Notion or other tools',
      'Add habit tracker',
      'Create multiple dashboard layouts for different contexts',
      'Add ambient sounds or music integration',
    ],
  },
  'refine': {
    num: '08',
    title: 'Refine',
    build: 'Revisit + Improve',
    principle: 'First versions are just first versions',
    overview: 'By now, you\'ve built several tools. Some you use daily; others you abandoned. This practice is about going back to something you actually use and making it better. Not adding features for the sake of it—solving real friction you\'ve experienced.',
    whatYoullBuild: 'An improved version of one of your earlier builds. You\'ll identify what\'s missing, prioritize ruthlessly, and implement the changes that actually matter.',
    steps: [
      {
        title: 'Pick a practice you actually use',
        description: 'Not your favorite build—the one you USE. If you don\'t use any of them, that\'s useful information. Ask yourself why.',
      },
      {
        title: 'Live with it for a week',
        description: 'Use your chosen tool every day for a week. Keep a list of every friction point, missing feature, and annoyance. Write them down immediately when you notice them.',
      },
      {
        title: 'Prioritize ruthlessly',
        description: 'Look at your list. Cross off everything that\'s "nice to have." What remains? Pick the top 3 things that would make the biggest difference.',
      },
      {
        title: 'Fix one thing at a time',
        description: 'One change, one test, one commit. Don\'t try to fix everything at once.',
        prompt: '[Describe the specific issue] Fix this by [your proposed solution].',
        tip: 'One change, one test, one commit. Don\'t try to fix everything at once.',
        image: '/screenshots/practice-08-refine/01-before-after.png',
        imageAlt: 'Before and after - showing iteration and improvement',
      },
      {
        title: 'Test your changes',
        description: 'Use the improved version for another few days. Did the fix actually help? Sometimes our imagined solutions don\'t solve the real problem.',
      },
      {
        title: 'Notice what\'s different',
        description: 'Compare this experience to Practice 01. What\'s easier now? What do you understand that you didn\'t before?',
      },
    ],
    prompts: [
      {
        title: 'Refactor code',
        prompt: 'Refactor this code to be more readable',
        use: 'When the code works but is hard to understand.',
      },
      {
        title: 'Error handling',
        prompt: 'Add error handling for [specific edge case]',
        use: 'When you\'ve hit an error and want to handle it gracefully.',
      },
      {
        title: 'Mobile improvements',
        prompt: 'Make this work better on mobile',
        use: 'When you want to use your tool on your phone.',
      },
      {
        title: 'Performance',
        prompt: 'Speed up [specific slow interaction]',
        use: 'When something feels sluggish.',
      },
      {
        title: 'Tests',
        prompt: 'Add tests to catch regressions',
        use: 'When you want confidence that changes don\'t break things.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Changes broke something',
        solution: 'This is why we change one thing at a time. Revert and try again.',
      },
      {
        problem: 'Can\'t remember how the code works',
        solution: 'Read through it with Claude. Ask for explanations.',
      },
      {
        problem: 'Feature creep',
        solution: 'Return to your prioritized list. Is this on it?',
      },
      {
        problem: 'Don\'t want to touch working code',
        solution: 'That\'s normal. Start with the smallest, safest change.',
      },
    ],
    reflection: [
      'What surprised you when you revisited your old code?',
      'How has your taste changed since you first built it?',
      'What would you do differently if starting over?',
      'Is "refinement" ever really done?',
    ],
    extensions: [
      'This practice IS the extension. Keep refining.',
      'Create a changelog for your tool',
      'Version your releases (v1.0, v1.1, etc.)',
      'Share your tool with someone else and get feedback',
    ],
  },
  'make-your-own': {
    num: '09',
    title: 'Make Your Own',
    build: 'Self-directed',
    principle: 'You don\'t need permission',
    overview: 'Everything until now has been guided. This is you on your own. Build something only you would build. A tool for a problem only you have. The weird idea that doesn\'t fit any category. This is the point of everything—not to follow tutorials forever, but to make things that matter to you.',
    whatYoullBuild: 'Whatever you want. No requirements. No templates. Just you and Claude.',
    heroImage: '/screenshots/practice-09-make-your-own/01-blank-canvas.png',
    heroImageAlt: 'A blank canvas - what will you build?',
    steps: [
      {
        title: 'What do you wish existed?',
        description: 'Not "what app idea could make money"—what do YOU wish existed? What problem do YOU have that nobody else seems to care about?',
      },
      {
        title: 'What do you do manually that could be automated?',
        description: 'What repetitive task do you do every day or every week? Not everything should be automated, but what deserves to be?',
      },
      {
        title: 'What information do you constantly look up?',
        description: 'What do you Google repeatedly? What\'s in your notes app that you search for often? Could it be at your fingertips instead?',
      },
      {
        title: 'Start smaller than you think',
        description: 'Whatever your idea is, make it simpler. Then simpler again. The first version should do ONE thing. You can expand later.',
        tip: '"But what I really want is..." No. Start with the smallest useful version.',
      },
      {
        title: 'Build it',
        description: 'You know how now. Describe what you want. Test it. Refine it. Make it yours.',
      },
      {
        title: 'Ship it',
        description: 'Put it somewhere you can use it. Even if it\'s just on your own computer. A tool that lives only in your imagination isn\'t a tool.',
      },
    ],
    troubleshooting: [
      {
        problem: '"I don\'t have any ideas"',
        solution: 'Carry a notebook for a week. Write down every friction point.',
      },
      {
        problem: '"My idea is too big"',
        solution: 'It is. What\'s the smallest piece that\'s useful on its own?',
      },
      {
        problem: '"Someone already built this"',
        solution: 'Cool. Build your version anyway. You\'ll learn something.',
      },
      {
        problem: '"It\'s not good enough"',
        solution: 'Ship it anyway. Refine later.',
      },
    ],
    reflection: [
      'What did you build?',
      'Why does it matter to you?',
      'Would you have attempted this before starting this course?',
      'What will you build next?',
    ],
    extensions: [
      'There are no extensions. There\'s only what you make.',
      'Share what you built in the community.',
      'Help someone else build their idea.',
    ],
  },
};

export default function PracticePage() {
  const params = useParams();
  const slug = params.slug as string;
  const practice = practices[slug];

  if (!practice) {
    return (
      <div className="p-8 lg:p-12">
        <h1 className="text-2xl mb-4">Practice not found</h1>
        <Link href="/dashboard" className="underline">Back to dashboard</Link>
      </div>
    );
  }

  const slugs = Object.keys(practices);
  const currentIndex = slugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <div className="p-8 lg:p-12 max-w-2xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>Practice {practice.num}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="text-xs text-[var(--c-black)]/40 mb-2">
          <ScrambleText text={`Practice ${practice.num} of 09`} scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-2">
          {practice.title}
        </h1>
        <div className="text-lg text-[var(--c-black)]/60 headline-serif">
          {practice.build}
        </div>
      </div>

      {/* Principle */}
      <div className="border-l-2 border-[var(--c-black)]/20 pl-6 mb-12">
        <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/40 mb-2">Principle</div>
        <p className="text-xl headline-serif">{practice.principle}</p>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Overview</h2>
        <p className="text-[var(--c-black)]/80 leading-relaxed">{practice.overview}</p>
      </div>

      {/* What You'll Build */}
      {practice.whatYoullBuild && (
        <div className="mb-12 bg-[var(--c-black)]/5 p-6 rounded-sm">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">What You'll Build</h2>
          <p className="text-[var(--c-black)]/80 leading-relaxed">{practice.whatYoullBuild}</p>
          {practice.heroImage && (
            <div className="mt-6">
              <img
                src={practice.heroImage}
                alt={practice.heroImageAlt || `Preview of ${practice.build}`}
                className="w-full rounded-sm border border-[var(--c-black)]/20 shadow-sm"
              />
              {practice.heroImageAlt && (
                <p className="text-xs text-[var(--c-black)]/40 mt-2 italic">{practice.heroImageAlt}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Steps */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Steps</h2>
        <div className="space-y-8">
          {practice.steps.map((step, i) => (
            <div key={i} className="border-l border-[var(--c-black)]/10 pl-6">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-xs text-[var(--c-black)]/40 w-6 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-medium text-[var(--c-black)]">{step.title}</h3>
              </div>
              <div className="ml-10">
                <p className="text-[var(--c-black)]/70 leading-relaxed mb-4">{step.description}</p>
                {step.prompt && (
                  <div className="mb-4">
                    <CopyablePrompt prompt={step.prompt} />
                  </div>
                )}
                {step.tip && (
                  <div className="text-sm text-[var(--c-black)]/60 italic bg-[var(--c-black)]/5 p-3 rounded-sm">
                    <span className="font-medium not-italic">Tip:</span> {step.tip}
                  </div>
                )}
                {step.image && (
                  <div className="mt-4">
                    <img
                      src={step.image}
                      alt={step.imageAlt || `Screenshot for step ${i + 1}`}
                      className="w-full rounded-sm border border-[var(--c-black)]/10 shadow-sm"
                    />
                    {step.imageAlt && (
                      <p className="text-xs text-[var(--c-black)]/40 mt-2 italic">{step.imageAlt}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Prompts */}
      {practice.prompts && practice.prompts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Additional Prompts</h2>
          <p className="text-[var(--c-black)]/60 text-sm mb-6">
            Use these when you want to extend your build further.
          </p>
          <div className="space-y-6">
            {practice.prompts.map((item, i) => (
              <div key={i} className="border-l border-[var(--c-black)]/10 pl-6">
                <h3 className="text-sm font-medium text-[var(--c-black)] mb-2">{item.title}</h3>
                <p className="text-xs text-[var(--c-black)]/50 mb-3">{item.use}</p>
                <CopyablePrompt prompt={item.prompt} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Troubleshooting */}
      {practice.troubleshooting && practice.troubleshooting.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">When Things Break</h2>
          <div className="space-y-4">
            {practice.troubleshooting.map((item, i) => (
              <details key={i} className="group border border-[var(--c-black)]/10 rounded-sm">
                <summary className="p-4 cursor-pointer text-sm font-medium text-[var(--c-black)] hover:bg-[var(--c-black)]/5">
                  {item.problem}
                </summary>
                <div className="px-4 pb-4 text-sm text-[var(--c-black)]/70 leading-relaxed">
                  {item.solution}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Reflection */}
      {practice.reflection && practice.reflection.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Reflection</h2>
          <div className="bg-[var(--c-black)]/5 p-6 rounded-sm">
            <p className="text-xs text-[var(--c-black)]/50 mb-4">
              After you've used your build for a few days, consider:
            </p>
            <ul className="space-y-3">
              {practice.reflection.map((question, i) => (
                <li key={i} className="text-[var(--c-black)]/70 leading-relaxed pl-4 border-l-2 border-[var(--c-black)]/10">
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Extensions */}
      {practice.extensions && practice.extensions.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Going Further</h2>
          <p className="text-[var(--c-black)]/60 text-sm mb-4">
            Ideas if you want to keep building:
          </p>
          <ul className="space-y-2">
            {practice.extensions.map((extension, i) => (
              <li key={i} className="text-sm text-[var(--c-black)]/70 flex items-start gap-2">
                <span className="text-[var(--c-black)]/30 mt-1">-</span>
                {extension}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-16 pt-8 border-t border-[var(--c-black)]/10">
        {prevSlug ? (
          <Link
            href={`/practice/${prevSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            ← {practices[prevSlug].title}
          </Link>
        ) : (
          <Link
            href="/guide/shipping"
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            ← Guide 04
          </Link>
        )}
        {nextSlug ? (
          <Link
            href={`/practice/${nextSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            {practices[nextSlug].title} →
          </Link>
        ) : (
          <Link
            href="/prompts"
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            Prompt Library →
          </Link>
        )}
      </div>
    </div>
  );
}
