import Header from './header';
import './resume-page.css';

function Resume() {
    return (
        <div className='resume-page-container'>
            <Header />
            <div className='resume-page-content-container'>
                <div className='resume-page-content'>
                    <embed src="./aaronhung_resume.pdf" frameborder='0' style={{width: '45vw', height: '97vh', borderRadius: '20px'}}></embed>
                </div>
            </div>
        </div>
    );
}

export default Resume;