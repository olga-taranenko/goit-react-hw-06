import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <div className={css.contactList}>
      {list.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
