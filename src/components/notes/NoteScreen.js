import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
            <input 
                type="text" 
                placeholder="Some awesome title"
                className="notes__title-input"
                autocomplete="off"
            />

            <textarea 
                placeholder="What's happened today"
                className="notes__textarea"
            />
        </div>

        <div className="notes__image">
            <img 
                src="https://images.vexels.com/media/users/3/135557/isolated/lists/bfccc4182a87a6ccfaa3be53ee9bed60-icono-de-circulo-de-calendario.png"
                alt="imagen"
            />
        </div>
    </div>    
  )
}
