//jshint esversion:6

const pastEvents=[{
  name:"Teach and Compete",
  Participants:"20",
  src:"Teach-and-compete",
  Description:"Trying to make the best out of this global pandemic situation and taking it as an opportunity to share thier  knowledge to vast number of audiences, ECE SOCIETY has taken a step forward to reach out  students and also teach them over  online platform by uploading videos over Facebook.The competition was held during Mid August to Mid September . With an overwhelming response, of nearly 20 participants from different BIT campuses  competed over weekly topics and provided the students their best knowledge. The topics  to be taught were wisely chosen by the Seniors , so that viewers  could learn and understand the basics, not only the topics were inter-related but also were very technical, so that  the enthusiasts had to explore new paths to learn , understand and teach  to the students. Vibrant entrants gave their best to teach the topics to the audience. The topics given to the participants  in these weeks were , The diode ,  Evolution of Data Storages , Evolution of Processors respectively. It was a very informative session which paved a way for students in learning the basics of ECE. After 3 weeks of teaching ,the final results have to heard out . The  top three winners were to be declared on the basis of teaching skills , content delivered  and number of people liking the videos. Top 3 participants were given a certificate of excellence in teach and compete , contest. With the declaration of results , an enlightening  competition has come to an end.",
  fblink:"",
  instalink:""
},
{
  name:"Analog Circuit Design",
  Participants:" approx 150",
  src:"circuit_design",
  Description:"Three-day workshop was organized on 2nd, 3rd and 4th of February, 2020 by the Electronics and Communication Engineering Society (ECESOC), Birla Institute of Technology, Mesra. Participants undertook exceptional interest in the workshop. Detailed explanation of MOSFETs, its analysis and related circuit design was delivered. The workshop successfully taught valuable topics and helped the students to perceive knowledge in various topics. Many doubts from students were then cleared regarding the topics and even about the future approach regarding advancements in it. This workshop had evolved the plan of our preparation and had amplified our knowledge immensely. The entire go through from basics to advance for the preparation for core companies was given. Guidance to all those who want to pursue higher studies or GATE was given.",
  fblink:"https://www.facebook.com/ecesoc.bitmesra/posts/2594997894075242",
  instalink:"https://www.instagram.com/p/B8LJC7igv25/"
},
{
  name:"Career in Electronics",
  Participants:" approx 150",
  src:"career_in_electronics",
  Description:"In this, they presented every trace of telling about the route of electronics that ECE students would negotiate within upcoming semesters. In this workshop, seniors guided us to prefer the right route so that this quagmire of learning electronics feels like a cakewalk for us with a little planning and guidance. They provided us with every particular detail about how to accomplish this challenging journey in an interesting and fun approach. Starting from the first, they presented the opportunities on where to go, like - Campus placement, Off-Campus, M. S, M. Tech/PSUs, and MBA. They showed a list of companies which visited the campus to recruit graduates in ECE/EEE Core, like–Synopsys, Cypress, Tata Steel, etc. They did a concise description of each of the companies in the above list including the job summary, their eligibility criteria, placement processes, and compensation details. The seniors shared tips and experiences. They presented us the ECESOC Alumni Placement Record of k15 and k16 batch, which was motivating and informational. They conducted a doubt session so they could clear our confusions. This workshop had evolved the plan of our preparation and had amplified our knowledge immensely.",
  fblink:"https://www.facebook.com/ecesoc.bitmesra/posts/2594988827409482",
  instalink:"https://www.instagram.com/p/B8LHk5eAUTW/"
},
{
  name:"Open CV Workshop",
  Participants:" approx 100",
  src:"open_cv",
  Description:"Electronics and Communication Engineering Society (ECESOC), BIT Mesra in collaboration with Innovian Technologies and Technex'20 from IIT BHU, Varanasi successfully conducted this two - day workshop on 19th and 20th October, 2019. The fees for the participation was Rs.600/- (Per Participant). The workshop started with the installation of the necessary platforms and an introduction to Python. Frequent Doubt session was organized in between for the better grasp over the topic. Certificates of excellence were given to the best performing students in the competition which was organized on the last day of the workshop.",
  fblink:"https://www.facebook.com/ecesoc.bitmesra/posts/2491989704376062",
  instalink:""
},
{
  name:"Gateway To Analog",
  Participants:" approx 150",
  src:"gateway_to_analog",
  Description:"A Two-day workshop was organized on 10th and 11th of October, 2019 by the Electronics and Communication Engineering Society (ECESOC), Birla Institute of Technology, Mesra. The objective of the workshop was to give an overview of the basics of subject electronics, the use of technology in our day-to-day lives and make the fresh batch comfortable with the subject. The strength of attendees turned out to be huge. The session was interactive, students came up with doubts and satisfactorily cleared all of them. The passionate crowd enthralled the volunteers to give as much knowledge as possible. The workshop pumped up with the discussion on semiconductors then, their types(N-Type and P-Type),P-N Junction, rectifiers, clippers-clampers, BJT,FET, MOSFET, etc. The volunteers being seniors, gave some tips to tackle the problems regarding the subject , books and sites for reference to the fresh batch. Some practical electronic projects were displayed and their workings were shown to show the applications of the topics taught. The top three students who came out with flying colors were awarded with certificates.",
  fblink:"https://www.facebook.com/ecesoc.bitmesra/posts/2433614343546932",
  instalink:""
},
{
  name:"Gateway To Digital",
  Participants:"50",
  src:"gateway_to_digital",
  Description:"A Two-day workshop was organized on 29th and 30th of September, 2018 by the Electronics and Communication Engineering Society (ECESOC), Birla Institute of Technology, Mesra. The objective of the workshop was to explain how Digital Electronics can be utilised in microprocessor design. The session was interactive, students came up with doubts and satisfactorily cleared all of them at the moment. The passionate attendees enthralled the volunteers to give as much knowledge and information as possible. The workshop involved Comparison of analog and digital electronics, logic functions and truth table, logic gates, basic theorem properties, Boolean Functions, minterm-maxterm, k-map, adder, subtractor, decoder, encoder, mux, demux, flip-flops, etc. The volunteers being seniors, gave some tips to tackle the problems regarding the subject , books and sites for reference. Some practical electronic projects were displayed and their workings were shown to show the applications of the topics taught and hands on hardware projects were provided.Students were awestruck to encounter the working models and the Arduino project outshone all the other projects. The workshop was concluded with certificate of participation given to the attendees to boost their confidence.",
  fblink:"https://www.facebook.com/ecesoc.bitmesra/posts/2433614343546932",
  instalink:""
}];

const ongoingEvents=[];

const comingEvents=[
// {
// name:"",
// src:"",
// rlink:"https://forms.gle/erndqC6ZxtP5gXCS6",
// details:["Greetings from the ECE Society","Let's get this rolling...","ECE Society is all set to ignite the enthusiasm of the students in this pandemic with one of its most informative events...","TEACH AND COMPETE","Heard of it before?","No? stay connected to educate ourselves, shall we?","Formal education makes you a living but, Self-education will make you a fortune, and develop self-confidence.","The winners of this event will be acknowledged with certificates.","Stay awaited !!","Happy Learning !!"],
// fblink:"https://www.facebook.com/1690801124494928/posts/2759457177629312/?sfnsn=wiwspmo&extid=w7zIUFR4I8f9KFXB",
// instalink:"https://www.instagram.com/p/CDsqKPzgyvv/?igshid=9zcyc2o8u19r"
// }
];

export {pastEvents, ongoingEvents, comingEvents};
