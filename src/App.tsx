import React, { useState } from 'react'
import './App.css'
import LanguageSelectionComponent from './components/LanguageSelectionComponent'

interface languageAndTimeZone {
	language: string
	timezone: string
}

const Options: languageAndTimeZone[] = [
	{
		"language": "en-IN",
		"timezone": "Asia/Kolkata",
	},
	{
		"language": "en-US",
		"timezone": "America/New_York",
	},
	{
		"language": "en-GB",
		"timezone": "Europe/London",
	},
	{
		"language": "pt-BR",
		"timezone": "America/Sao_Paulo",
	},	
]

const App: React.FC = () => {
    const [selectedCurrentTime, setSelectedCurrentTime] = useState<string>("");

    return (
      <div>
        <h1>Get current time based on the selected language's timezone.</h1>

        <LanguageSelectionComponent  
          Options={Options}
          label="Select a language"
          setSelectedCurrentTime={setSelectedCurrentTime}
        />

		{selectedCurrentTime !== "Click to see options" && selectedCurrentTime !== ""
			? <>
				<span>Current time: </span>
				<h2>{selectedCurrentTime}</h2>
			</>
			: null
		}
      </div>
    )
}

export default App