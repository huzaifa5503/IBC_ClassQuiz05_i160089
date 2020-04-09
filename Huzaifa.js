import React from 'react';
import ReactDOM from 'react-dom';
import './Huzaifa.css';
class Huzaifa extends React.Component {
constructor(props) {
super(props);
this.state = {
fname: "Huzaifa",
lname: "Khalid",
uni: "FAST-NUCES",
dept: "BS-CS",

};
}
render() {
return (
<div>
<h1>Assalam o Alaikum</h1>
<h3> My name is {this.state.fname} {this.state.lname} </h3>
<p> I am a student of {this.state.uni} currently enrolled in {this.state.dept}. Apart from curricular activities, I am really into gaming.
I have participated in a number of gaming competitions playing different games like FIFA and Call of duty. Additionally, I love to travel. 
Talking about within Pakistan, I visited a dozen of breathtaking places when I was enroute Khunjerab Pass last year. I really fell in love
with each and every scenery I came across. Talking internationally, I went to Istanbul, Turkey and felt how it was living in a country other 
than Pakistan. It was an extraordinary experience. To add another item to the list of things I like, I am fond of listening melodious tones.
I think thats enough for now. I could go on and on writing pages about what I like :P.  </p>
</div>
);
}
}
export default Huzaifa