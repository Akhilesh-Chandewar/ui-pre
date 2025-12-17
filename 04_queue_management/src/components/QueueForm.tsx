import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

interface QueueFormData {
  name: string
  service: string
}

interface QueueFormProps {
  onAdd: (data: QueueFormData) => void
}


export default function QueueForm({ onAdd }: QueueFormProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    console.log(name);

    onAdd({ name, service });
    setName("");
    setService("");
  };

  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus /> Add Customer
        </button>
      </form>
    </>
  );
}