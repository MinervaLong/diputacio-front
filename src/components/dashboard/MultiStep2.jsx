const Step2 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form>
      <p>
        <input
          className="inputWidth inputMarginTop"
          placeholder="Goal Champions"
          type="text"
          name="goalCh"
          value={data.goalCh}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Assistance Champions"
          type="text"
          name="assistCh"
          value={data.assistCh}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Own Goal "
          type="text"
          name="ownGoalCamp"
          value={data.ownGoalCamp}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Yellow Card Champions"
          type="text"
          name="yellowCardCh"
          value={data.yellowCardCh}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Red Card Champions"
          type="text"
          name="redCardCh"
          value={data.redCardCh}
          onChange={handleChange}
        />
      </p>

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Step2;
