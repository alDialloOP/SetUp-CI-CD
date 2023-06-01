import React from 'react';

import { useRouter } from 'next/router';

export default function LangageSelector(){
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = React.useState(router.locale);

    const handleLangageChange = (e) => {
        const selectedLanguage = e.target.value;
        setSelectedLanguage(selectedLanguage);
        router.push(router.pathname, router.asPath, { locale : selectedLanguage  });
    };

    return (
        <select onChange={handleLangageChange} value={selectedLanguage}>
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    );
        
}