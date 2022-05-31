const Step2 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form>
      <p>
        <label htmlFor="goalCh">Goal Champions:</label>
        <input
          type="text"
          name="goalCh"
          value={data.goalCh}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="assistCh">Assistance Champions:</label>
        <input
          type="text"
          name="assistCh"
          value={data.assistCh}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="ownGoalCamp">Own Goal Camp:</label>
        <input
          type="text"
          name="ownGoalCamp"
          value={data.ownGoalCamp}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="yellowCardCh">Yellow Card Champions:</label>
        <input
          type="text"
          name="yellowCardCh"
          value={data.yellowCardCh}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="redCardCh">Red Card Champions:</label>
        <input
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
