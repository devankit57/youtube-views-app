<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Multiple Video Player React App">
    <title>README - Multiple Video Player React App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        h1, h2, h3 {
            color: #007bff;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-left: 5px solid #007bff;
            overflow-x: auto;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<h1>Multiple Video Player React App</h1>

<p>This is a simple React application that allows users to play multiple YouTube videos simultaneously by embedding them as iframes. Users can enter a video URL and choose how many instances of the video they want to display.</p>

<h2>Features</h2>
<ul>
    <li>Play multiple instances of a YouTube video on the same page.</li>
    <li>Users can specify the number of video instances to display.</li>
    <li>Sleek and modern user interface with a banner image, input fields, and responsive video grid layout.</li>
</ul>

<h2>Project Setup</h2>

<h3>Requirements</h3>
<ul>
    <li>Node.js (v12 or higher)</li>
    <li>NPM or Yarn</li>
    <li>React (included in dependencies)</li>
</ul>

<h3>Installation</h3>
<p>To install the project, follow these steps:</p>
<pre><code>git clone https://github.com/your-username/multiple-video-player.git
cd multiple-video-player
npm install
npm start
</code></pre>

<h3>Usage</h3>
<p>Once the app is running locally, you can open your browser and navigate to <code>http://localhost:3000</code>. You will see an input field to enter a YouTube link and an option to select the number of views.</p>

<ol>
    <li>Enter a valid YouTube URL in the input box.</li>
    <li>Select how many times you want the video to play on the page.</li>
    <li>Click the <strong>Add Video</strong> button to embed the video(s) on the page.</li>
</ol>

<h2>File Structure</h2>
<pre><code>multiple-video-player/
│
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── yt_views.png
│   └── ... other files
├── package.json
└── README.html
</code></pre>

<h2>Key Files</h2>
<ul>
    <li><code>src/App.js</code> - Main React component that contains the logic for embedding multiple video iframes.</li>
    <li><code>src/App.css</code> - Styles for the application, including the banner image, input fields, buttons, and video grid.</li>
    <li><code>src/yt_views.png</code> - Banner image used in the app.</li>
</ul>

<h2>Customization</h2>
<p>To customize the app, you can modify the following:</p>
<ul>
    <li><strong>Input Box:</strong> Change the size and style of the input box by updating the <code>.youtube-link</code> and <code>.num-tabs</code> classes in <code>App.css</code>.</li>
    <li><strong>Video Layout:</strong> Update the grid display by modifying the <code>.video-grid</code> class in <code>App.css</code>.</li>
    <li><strong>Banner Image:</strong> You can replace the banner image by changing the <code>src</code> in the <code>&lt;img&gt;</code> tag within <code>App.js</code>.</li>
</ul>

<h2>Contributing</h2>
<p>If you would like to contribute to this project, feel free to open a pull request or submit an issue. All contributions are welcome!</p>

<h2>License</h2>
<p>This project is open-source and available under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p>

</body>
</html>
