import React, { useEffect, useState } from 'react'

import { FigletFont, useFiglet } from 'react-hook-figlet'

export const App: React.VFC = () => {
  const [text, setText] = useState<string>('')
  const [font, setFont] = useState<string>('Standard')
  const [figletText, setSourceText, setFigletFont] = useFiglet()

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleChangeFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(e.target.value)
  }

  useEffect(() => {
    setSourceText(text)
  }, [setSourceText, text])

  useEffect(() => {
    setFigletFont(font as FigletFont)
  }, [setFigletFont, font])

  return (
    <>
      <div>
        <textarea name="sourceText" value={text} onChange={handleChangeText} />
        <select defaultValue="Standard" onChange={handleChangeFont}>
          <option value="Standard">Standard</option>
          <option value="Old Banner">Old Banner</option>
          <option value="OS2">OS2</option>
        </select>
      </div>
      <div>
        <pre>{figletText}</pre>
      </div>
    </>
  )
}
