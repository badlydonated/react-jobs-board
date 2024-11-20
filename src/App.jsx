import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings";   
import ViewAllJobs from "./components/ViewAllJobs";     
        
        // Each child in a list should have a unique "key" prop.
          // If setting the key to something dynamic, use { }
          // props = attributes

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}; 

export default App

          
