import "./multistep1.css";

const Step1 = (props) => {
  const { data, handleChange, next } = props;
  return (
    <form>
      <div className="grid">
        <p>
          <input
            className="inputWidth inputMarginTop div1"
            placeholder="Age"
            type="text"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            className="inputWidth div2"
            placeholder="Nation"
            type="nation"
            name="nation"
            value={data.nation}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            className="inputWidth div3"
            placeholder="League"
            type="league"
            name="league"
            value={data.league}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            className="inputWidth div4"
            placeholder="Team"
            type="team"
            name="team"
            value={data.team}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            className="inputWidth div5"
            placeholder="Goals Selection"
            type="text"
            name="goalS"
            value={data.goalS}
            onChange={handleChange}
          />
        </p>

        <p>
          <input
            className="inputWidth div6"
            placeholder="Selection Nation"
            type="selectionNation"
            name="selectionNation"
            value={data.selectionNation}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            className="inputWidth div7"
            placeholder="Position"
            type="position"
            name="position"
            value={data.position}
            onChange={handleChange}
          />
        </p>
        <button className="div8 custom__button" onClick={next}>
          Next
        </button>
      </div>
    </form>
  );
};
export default Step1;
