import './index.css'
import './Carousel.css'
import { Link } from 'react-router-dom'
import Search from './Search'
import logo from '../DummyData/assets/logo.png'

function Home() {

    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div>
                        <img className='logo' width="150" height="150" src={logo} alt="albanian-lek" />
                    </div>
                    <div>
                        <span id='main-title'>
                            <h1 className='title'>Learn. Grow. Achieve.</h1>
                            <h2>“Explore IT, Non-IT, Programming, and Interview Prep—all in one place.”</h2>
                        </span>
                    </div>
                    <div>
                        <Search />
                    </div>
                    
                </div><br /><br />

                <div className='options'>
                    <Link to="/"></Link>
                    <Link to="/IT" className='button'>🖥️ IT</Link>
                    <Link to="/NON-IT" className='button'>✨ Non-IT</Link>
                    <Link to="/INTERVIEW" className='button'>💼 Interview</Link>
                    <Link to="/Languages" className='button'>🎯 Languages</Link>
                    <Link to="/Collab" className='button'>🪢Collab</Link>
                </div>

                <div className="carousel">
                    <div className="group">
                        <div className="element"><img width="200" height="200" src="../DummyData/assets/mongodb.svg" alt="" /></div>
                        <div className="element"><img width="200" height="200" src="../DummyData/assets/python.svg" alt="" /></div>
                        <div className="element"><img width="100" height="100" src="../DummyData/assets/android.svg" alt="" /></div>
                        <div className="element"><img width="150" height="150" src="../DummyData/assets/mysql.svg" alt="" /></div>
                        <div className="element"><img width="100" height="60" src="../DummyData/assets/aws.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/zapier.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/salesforce.svg" alt="" /></div>
                        <div className="element"><img width="80" height="80" src="../DummyData/assets/flutter.svg" alt="" /></div>
                        <div className="element"><img width="100" height="100" src="../DummyData/assets/docker.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/git.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/nvidia.svg" alt="" /></div>

                    </div>
                    <div aria-hidden className="group">
                        <div className="element"><img width="200" height="200" src="../DummyData/assets/mongodb.svg" alt="" /></div>
                        <div className="element"><img width="200" height="200" src="../DummyData/assets/python.svg" alt="" /></div>
                        <div className="element"><img width="100" height="100" src="../DummyData/assets/android.svg" alt="" /></div>
                        <div className="element"><img width="150" height="150" src="../DummyData/assets/mysql.svg" alt="" /></div>
                        <div className="element"><img width="100" height="60" src="../DummyData/assets/aws.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/zapier.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/salesforce.svg" alt="" /></div>
                        <div className="element"><img width="80" height="80" src="../DummyData/assets/flutter.svg" alt="" /></div>
                        <div className="element"><img width="100" height="100" src="../DummyData/assets/docker.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/git.svg" alt="" /></div>
                        <div className="element"><img width="120" height="120" src="../DummyData/assets/nvidia.svg" alt="" /></div>

                    </div>
                </div>
                <div>
                        <h1 style={{display:"flex",justifyContent:"center"}}>
                            Why choose US!?
                        </h1><br />
                    </div>
                <div className='offers'>
                    
                    <div className='provides'>
                        <h3> Hands-on Projects</h3>
                        <h3> Free Mock Interviews</h3>
                        <h3> Resume Builder</h3>
                        <h3> Real-Time Doubt Support</h3>
                    </div>

                    <div className='provides' style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h1>30+</h1>
                        <h2>Courses available</h2>
                    </div>
                    <div className='provides' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1>300K+</h1>
                        <h3>
                            Students Enrolled with 96% Satisfaction Rate
                        </h3>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home