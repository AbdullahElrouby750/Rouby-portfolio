

import React, { useState, useEffect } from 'react'
import Project from './Project';

import app from '../../fireBase';
import {getDatabase, ref, get} from "firebase/database";


export default function ProjectsCollection({setProjects, targetProjects }) {

    const [projectsData, setProjectsData] = useState([])

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
        fetchData();  // Call the fetchData function inside the effect
        // eslint-disable-next-line
    }, []);  
    return (
        <>
            {projectsData.map(project => {
                return <Project key={targetProjects+project.id} data={project} />
            })}
        </>
    )
}
