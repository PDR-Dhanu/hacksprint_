# Logic of the AI-Generated Voiceover (TTS) Feature

This document breaks down the implementation of the Text-to-Speech (TTS) functionality, which converts a generated pitch outline into a playable audio voiceover.

The entire process can be broken down into three main parts: the Frontend (UI), the Server Action (Connector), and the Genkit AI Flow (Backend Logic).

### 1. Frontend (React Component)

This is what the user interacts with. It's handled in files like `src/app/student/_components/ProjectView.tsx` and `src/app/judge/_components/ScoringForm.tsx`.

*   **Trigger:** The user clicks a "Generate Audio" button. This button is typically disabled until a text script (the pitch outline) is available.
*   **Action Call:** The button's `onClick` handler is an `async` function that takes the pitch script as a string.
*   **Server Action:** It calls the `generatePitchAudioAction` server action, passing the script to the backend.
*   **State Management:** While waiting for the audio to be generated, the UI enters a "loading" state (e.g., showing a spinner inside the button).
*   **Render Audio:** When the server action returns a successful response containing the `audioDataUri`, the component updates its state. This URI is then used as the `src` for a standard HTML5 `<audio>` element, making the voiceover immediately playable in the browser.

```jsx
// Simplified example from ProjectView.tsx
const [pitchAudio, setPitchAudio] = useState(null);
const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);

const handleGenerateAudio = async () => {
    setIsGeneratingAudio(true);
    // The script is compiled from the generated pitch outline slides
    const script = pitchOutline.slides.map(slide => ...).join('\n');
    const result = await generatePitchAudioAction({ script });
    setPitchAudio(result);
    setIsGeneratingAudio(false);
};

// ... in the JSX ...
<Button onClick={handleGenerateAudio}>Generate Audio</Button>
{pitchAudio?.audioDataUri && (
    <audio controls src={pitchAudio.audioDataUri} />
)}
```

### 2. Server Action (`src/app/actions.ts`)

This file acts as a secure bridge between your client-side components and your server-side AI logic.

*   **Purpose:** It ensures that frontend code doesn't directly interact with the AI models or expose sensitive logic.
*   **`generatePitchAudioAction` function:**
    *   This is an `async` function that is exported from the file.
    *   It imports the `generatePitchAudio` function from the Genkit AI flow.
    *   It wraps the call to the AI flow in a `try...catch` block. This is important for handling any errors that might occur during the AI generation process (e.g., API issues, invalid input).
    *   It returns the complete result from the flow (an object containing the `audioDataUri`) or `null` if an error occurs.

### 3. Genkit AI Flow (`src/ai/flows/generate-pitch-audio.ts`)

This is the heart of the TTS logic, where the actual communication with the AI model happens.

*   **`'use server'`:** The file is marked with this directive, indicating it runs exclusively on the server.
*   **Input/Output Schemas:** Using `zod`, it defines a strict shape for the input (`{ script: string }`) and the output (`{ audioDataUri: string }`). This ensures data consistency.
*   **`ai.defineFlow`:** This creates the main flow function, `generatePitchAudioFlow`.
*   **`ai.generate` Call:** This is the core of the AI interaction.
    *   **Model:** It specifies **`gemini-2.5-flash-preview-tts`** as the model. This is a model specifically optimized for Text-to-Speech tasks.
    *   **Prompt:** For this model, the `prompt` is simply the text script you want to convert into speech.
    *   **Configuration:** The `config` object is crucial:
        *   `responseModalities: ['AUDIO']`: This tells the Gemini model that we expect audio as the output, not text.
        *   `speechConfig`: This allows you to choose a voice. In our case, we use a `prebuiltVoiceConfig` and select the 'Algenib' voice.
*   **Audio Conversion (The Critical Step):**
    *   The TTS model returns audio data in **PCM format**. This is raw, uncompressed audio data. Most web browsers **cannot play PCM directly**.
    *   To make it playable, we must convert it to a standard format like **WAV**.
    *   We use the `wav` npm package for this. The flow includes a helper function `toWav`.
    *   The raw PCM data, which the model provides as a Base64 encoded string, is first converted into a Node.js `Buffer`.
    *   This buffer is then passed to a `wav.Writer`. This `Writer` takes the raw audio samples and wraps them with the necessary headers to create a valid WAV file structure.
    *   The resulting WAV data (also a buffer) is converted back into a Base64 string.
*   **Final Output:** The flow constructs a final **data URI** string: `data:audio/wav;base64,${wavBase64}`. This self-contained URI, which includes the audio data directly, is returned to the frontend and can be put directly into the `src` attribute of an `<audio>` tag.
