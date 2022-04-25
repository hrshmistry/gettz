export interface languageAndTimeZone {
	language: string
	timezone: string
}

export interface Props {
    languages: string[]
    label: string
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
}

export interface CurrentLanguageAndTimezone {
	laguage: string, 
	timezone: string
}