import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import photoService from '../../../services/photoService';
import imageCompression from 'browser-image-compression';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrash, faImage } from '@fortawesome/free-solid-svg-icons';
import './PhotoManager.scss';

const PhotoManager = ({ setMessage }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const data = await photoService.getAllPhotos();
      setPhotos(data);
    } catch (error) {
      console.error('Lỗi khi tải ảnh:', error);
      setMessage({ type: 'error', text: 'Không thể tải danh sách ảnh.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line
  }, []);

  const processFiles = (selectedFiles) => {
    if (selectedFiles.length > 5) {
      Swal.fire('Cảnh báo!', 'Chỉ được chọn tối đa 5 ảnh cùng lúc.', 'warning');
      selectedFiles.splice(5);
    }
    if (selectedFiles.length > 0) {
      setFiles(selectedFiles);
      setPreviews(selectedFiles.map(file => URL.createObjectURL(file)));
    }
  };

  const handleFileChange = (e) => {
    processFiles(Array.from(e.target.files));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setMessage({ type: 'error', text: 'Vui lòng chọn ít nhất một ảnh.' });
      return;
    }

    try {
      setUploading(true);

      const options = {
        maxSizeMB: 1, // Max file size in MB
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      const uploadPromises = files.map(async (fileObj) => {
        const compressedFile = await imageCompression(fileObj, options);
        const formData = new FormData();
        formData.append('image', compressedFile);
        return photoService.uploadPhoto(formData);
      });

      await Promise.all(uploadPromises);
      
      Swal.fire('Thành công!', `Đã tải lên ${files.length} ảnh thành công.`, 'success');
      setMessage({ type: 'success', text: `Tải lên ${files.length} ảnh thành công.` });
      
      // Reset form
      setFiles([]);
      setPreviews([]);
      
      // Refresh list
      fetchPhotos();
    } catch (error) {
      console.error('Lỗi upload:', error);
      Swal.fire('Lỗi!', 'Không thể tải ảnh lên.', 'error');
      setMessage({ type: 'error', text: 'Lỗi khi tải ảnh lên.' });
    } finally {
      setUploading(false);
    }
  };



  const toggleSelectPhoto = (id) => {
    setSelectedPhotos(prev => 
      prev.includes(id) ? prev.filter(photoId => photoId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedPhotos.length === photos.length) {
      setSelectedPhotos([]);
    } else {
      setSelectedPhotos(photos.map(p => p.photo_id));
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedPhotos.length === 0) return;

    const result = await Swal.fire({
      title: `Xóa ${selectedPhotos.length} ảnh?`,
      text: "Hành động này không thể hoàn tác!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Đồng ý, Xóa!',
      cancelButtonText: 'Hủy'
    });

    if (result.isConfirmed) {
      try {
        setLoading(true);
        await Promise.all(selectedPhotos.map(id => photoService.deletePhoto(id)));
        Swal.fire('Đã xóa!', `Đã xóa thành công ${selectedPhotos.length} ảnh.`, 'success');
        setSelectedPhotos([]);
        fetchPhotos();
      } catch (error) {
        console.error('Lỗi xóa nhiều ảnh:', error);
        Swal.fire('Lỗi!', 'Không thể xóa một số ảnh.', 'error');
        setLoading(false);
      }
    }
  };

  return (
    <div className="photo-manager">
      <div className="upload-section">
        <h3>Tải Ảnh Mới</h3>
        <form onSubmit={handleUpload} className="upload-form">
          <div 
            className={`dropzone ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input type="file" id="file-input" accept="image/*" multiple onChange={handleFileChange} hidden />
            <label htmlFor="file-input" className="dropzone-label">
              <FontAwesomeIcon icon={faUpload} className="dropzone-icon" />
              <h4>Kéo & Thả ảnh vào đây</h4>
              <p>hoặc nhấn để chọn từ máy tính</p>
              <span className="file-limit">Tối đa 5 ảnh cùng lúc (chỉ hỗ trợ file ảnh)</span>
            </label>
          </div>
          
          {previews.length > 0 && (
            <div className="preview-container">
              {previews.map((src, idx) => (
                <img key={idx} src={src} alt="Preview" className="image-preview-multiple" />
              ))}
            </div>
          )}

          <button type="submit" className="btn btn-primary" disabled={uploading || files.length === 0}>
            <FontAwesomeIcon icon={faUpload} /> {uploading ? 'Đang tải lên...' : 'Tải Lên'}
          </button>
        </form>
      </div>

      <div className="gallery-section">
        <div className="gallery-header">
          <h3>Danh Sách Ảnh ({photos.length})</h3>
          {photos.length > 0 && (
            <div className="bulk-actions">
              <button className="btn-select-all" onClick={handleSelectAll}>
                {selectedPhotos.length === photos.length ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
              </button>
              {selectedPhotos.length > 0 && (
                <button className="btn-delete-selected" onClick={handleDeleteSelected}>
                  <FontAwesomeIcon icon={faTrash} /> Xóa đã chọn ({selectedPhotos.length})
                </button>
              )}
            </div>
          )}
        </div>
        {loading ? (
          <p>Đang tải...</p>
        ) : photos.length === 0 ? (
          <p>Chưa có ảnh nào.</p>
        ) : (
          <div className="photo-grid">
            {photos.map(photo => (
              <div 
                key={photo.photo_id} 
                className={`photo-card ${selectedPhotos.includes(photo.photo_id) ? 'selected' : ''}`}
                onClick={() => toggleSelectPhoto(photo.photo_id)}
              >
                <div className="checkbox-overlay">
                  <input 
                    type="checkbox" 
                    checked={selectedPhotos.includes(photo.photo_id)}
                    onChange={() => {}} 
                  />
                </div>
                <img src={photo.image_url} alt="Gallery photo" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoManager;
