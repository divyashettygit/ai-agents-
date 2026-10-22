# AgriSathi Prototype v2

## Run
1. Extract the ZIP.
2. Open `index.html` in Chrome/Edge.
3. Start by entering a demo farmer name, location and crop.

## Working interactions
- Demo entry screen and farm profile form
- Sidebar navigation across all modules
- Interactive farm checklist and completion counter
- Image upload, drag-and-drop and local image preview
- Symptom-based educational demo workflow (not a trained classifier)
- Weather location label update and sample forecast cards
- Soil form with pH checks, rule-based explanatory guidance, downloadable field summary
- Search/filter/sort sample market prices and CSV export
- Selectable specialist agent modes, topic routing, predefined replies and activity log
- Downloadable demo session report

## Important limitations
This is an interactive front-end prototype. It does NOT connect to a real TensorFlow disease classifier, Flask backend, MongoDB, Gemini API, live weather service, live Agmarknet feed, or a true multi-agent orchestration system. All weather and market values are sample data. Chat replies are predefined. Never use the demo to diagnose or treat a real crop or to make selling decisions.

## Project proposal stack for future implementation
React.js, Python/Flask, MongoDB, TensorFlow/CNN, OpenCV, Google Gemini API, PlantVillage dataset and verified market/weather data sources.
