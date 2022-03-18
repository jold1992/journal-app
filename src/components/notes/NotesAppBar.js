import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const {active:note} = useSelector( state => state.notes );

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if(file){
      dispatch(startUploading(file));
    }
  }

  

  const handleSave = () => {
    dispatch(startSaveNote(note));
  }

  return (
    <div className="notes__appbar">
        <span>
            29 de agosto de 2020
        </span>
        <input 
          id='fileSelector'
          name='file'
          type="file" 
          style={{display: "none"}}
          onChange={handleFileChange}
        />
        <div>
            <button 
              className="btn"
              onClick={handlePictureClick}
            >
                Picture
            </button>
            <button className="btn" onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}
