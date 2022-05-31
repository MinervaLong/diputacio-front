const Step1 = (props) => {
  const { data, handleChange, next } = props;
  return (
    <form>
      <p>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="nation">Nation:</label>
        <input
          type="nation"
          name="nation"
          value={data.nation}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="league">League:</label>
        <input
          type="league"
          name="league"
          value={data.league}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="team">Team:</label>
        <input
          type="team"
          name="team"
          value={data.team}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="goalS">Goal Selection:</label>
        <input
          type="goalS"
          name="goalS"
          value={data.goalS}
          onChange={handleChange}
        />
      </p>

      <p>
        <label htmlFor="selectionNation">Selection Nation:</label>
        <input
          type="selectionNation"
          name="selectionNation"
          value={data.selectionNation}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="position">Position:</label>
        <input
          type="position"
          name="position"
          value={data.position}
          onChange={handleChange}
        />
      </p>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Step1;
