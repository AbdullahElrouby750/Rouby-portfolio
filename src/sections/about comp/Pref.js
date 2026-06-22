import React from 'react'
import Buttons from '../../componants/Buttons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import style from './Pref.module.css';

export default function Pref() {
    const aboutMe1 = "Hey there! I'm Abdullah Elrouby, a Frontend Developer and Computer Engineering graduate dedicated to building fast, scalable, and visually stunning user interfaces."
    const aboutMe2 = "While I appreciate great UI/UX, I am obsessed with what happens under the hood. I specialize in the React/Next.js ecosystem, using TypeScript and advanced state management to build seamless web experiences. My closet of digital projects doesn't feature generic templates; it features award-winning architectures—like an AI-enabled platform pitched to a 4th-place finish at a major hackathon, and applications optimized to slash redundant API calls completely."
    const aboutMe3 = "For me, writing code is about solving complex puzzles that directly impact business goals and user satisfaction. Whether optimizing Core Web Vitals to boost load speeds by 75% or designing robust component layouts, I bring a mix of dedicated technical expertise and creative problem-solving to the table. Let's connect and build something exceptional together."

    const date = new Date()
    const currentYear = date.getFullYear();
    const birthYear = 2003;
    const age = currentYear - birthYear;    
    const hireMe = function(){
        console.log('clicked');

        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=roubyofficial@gmail.com&su=Jop&body=Your%20Email%20Content", "_blank","noreferrer");
    }

    const downloadCV = function(){
        console.log('clicked');
        
        const link = document.createElement("a");
        link.href = process.env.PUBLIC_URL + "/resume/Resume.pdf";
        link.download = "Abdullah_Elrouby_s_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className={`w-50 my-5 ${style.pref}`}>
            
            <ul className=' w-100 p-0 list-unstyled row'>
                <li className=' text-start col-6'><span className='  fw-bold me-2'>Name: </span>Abdullah Elrouby</li>
                <li className=' text-start col-6'><span className='  fw-bold me-2'>Age: </span>{age} Year</li>
                <li className=' text-start col-6'><span className='  fw-bold me-2'>Freelance: </span>Available</li>
                <li className=' text-start col-6'><span className='  fw-bold me-2'>Job Title: </span>Web Developer</li>
                <li className=' text-start col-6'><span className='  fw-bold me-2'>E-mail: </span>roubyofficial@gmail.com</li>
            </ul>

            <h2 className=' my-4'>HELLO,</h2>
            <p className='w-100'>{aboutMe1}</p>
            <p className='w-100'>{aboutMe2}</p>
            <p className='w-100'>{aboutMe3}</p>


            <div className='d-flex justify-content-start mt-5'>
                
                <Buttons handelClick={downloadCV} icon ={faDownload}>DownLoad CV</Buttons>
                <Buttons handelClick={hireMe} icon ={faPaperPlane}>Hire ME</Buttons>
            </div>
        </div>
    )
}