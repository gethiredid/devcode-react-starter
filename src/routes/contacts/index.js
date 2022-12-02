import InputContactForm from "../../components/InputContactForm";
import "../../assets/styles/style.css";

const ContactManager = () => {
  // Uncomment code below
  // const [contactsData, setContactsData] = useState([]);

  // Uncomment code below
  // const handleGetContactsData = async () => {
  //   const res = await getAllContactsData();
  //   setContactsData(res?.data?.data);
  // };

  // Uncomment code below
  // useEffect(() => {
  //   handleGetContactsData();
  // }, []);

  return (
    <div className="home">
      <div className="container">
        <InputContactForm />
        <div className="contact-list__container">
          {/* Uncomment code below */}
          {/* <>
            {contactsData && contactsData?.length > 0
              ? contactsData.map((contact, key) => (
                  <ContactItem
                    key={key}
                    id={contact?.id}
                    full_name={contact?.full_name}
                    phone_number={contact?.phone_number}
                    email={contact?.email}
                  />
                ))
              : ""}
          </> */}
        </div>
      </div>
    </div>
  );
};

export default ContactManager;
