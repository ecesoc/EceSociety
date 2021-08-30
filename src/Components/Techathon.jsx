import React from 'react'
import '../Components/Techathon.css'
import { members } from "../utils/members";
import SpeakerCard from "./SpeakerCard";
export default function Techathon() {
    return (
        <div className="techathon">
<div className='techathon-logo-area'>
            <img className="techathon-logo img-fluid" src="images/Techathon-logo.png" alt="img" />
            <button type='submit' className='register-btn'><a href="https://www.facebook.com/ecesoc.bitmesra">REGISTER NOW!!</a></button>
            <div className='techathon-intro'>
            <span className='make-it-large'>Greetings from the ECE Society, BIT Mesra!!</span> <br />
            Are you bored off sitting at home? Do attending online classes has grossed you?
            When did you last attend an event which is full of enchantment and information? If
            you aren’t able to remember like many others then don’t worry, as we bring an
            engaging event this September for you. Since, we at ECE Society are back with a
            Mega fruitful Event <span>"TECH-A-THON"</span> that will get you involved in learning,
            attending webinars of industrial experts, competing in hackathon, winning
            Certificates and Prizes, and most important of all will give you the needed
            exposure to you in all the various technical fields. This will help you to realize your
            sole purpose of engineering!!
            </div>
        </div>
  <div className="event-details">
            <h1>Details</h1>
            <h2>The event "TECH-A-THON" will be a 5-week long event which will mainly consist of:</h2>
<ul className='event-list'>
    <li>Two Domains:
        <ol>
         <li>
         Embedded Systems / Core Electronics
         </li>
         <li>
         Machine Learning / AI
         </li>
        </ol>
    </li>
    <li>
        Sub-Events
        <ol>
            <li>Webinars (On both the domains)</li>
            <li>Hackathon (On theme based project making in given domains)</li>
            <li>Study Materials (For Reference - through Website/Discord/Mail)</li>
            <li>Certifications for each round and Prizes for winners</li>
        </ol>
    </li>
    <li>
        Participation Criteria
        <ol>
            <li>Team Size: 1-3</li>
            <li>Eligibility: First, Second and Third Year (Engineering Students)</li>
            <li>Registration Platform: D2C
</li>
            <li>Registration Fee: Zero
</li>
        </ol>
    </li>
</ul>
</div>
<div className="event-rounds">
<h3>The event will consist of 4-rounds:</h3>
<ul>
    <li><h4><span className="make-it-bold">ROUND - 1:</span> Online Quiz.</h4></li>
    <li><h4><span className="make-it-bold">ROUND - 2:</span> Prototype Submission.</h4></li>
    <li><h4><span className="make-it-bold">ROUND - 3:</span> Video Submission of the Project Model.</h4></li>
    <li><h4><span className="make-it-bold">ROUND - 4:</span> Final Round is a Live Presentation Interview Round.</h4></li>
</ul>

</div>      

<br/>
<br/>
<br/>
<hr style={{
    width:'100%',
}}/>
<br/>
<br/>
<br/>
<h1 className="timeline-heading">Timeline</h1>
<div class="timeline">
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">4th September</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">Inauguration Ceremony</h2>
    <p class="timeline__paragraph">
    Reowned personalities are invited along with our professors.
    </p>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">ROUND-1(<span className="make-it-light">Online Quiz</span>)</h2>
    <p class="timeline__paragraph">
    Basic Electronics,coding and aptitude would be asked in quiz.
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date">5th September</div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">12th,19th September</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">Online Webinars</h2>
    <p class="timeline__paragraph">
    Each webinar would be conducted in respective domains by industrial experts or reowned personalities.
    </p>
  </div>
  <div class="timeline__component timeline__component--bottom timeline__component--bg">
    <h2 class="timeline__title">ROUND-2(<span className="make-it-light">Prototype Submission</span>)</h2>
    <p class="timeline__paragraph">
    By the end of third week, we would ask for the Prototype Submission.
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
    <div class=" timeline__point--bottom"></div>
  </div>
  <div class="timeline__component timeline__component--bottom">
    <div class="timeline__date">25th September</div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">2nd,3rd October</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">ROUND-3(<span className="make-it-light">Video Submission</span>)</h2>
    <p class="timeline__paragraph">
    In the 4th week, its time to execute ideas, where we would ask for video submission of their Project Model.
    </p>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">ROUND-4(Presentation before jury)</h2>
    <p class="timeline__paragraph">
    Top 5-10 teams would be presenting their projects in fronts of the defined jury.
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date">9th October</div>
  </div>
</div>
<br/>
<br/>
<br/>
<hr style={{
    width:'100%',
}}/>
<br/>
<br/>
<br/>
        <div className="description">
    <h1>Description:</h1>
    <ul className='description-list'>
        <li><h3>1st week</h3>
        <ol>
            <li>The Inauguration Ceremony will begin from the 4th of September where Renowned Personalities are invited along with our Professors.
</li>
           <li>Round-1, The Online Quiz, will take place on 5th September on the D2C Platform itself and the shortlisted candidates will continue for further rounds.
</li>
           <li>The Online Quiz will consist of basic questions from electronics, coding and aptitude.</li>
           <li>A package of study material week-wise will be shared on Website and Discord, as a reference for the project model based on their selected domain to the shortlisted candidates.
</li>
           <li>Ample amount of Study and Preparation Time would be provided and shortlisted candidates can join the discord channel for Doubt Solving along with constant guidance.</li>
           <li>On the 12th of Sept, First webinar would be conducted on one of the two domains by the industrial experts.
</li>
           
        </ol>
        </li>
        <li><h3>2nd week</h3>
        <ol>
            <li>On the 19th of Sept., the second webinar would be conducted on another domain by the industrial experts.
</li>
            <li>Ample amount of Study and Preparation Time would be provided and shortlisted candidates can join the discord channel for Doubt Solving along with constant guidance.</li>
        </ol>
        </li>
        <li><h3>3rd week</h3>
        <ol>
            <li>At the end of the 3rd week, the participants need to submit a prototype of their project model for Round 2 on 25-09-2021.
</li>
            <li>Ample amount of Study and Preparation Time would be provided and shortlisted candidates can join the discord channel for Doubt Solving along with constant guidance.</li>
        </ol>
        </li>
        <li><h3>4th week</h3>
        <ol>
            <li>This week is for the execution of the Prototype Ideas and Video making, where few of the selected videos will be posted on our social media handles with credits.</li>
            <li>On the 2nd and 3rd Oct, the candidates need to send the video of their project model and based on certain judgmental criteria top 5-10 teams will be shortlisted.
</li>
        </ol>
        </li>
        <li><h3>5th week</h3>
        <ol>
            <li>Ample time would be provided to the shortlisted teams for any changes/enhancing the project and PPT preparation for the Live Presentation Interview Round.</li>
            <li>On 9th Oct, the shortlisted teams will have to present their project idea in the form of PPT and Simulation/Live presentation in front of the defined jury panel for the final interview.
</li>
            <li>Top 3 winner teams in each field will be announced soon after the event ends and will be acknowledged with prizes and certificates.</li>
        </ol>
        </li>
    </ul>

</div>
<br/>
<br/>
<br/>
<hr style={{
    width:'100%',
}}/>
<br/>
<br/>
<br/>
<h1 className="Guestlist-title">Guest List</h1>
      <div className="contents">
        <div className="speakers-grid">
          {members.map((member, index) => (
            <SpeakerCard key={index} member={member} />
          ))}
        </div>
      </div>

            <br />
            <br />
            <br />
            <hr style={{
                width: '100%',
            }} />
            <br />
            <br />
            <section className='sponsors'>
                <h1 className="Guestlist-title">Sponsors</h1>
                <br />
                <div className='sponsor-images'>
                    <div className='row'>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <a href="https://foxmula.com/">
                                <img src="images/sponsors/sponsor1.jpg" class="img-fluid" alt=' sponsor image' />
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <a href="">
                                <img src="images/sponsors/sponsor2.jpg" class="img-fluid" alt=' sponsor image' />
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <a href="https://groww.in/">
                                <img src="images/sponsors/sponsor3.jpg" class="img-fluid" alt=' sponsor image' />
                            </a>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <a href="https://herody.in/">
                                <img src="images/sponsors/sponsor4.jpg" class="img-fluid" alt=' sponsor image' />
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <a href="https://www.hotelgreenhorizon.com/">
                                <img src="images/sponsors/sponsor5.png" class="img-fluid" alt=' sponsor image' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
    
        </div>
    )
}
