

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Project from './Project';

import app from '../../fireBase';
import {getDatabase, ref, get} from "firebase/database";

import style from './ProjectsCollection.module.css';

export default function ProjectsCollection({setProjects, targetProjects }) {

    const [projectsData, setProjectsData] = useState([])
    const [isOverflowing, setIsOverflowing] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const db = getDatabase(app);
            const projectsRef = ref(db, 'projects');
            const projectsSnapshot = await get(projectsRef);
            if (projectsSnapshot.exists()) {
                const projectSnap = projectsSnapshot.val();
                const data = Object.values(projectSnap)[0];
    
                setProjects(data);
                setProjectsData(data[targetProjects]);
            }
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    // Measure container vs content width to determine if marquee is needed
    useLayoutEffect(() => {
        if (contentRef.current && containerRef.current) {
            const contentWidth = contentRef.current.scrollWidth;
            const containerWidth = containerRef.current.offsetWidth;
            
            // Add small buffer (5%) for smoother marquee triggering
            const isContentOverflowing = contentWidth > containerWidth * 1.05;
            setIsOverflowing(isContentOverflowing);
        }
    }, [projectsData]);

    return (
        <div 
            ref={containerRef}
            className={`${style.collectionWrapper} ${isOverflowing ? style.marquee : style.centeredFlex}`}
        >
            <div 
                ref={contentRef}
                className={style.projectsContainer}
            >
                {projectsData.map(project => {
                    return <Project key={targetProjects + project.id} data={project} />
                })}
            </div>
            
            {/* Duplicate projects for seamless marquee loop */}
            {isOverflowing && (
                <div className={style.projectsContainer + ' ' + style.duplicate}>
                    {projectsData.map(project => {
                        return <Project key={targetProjects + project.id + '-duplicate'} data={project} />
                    })}
                </div>
            )}
        </div>
    )
}
