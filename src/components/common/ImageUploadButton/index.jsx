import React from 'react'
import { useRef } from 'react';
import { GrEdit } from 'react-icons/gr';
import './styles.css'

const ImageUploadButton = ({ className, onUpload, name, id, accept }) => {
  const uploader = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    onUpload(file);
  };
  return (
    <div className={`file-upload ${className ?? ''}`}>
    <input
      id={id}
      type="file"
      name={name}
      ref={uploader}
      accept={accept}
      onChange={handleFileChange}
      style={{ display: 'none' }}
    />
    <div
      className="upload-btn"
      role="button"
      tabIndex={0}
      onClick={() => uploader?.current?.click()}
    >
      <GrEdit />
    </div>
  </div>
  )
}

export default ImageUploadButton