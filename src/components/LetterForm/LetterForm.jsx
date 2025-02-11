import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState(mailboxes.length > 0 ? mailboxes[0]._id : "");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipient.trim() || !message.trim()) return;
    
    const newLetter = { mailboxId: Number(mailboxId), recipient, message };
    addLetter(newLetter);

    navigate(`/mailboxes/${mailboxId}`); // Redirect to the mailbox details
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Mailbox:
        <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)}>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Box #{mailbox._id}
            </option>
          ))}
        </select>
      </label>
      <label>
        Recipient Name:
        <input 
          type="text" 
          value={recipient} 
          onChange={(e) => setRecipient(e.target.value)} 
          required 
        />
      </label>
      <label>
        Message:
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;
