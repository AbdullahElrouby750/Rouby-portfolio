import {useRef, createContext} from 'react'

export const sectionRef = createContext({
    home: null,
    about: null,
    services: null,
    projects: null,
    contact: null
})

export default function SectionRefContextProvider(props) {

  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const context = {
    home: home,
    about: about,
    services: services,
    projects: projects,
    contact: contact
  }

    
  return (
    <sectionRef.Provider value={context}>{props.children}</sectionRef.Provider>
  )
}
