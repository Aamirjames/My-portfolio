import { useState, useEffect } from 'react'

export const useTypingEffect = (
  phrases,
  { typeSpeed = 80, deleteSpeed = 40, pauseDuration = 1800 } = {}
) => {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setPhraseIndex((i) => (i + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseDuration])

  return { displayText, isComplete: false }
}
