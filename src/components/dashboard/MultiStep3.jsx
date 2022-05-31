const Step3 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form>
      <p>
        <input
          className="inputWidth inputMarginTop"
          placeholder=" Goal Cup"
          type="text"
          name="goalCup"
          value={data.goalCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Assistance Cup"
          type="text"
          name="assistCup"
          value={data.assistCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Own Goal Cup"
          type="text"
          name="ownGoalCup"
          value={data.ownGoalCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Yellow Card Cup"
          type="text"
          name="yellowCardCup"
          value={data.yellowCardCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          className="inputWidth"
          placeholder="Red Card Cup"
          type="text"
          name="redCardCup"
          value={data.redCardCup}
          onChange={handleChange}
        />
      </p>

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Step3;
