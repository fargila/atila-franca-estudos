import { useRef, useState, useEffect } from 'react'
import Toolbar from './components/Toolbar'
import styles from './styles/App.module.css'
import { marked } from 'marked'

const App: React.FC = () => {
  const [text, setText] = useState<string>(localStorage.getItem('markdownText') || ('#I am quite silly!'))
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  
  function renderText() {
    return { __html: marked(text) }
  }

  useEffect(() => {
    localStorage.setItem('markdownText', text)
  }, [text])

  const insertText = (before: string, after: string) => {
    const textArea = textAreaRef.current

    if(textArea)
    {
      const textArea = textAreaRef.current
    const start = (textArea as HTMLTextAreaElement).selectionStart
    const end = (textArea as HTMLTextAreaElement).selectionEnd
    const previousText = textArea!.value
    const beforeText = previousText.substring(0, start)
    const selectText = previousText.substring(start, end)
    const afterText = previousText.substring(end)

    const newText = `${beforeText}${before}${selectText}${after}${afterText}`
    
    setText(newText)
    textArea!.focus()
    }
  }

  return (
    <div className={styles.app_container}>
      <Toolbar insertText={insertText}/>
      <div><textarea ref={textAreaRef} value={text} onChange={(e) => setText(e.target.value)}></textarea></div>
      <div dangerouslySetInnerHTML={ renderText() }></div>
    </div>
  )
}

export default App
