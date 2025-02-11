import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  const selectedLetters = letters.filter((letter) => letter.mailboxId === Number(mailboxId));

  return (
    <div>
      {selectedBox ? (
        <>
          <h2>Mailbox Details</h2>
          <p><strong>Box Number:</strong> {selectedBox._id}</p>
          <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
          <p><strong>Size:</strong> {selectedBox.boxSize}</p>
          
          <h3>Letters</h3>
          {selectedLetters.length > 0 ? (
            <ul>
              {selectedLetters.map((letter, index) => (
                <li key={index}>
                  <p><strong>To:</strong> {letter.recipient}</p>
                  <p><strong>Message:</strong> {letter.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No letters in this mailbox.</p>
          )}
        </>
      ) : (
        <p>Mailbox Not Found!</p>
      )}
    </div>
  );
};

export default MailboxDetails;
