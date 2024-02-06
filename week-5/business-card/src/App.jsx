import "./App.css";

function App() {
  return (
    <div>
      <Card
        name="John Doe"
        description="A software engineer"
        interests={["Coding", "Reading", "Gaming"]}
        LinkedIn="https://www.linkedin.com/in/johndoe"
        twitter="https://twitter.com/johndoe"
        otherSocialmedias={{
          link: "https://example.com",
          label: "Social Media",
        }}
      />
    </div>
  );
}
function Card(props) {
  return (
    <div style={styles.card}>
      <h1 style={styles.name}>{props.name}</h1>
      <p>{props.description}</p>
      <h2>Interests</h2>
      <ul>
        {props.interests.map((interest) => {
          <li key={interest}>{interest}</li>;
        })}
      </ul>

      <div className="socials">
        <a href={props.LinkedIn} target="_blank " rel="noopener noreferrer">
          Linkedin
        </a>
        <br></br>
        <a href={props.twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <br></br>
        {props.otherSocialmedias && (
          <div>
            <a
              href={props.otherSocialmedias}
              target="_blank"
              rel="noopeer noreferrer"
            >
              {props.otherSocialmedias.label}
            </a>
            <br></br>
          </div>
        )}
      </div>
    </div>
  );
}
const styles = {
  card: {
    border: "2px solid #171615",
    borderRadius: "2px",
    padding: "20px",
    boxShadow: "0px 3px 8px rgba(0,0,0,0.3)",
    margin: "20px",
    maxWidth: "400px",
    backgroundColor: "#f8f9fa",
  },
  name: {
    fontSize: "24px",
  },
};
export default App;
