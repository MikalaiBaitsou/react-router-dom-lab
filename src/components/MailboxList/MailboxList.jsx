import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>
      {mailboxes.length === 0 ? (
        <p>No mailboxes available.</p>
      ) : (
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>Box #{mailbox._id}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxList;
