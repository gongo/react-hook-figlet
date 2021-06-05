import { useEffect, useState } from 'react'
import figlet, { Fonts } from 'figlet'

type FontLoadStatus = {
  [fontName in Fonts]: boolean
}

export function useFiglet(initialFont?: Fonts): [string, (text: string) => void, (font: Fonts) => void] {
  const [sourceText, setSourceText] = useState<string>('')
  const [figletText, setFigletText] = useState<string>('')
  const [font, setFont] = useState<Fonts>(initialFont || 'Standard')
  const [fontLoadStatus, setFontLoadStatus] = useState<FontLoadStatus>({ [font]: false } as FontLoadStatus)

  useEffect(() => {
    if (!fontLoadStatus[font]) {
      return
    }

    figlet.text(sourceText, { font: font }, (_, result): void => {
      if (result !== undefined) {
        setFigletText(result)
      }
    })
  }, [sourceText, font, fontLoadStatus])

  useEffect((): void => {
    if (fontLoadStatus[font]) {
      return
    }

    import(`figlet/importable-fonts/${font}.js`).then((module: { default: string }): void => {
      figlet.parseFont(font, module.default)
      setFontLoadStatus((prev: FontLoadStatus) => {
        return Object.assign({}, prev, { [font]: true })
      })
    })
  }, [font])

  return [figletText, setSourceText, setFont]
}
