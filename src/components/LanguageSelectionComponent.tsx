import React from 'react'
import { languageAndTimeZone } from '../interfaces'

interface Props {
    Options: languageAndTimeZone[]
    label: string
    setSelectedCurrentTime: React.Dispatch<React.SetStateAction<string>>
}

const LanguageSelectionComponent: React.FC<Props> = ({Options, label, setSelectedCurrentTime}) => {
    const handleSelectDropdown = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const timezone = event.target.value;
        const language = event.target.options[event.target.selectedIndex].text;

        if (language !== "Click to see options") {            
            const currentTime = new Intl.DateTimeFormat(language, {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
                timeZone: timezone,
                timeZoneName: 'short'
            }).format(new Date()).toString();
            
            setSelectedCurrentTime(currentTime);   
            console.log("Current time: ", currentTime);
        }

        if (language === "Click to see options") {
            setSelectedCurrentTime("Click to see options")
        }
    }

    return (
        <div className='dropdown__wrapper'>
            <label htmlFor="dropdown">{label}</label>
            <select 
                className='select__element' 
                name="dropdown" 
                id="dropdown" 
                onChange={handleSelectDropdown}
            >
                <option className='selected__default' value="Click to see options">Click to see options</option>
                {Options.map((option, index)=>{
                    return <option 
                        key={index} 
                        className='select__options' 
                        value={option.timezone}
                    >
                        {option.language}
                    </option>
                })}
            </select>
        </div>
    )
}

export default LanguageSelectionComponent