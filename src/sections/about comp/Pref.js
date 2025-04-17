import React from 'react'
import Buttons from '../../componants/Buttons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import style from './Pref.module.css';

export default function Pref() {
    const aboutMe1 = "Hello, I'm Abdullah Elrouby, your go-to Frontend Developer from the land of Egypt, where we not only craft pyramids but also pixel-perfect, interactive web applications. With a Bachelor's degree in Computer Engineering, my coding arsenal is brimming with skills in HTML, CSS, JavaScript, and a sharp proficiency in React and Bootstrap — but that's just the tip of the iceberg.";
    const aboutMe2 = "In my portfolio, you’ll discover a range of projects from weather apps that outsmart local meteorologists to a recipe search website that could make your grandma jealous, and a product management system that’s as orderly as a bookstore index. These are just a few examples; I have a whole closet full of digital magic tricks that showcase my ability to blend functionality with a flair for user-friendliness.";
    const aboutMe3 = "Who needs coffee when you’ve got a relentless curiosity and a knack for solving puzzles that would make Sherlock jealous? I thrive on unraveling the knottiest coding challenges with a dash of creativity and a strategic twist, all backed by my multiverse theory of problem-solving. I’m on a quest for a team that values a bit of genius, a touch of eccentricity, and appreciates the art of a well-timed meme as we craft digital masterpieces together.";

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
                <li className=' text-start col-6'><span className='  fw-bold me-2'>Age: </span>21 Year</li>
                <li className=' text-start col-6'><span className='  fw-bold me-2'>Freelance: </span>Available</li>
                <li className=' text-start col-6'><span className='  fw-bold me-2'>Job Title: </span>Web Developer</li>
                <li className=' text-start col-12'><span className='  fw-bold me-2'>E-mail: </span>roubyofficial@gmail.com</li>
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