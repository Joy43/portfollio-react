import Usecontact from "../../../Hooks/useContant";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfo = () => {
  const [contactinfo] = Usecontact();
  return (
    <div className="grid md:grid-cols-3 gap-5">
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
