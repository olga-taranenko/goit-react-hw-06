import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.textWrap}>
        <p className={css.contactName}>
          <FaUser />
          &ensp;{name}
        </p>
        <p className={css.contactPhone}>
          <BsFillTelephoneFill />
          &ensp;{number}
        </p>
      </div>
      <button
        onClick={() => onDeleteContact(id)}
        type="button"
        className={css.deleteContactBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
