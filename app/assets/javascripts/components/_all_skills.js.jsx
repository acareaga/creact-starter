var AllSkills = React.createClass({
    getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    console.log('Hello');
  },

  render() {
    var skills = this.state.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p><strong>Level:</strong> {skill.level}</p>
          <p>{skill.details}</p>
        </div>
      )
    });

    return(
      <div>
        {skills}
      </div>
    )
  }
});
