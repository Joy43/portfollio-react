import Usecontact from "../../../Hooks/useContant";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfo = () => {
  const [contactinfo] = Usecontact();
  return (
    <div>
      <h1>wlcome to contact info</h1>
      {contactinfo.map((contact) => {
        <ContactInfoCard
          key={contact._id}
          contacts={contact}
        ></ContactInfoCard>;
      })}
    </div>
  );
};

export default ContactInfo;
