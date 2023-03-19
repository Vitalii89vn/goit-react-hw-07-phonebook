import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";



export const App = () => {
  
   const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  )

};
