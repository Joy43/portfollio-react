const ContactInfoCard = ({ contacts }) => {
  const [name, email, subject, message] = contacts;
  console.log(contacts);
  return (
    <div>
      <h1>hello{name}</h1>
    </div>
  );
};

export default ContactInfoCard;
