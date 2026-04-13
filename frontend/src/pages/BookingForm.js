import { useState } from "react";

function BookingForm() {
  const [workshopType, setWorkshopType] = useState("");
  const [date, setDate] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!workshopType || !date || !accepted) {
      setMessage("Please fill all fields and accept terms.");
      return;
    }

    setMessage("Workshop proposed successfully!");
  };

  return (
    <div className="card">
      <h2>Propose Workshop</h2>

      <form onSubmit={handleSubmit}>
        <label>Workshop Type</label>
        <select
          value={workshopType}
          onChange={(e) => setWorkshopType(e.target.value)}
        >
          <option value="">Select workshop</option>
          <option value="python">Python</option>
          <option value="ai">AI</option>
        </select>

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="checkbox">
  <label>
    <input
      type="checkbox"
      checked={accepted}
      onChange={() => setAccepted(!accepted)}
    />
    I accept terms and conditions
  </label>
</div>

        {message && <p className="success">{message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;