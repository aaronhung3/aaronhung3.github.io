import Header from './header';
import './project-page.css';
import { useState } from 'react';

function Project() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <div className='project-page-container'>
            <Header />
            <div className='project-page-content-container'>
                <div className='project-page-code-box'>
                    <div className='code-box-header'>
                        <div className='code-box-header-left'>
                            <span className='code-box-header-dot first-dot'></span>
                            <span className='code-box-header-dot second-dot'></span>
                            <span className='code-box-header-dot third-dot'></span>
                        </div>
                        <div className='code-box-header-middle'>
                            <span className='code-box-header-name'> Aaron's Projects</span>
                        </div>
                        <div className='code-box-header-right'></div>
                    </div>
                    <div className='code-box'>
                        <div className='code-box-left'>
                            <div className='code-box-up'>
                                <div className='code-box-textbox'>
                                    <span>from PIL import Image</span><br/>
                                    <span>def main():</span>
                                    <span>&nbsp;&nbsp;project_list = [ </span>
                                    <span>&nbsp;&nbsp;"Sushi Restaurant API", </span>
                                    <span>&nbsp;&nbsp;"Dungeon Crawler", </span>
                                    <span>&nbsp;&nbsp;"Electricity Tracker",  </span>
                                    <span>&nbsp;&nbsp;"Stroke Predictor,"</span>
                                    <span>&nbsp;&nbsp;"Valorant Match Predictor"</span>
                                    <span>&nbsp;&nbsp;]</span>
                                    <span>&nbsp;&nbsp;user_input = input("Select the project you want to see: ")</span><br/>
                                    <span>&nbsp;&nbsp;image = Image.open(f"&#123; user_input &#125;")</span>
                                    <span>&nbsp;&nbsp;image.show()</span><br/><br/>
                                    <span>main()</span>
                                </div>
                            </div>
                            <div className='code-box-down'>
                                <div className='code-box-down-textbox'>
                                    <label for='project-names'>
                                        &#62;&#62; Select the project you want to see:&nbsp;
                                        <select value={selectedValue} onChange={handleSelectChange}>
                                            <option value="" disabled selected>Select project...</option>
                                            <option value="Sushi Restaurant API">Sushi Restaurant API</option>
                                            <option value="Dungeon Crawler">Dungeon Crawler</option>
                                            <option value="Electricity Tracker">Electricity Tracker</option>
                                            <option value="Stroke Predictor">Stroke Predictor</option>
                                            <option value="Valorant Match Predictor">Valorant Match Predictor</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='code-box-right'>
                            <div className='code-box-right-content'>
                                {selectedValue === 'Sushi Restaurant API' && 
                                <div className="code-page-container" >
                                    <div className='code-page-header'>
                                        <span>Sushi Restaurant API</span>
                                    </div>
                                    <div className='code-page-content-box'>
                                        <div className='code-page-image'><img src="/images/sushiapi.png" alt='Sushi API' id="sushi-image"/></div>
                                        <div className="code-page-content">
                                            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Tools: Python, FastAPI, YelpAPI, Postman</span>
                                            <span>
                                                Created a FastAPI application that allows users to view all the Sushi Restaurants in a specified city inside the US. The application uses the YelpAPI to fetch restaurant data and displays it in a JSON format. Debugged and tested by utilizing Postman to ensure the API endpoints were functioning correctly. Uvicorn was used to run the FastAPI server.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                }
                                {selectedValue === 'Dungeon Crawler' && 
                                <div className="code-page-container" >
                                    <div className='code-page-header'>
                                        <span>Dungeon Crawler</span>
                                    </div>
                                    <div className='code-page-content-box'>
                                        <div className='code-page-image'><img src="/images/dungeon.jpeg" alt='Dungeon Crawler' id="dungeon-image"/></div>
                                        <div className="code-page-content">
                                            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Tools: Java, Android Studio, libgdx</span>
                                            <span>
                                                Created an Android dungeon crawler game with a team of 5 using Java. The game features a player character that can move around a grid-based dungeon, collect items, and fight enemies. The game includes a variety of potion buffs and enemies, each with their own unique properties. Created unit tests for the game to ensure that added features were functioning properly. The game was built using the libgdx framework, which allowed for easy cross-platform development and deployment.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                }
                                {selectedValue === 'Electricity Tracker' && 
                                <div className="code-page-container" >
                                    <div className='code-page-header'>
                                        <span>Electricity Tracker</span>
                                    </div>
                                    <div className='code-page-content-box'>
                                        <div className='code-page-image'><img src='/images/electricity.png' alt='Electricity Tracker' id="electricity-image"/></div>
                                        <div className="code-page-content">
                                            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Tools: Python, SQL, React</span>
                                            <span>
                                                Worked with a team of 5 to create an eletrciity tracker application for our client SLB. The web application allows users to input cvs files containing electricity data usage and see the data in a user-friendly format. The formats include line graphs, pie charts, calendars, and warning reports. The frontend was built using React, while the backend was built using Python and SQL. The application was designed to be user-friendly and easy to navigate, with a focus on providing clear and concise information about electricity usage.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                }
                                {selectedValue === 'Stroke Predictor' && 
                                <div className="code-page-container" >
                                    <div className='code-page-header'>
                                        <span>Stroke Predictor</span>
                                    </div>
                                    <div className='code-page-content-box'>
                                        <div className='code-page-image'><img src='/images/stroke.png' alt='Stroke Predictor' id="stroke-image"/></div>
                                        <div className="code-page-content">
                                            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Tools: Python, scikit-learn, Random Forest, SVM, XGBoost</span>
                                            <span>
                                                Worked with a team of 5 to create a stroke predictor using Python and scikit-learn. The predictor uses various machine learning algorithms, including random forest, SVM, and XGBoost, to predict the likelihood of a stroke based on user input. The predictor was trained using a dataset of over 5000 patients, with 12 different features. Achieved over 90% accuracy on the test set for the random forest and XGboost models.
                                            </span>
                                            <span style={{marginTop: '10px', textDecoration: 'underline'}}><a href='https://github.gatech.edu/pages/ikim319/ML4641-Group8/' target="_blank" rel="noreferrer">Link to project documentation</a></span>
                                        </div>
                                    </div>
                                </div>
                                }
                                {selectedValue === 'Valorant Match Predictor' && 
                                <div className="code-page-container" >
                                    <div className='code-page-header'>
                                        <span>Valorant Match Predictor</span>
                                    </div>
                                    <div className='code-page-content-box'>
                                        <div className='code-page-image'><img src="/images/valorant.png" alt='Valorant Predictor' id="valorant-image"/></div>
                                        <div className="code-page-content">
                                            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Tools: Python, pandas, scikit-learn, React</span>
                                            <span>
                                                Currently working on a Valorant match predictor using Python, pandas, and scikit-learn. The predictor will pull past data from a cvs file and use it to predict the outcome of a match. The predictor will be trained using various machine learning algorithms, including linear regression and random forest. The goal of the project is to create a reliable and accurate predictor that can predict the winner of a tournament. The fronend will be built using React, allowing users to pair two teams together and see the predicted outcome of the match.
                                            </span>
                                            <span style={{marginTop: '10px', textDecoration: 'underline'}}><a href='https://docs.google.com/document/d/1NYj2-fIQJmnMCQw1ii52-v3lYXf1EBKor8Nac7f-uSI/edit?usp=sharing' target="_blank" rel="noreferrer">Link to project documentation</a></span>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;