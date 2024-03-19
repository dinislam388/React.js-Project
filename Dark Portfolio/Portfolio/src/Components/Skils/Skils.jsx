import "./Skils.css";
const Skils = () => {
  return (
    <div>
      <div className="skilsContent">
        <>
          {/*  Slide  */}
          <div className="skill-card-wrapper">
            {/* Hard skills card*/}
            <div className="skill-card">
              <div className="skill-card-top gradient-gold">
                <div className="skill-card-icon">
                  <i className="fa fa-user" />
                </div>
              </div>
              <div className="skill-card-content">
                <h4 className="skill-card-title"> Skills</h4>
                <p>Learn, master and develop beutiful art using CSS3</p>
              </div>
              <div className="skill-card-overlay slider">
                <div className="skill-container">
                  <div
                    className="bar top advanced"
                    data-skill="Problem solving"
                  />
                  <div className="bar top intermediate" data-skill="Teamwork" />
                  <div className="bar top basic" data-skill="Creativity" />
                  <div className="bar top expert" data-skill="Communication" />
                  <div
                    className="bar top advanced"
                    data-skill="Preassure management"
                  />
                  <div
                    className="bar top advanced"
                    data-skill="Attention to detail"
                  />
                </div>
              </div>
            </div>
            {/* End of card*/}
            {/* Soft skills card*/}
            {/* Language skill card*/}
            <div className="skill-card">
              <div className="skill-card-top gradient-blue">
                <div className="skill-card-icon">
                  <i className="fa fa-language" />
                </div>
              </div>
              <div className="skill-card-content">
                <h4 className="skill-card-title">Languages</h4>
                <p>Learn, master and develop beutiful art using CSS3</p>
              </div>
              <div className="skill-card-overlay slider">
                <div className="skill-container">
                  <div className="bar back expert" data-skill="English" />
                  <div className="bar back expert" data-skill="Spanish" />
                  <div className="bar back basic" data-skill="French" />
                  <div className="bar back learning" data-skill="German" />
                </div>
              </div>
            </div>
            {/* End of card*/}
            {/*Development skills card */}
            <div className="skill-card">
              <div className="skill-card-top gradient-red">
                <div className="skill-card-icon">
                  <i className="fa fa-code" />
                </div>
              </div>
              <div className="skill-card-content">
                <h4 className="skill-card-title">Development</h4>
                <p>Learn, master and develop beutiful art using CSS3</p>
              </div>
              <div className="skill-card-overlay slider">
                <div className="skill-container">
                  <div className="bar sideway advanced" data-skill="Python" />
                  <div className="bar sideway intermediate" data-skill="C#" />
                  <div
                    className="bar sideway intermediate"
                    data-skill="Javascript"
                  />
                  <div className="bar sideway advanced" data-skill="CSS3" />
                  <div className="bar sideway advanced" data-skill="HTML5" />
                  <div className="bar sideway learning" data-skill="Flutter" />
                  <div className="bar sideway learning" data-skill="GoLang" />
                </div>
              </div>
            </div>
            {/* End of card*/}
            {/* Software skills card*/}
            <div className="skill-card">
              <div className="skill-card-top gradient-green">
                <div className="skill-card-icon">
                  <i className="fa fa-sitemap" />
                </div>
              </div>
              <div className="skill-card-content">
                <h4 className="skill-card-title">Software</h4>
                <p>Learn, master and develop beutiful art using CSS3</p>
              </div>
              <div className="skill-card-overlay slider">
                <div className="skill-container">
                  <div className="bar front advanced" data-skill="Matlab" />
                  <div
                    className="bar front basic"
                    data-skill="Autodesk Inventor"
                  />
                  <div className="bar front advanced" data-skill="Dialux" />
                  <div className="bar front advanced" data-skill="HaggerCAD" />
                  <div
                    className="bar front basic"
                    data-skill="Android Studio"
                  />
                  <div className="bar front expert" data-skill="MS Office" />
                </div>
              </div>
              {/* End of card*/}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Skils;
