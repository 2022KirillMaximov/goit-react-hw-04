import { Formik, Form, Field } from "formik";
import { TiZoom } from "react-icons/ti";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const notify = () => {
    toast.error("Please enter text to search for images.");
  };

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (!values.query.trim()) {
          notify();
          return;
        }
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form  className={styles.form}>
      
      <TiZoom  />
      
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        
        />
      </Form>
    </Formik>
  );
}