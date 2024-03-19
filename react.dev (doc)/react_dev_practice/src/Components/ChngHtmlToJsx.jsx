// Chalenges: Challenge 1 of 1: Convert some HTML to JSX

// const ChngHtmlToJsx = () => {
//     return (
//         <div>
//             <div className="intro">
//                 <h1>Welcome to my website!</h1>
//                 </div>
//                 <p className="summary">
//                     You can find my thoughts here.
//                     <br><br/>
//                 </br>And <i>pictures <br />
//                 </i> if scientists!
//                 </p>
//         </div>
//     );
// };

// export default ChngHtmlToJsx;

// ================================================>

// Challenge 1 of 3: Fix the mistake..

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  
  