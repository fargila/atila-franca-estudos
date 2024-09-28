import React from 'react'
import styles from '../styles/Toolbar.module.css'

interface ToolbarProps {
    insertText: (before: string, after: string) => void
}

const Toolbar: React.FC<ToolbarProps> = ({ insertText }) => {
  return (
    <div className={styles.toolbar}>
      <button onClick={() => insertText('# ', '')}>h1</button>
      <button onClick={() => insertText('## ', '')}>h2</button>
      <button onClick={() => insertText('**', '**')}>Bold</button>
      <button onClick={() => insertText('*', '*')}>Italico</button>
      <button onClick={() => insertText('[', '](https://)')}>Link</button>
      <button onClick={() => insertText('```', '```')}>Code Block</button>
      <button onClick={() => insertText('- ', '')}>List Item</button>
      <button onClick={() => insertText('\n---\n', '')}>Horinzontal Line</button>
    </div>
  )
}

export default Toolbar
