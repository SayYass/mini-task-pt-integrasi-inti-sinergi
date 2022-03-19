import './warning.scss'
import ReportIcon from '@mui/icons-material/Report';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
const WarningModal = () => {
    
    window.addEventListener('offline', function(e) { 
        const modal = document.querySelector('.warning');
        modal.style.display = 'flex'; });
    window.addEventListener('online', function(e) { 
        const modal = document.querySelector('.warning');
        modal.style.display = 'none'; });
    
    
  return (
    <div className="warning">
        <div className="warning-icon">
            <ReportIcon  />
        </div>
        <div className="warning-detail">
            <div className='warning-title'>Jaringan internet anda terputus!</div>
            <p>Sepertinya anda tidak terhubung dengan internet. Coba periksa jaringan internet anda.</p>
            <span className='coba-lagi'>Coba lagi</span>
        </div>
        <div className="close-button">
            <CloseIcon />
        </div>
    </div>
  )
}

export default WarningModal