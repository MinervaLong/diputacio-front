const Step3 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form>
      <p>
        <label htmlFor="goalCup">Goal Cup:</label>
        <input
          type="text"
          name="goalCup"
          value={data.goalCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="assistCup">Assistance Cup:</label>
        <input
          type="text"
          name="assistCup"
          value={data.assistCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="ownGoalCup">Own Goal Cup:</label>
        <input
          type="text"
          name="ownGoalCup"
          value={data.ownGoalCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="yellowCardCup">Yellow Card Cup:</label>
        <input
          type="text"
          name="yellowCardCup"
          value={data.yellowCardCup}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="redCardCup">Red Card Cup:</label>
        <input
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
