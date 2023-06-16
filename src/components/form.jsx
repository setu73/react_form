import React, { useState , useRef} from 'react';

function FormValidation() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const mobileRef = useRef(null);
    const [workExperience, setWorkExperience] = useState('None');
    const [opinion, setOpinion] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleExperienceChange = (event) => {
      setWorkExperience(event.target.value);
    };

    const handleOpinionChange = (event) => {
        setOpinion(event.target.value);
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      
      const isNameValid = name.trim().length > 0;
      const isEmailValid = /\S+@\S+\.\S+/.test(email);
  
      setIsNameValid(isNameValid);
      setIsEmailValid(isEmailValid);
  
      if (isNameValid && isEmailValid) {
        
       const selectedLanguage = document.querySelector(
          'input[name="fav_framework"]:checked'
        ).value;
  
        
        const mobileValue = mobileRef.current.value;
  
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Mobile:', mobileValue);
        console.log('Favorite framework:', selectedLanguage);
        console.log('Work Experience: ',workExperience);
        console.log("user's opinion: ", opinion);
  
        
        setName('');
        setEmail('');
        mobileRef.current.value = '';
        setOpinion('');
        event.target.reset();
      }
      
    };

  return (
    <div className="container">
      <h1>Favourite framework</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter Your Name"
          />
          {!isNameValid && <span>Please enter a valid name</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Your Email"
          />
          {!isEmailValid && <span>Please enter a valid email</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            ref={mobileRef}
            placeholder="Enter mobile number"
          />

        </div>
        <div className="form-group">
          <label>Favourite Framework:</label>
          <div>
            <input type="radio" id="react" name="fav_framework" value="react" />
            <label htmlFor="react">react</label>
          </div>
          <div>
            <input type="radio" id="angular" name="fav_framework" value="Angular" />
            <label htmlFor="angular">Angular</label>
          </div>
          <div>
            <input  type="radio" id="vue" name="fav_framework" value="Vue" />
            <label htmlFor="vue">Vue</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="experience">Work Experience:</label>
          <select id="experience" value={workExperience} onChange={handleExperienceChange}>
            <option value="None">None</option>
            <option value="Less than a year">Less than a year</option>
            <option value="More than a year">More than a year</option>
          </select>
        </div>
        <div className='form-group'>
           <label for="review">Write about selected framework:</label>

           <textarea 
           id="opinion" 
           name="opnion" 
           value={opinion}
           onChange={handleOpinionChange}
           rows="9" cols="50" required
           />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
