const ContactInfoCard = ({ contacts }) => {
  const [name, email, subject, message] = contacts;
  console.log(contacts);
  return (
    <div>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">{name}</div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
